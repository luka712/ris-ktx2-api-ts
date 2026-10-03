import { describe, expect, it } from "vitest";
import {
    KtxCreateStorage,
    KtxErrorCode,
    TextureFormatInfo,
    VkFormat,
    type IKtx2Factory,
    type IKtx2Texture,
    type IKtxTextureCreateInfo,
} from "../src/index.ts";

/**
 * In-memory stand-in for `IKtx2Factory`.
 *
 * Same flow as the "Create and load with a mock factory" README example:
 * `create`, `setImageFromMemory`, `loadAsync`, and `createFromBuffer`.
 * This does not parse a KTX container.
 */
function mockTexture(
    createInfo: IKtxTextureCreateInfo,
    storage: KtxCreateStorage = KtxCreateStorage.ALLOC_STORAGE,
    filePath?: string,
): IKtx2Texture {
    const width = createInfo.baseWidth;
    const height = createInfo.baseHeight;
    const byteLength = storage === KtxCreateStorage.ALLOC_STORAGE ? width * height * 4 : 0;
    let image = new Uint8Array(byteLength);

    const texture: IKtx2Texture = {
        filePath,
        width,
        height,
        get dataSize() {
            return image.byteLength;
        },
        needsTranscoding: false,
        numLevels: createInfo.numLevels ?? 1,
        vkFormat: createInfo.vkFormat ?? VkFormat.R8G8B8A8_SRGB,
        transcodeBasis() {
            return KtxErrorCode.SUCCESS;
        },
        compressBasis() {
            return KtxErrorCode.SUCCESS;
        },
        compressAstc() {
            return KtxErrorCode.SUCCESS;
        },
        getImage() {
            return image;
        },
        getTextureFormatInfo() {
            return TextureFormatInfo.rgba32();
        },
        createCopy() {
            return texture;
        },
        setImageFromMemory(_level, _layer, _faceSlice, imageData) {
            image = new Uint8Array(imageData.byteLength);
            image.set(new Uint8Array(imageData.buffer, imageData.byteOffset, imageData.byteLength));
            return KtxErrorCode.SUCCESS;
        },
        writeToMemory() {
            return image;
        },
        deflateZlib() {
            return KtxErrorCode.SUCCESS;
        },
        deflateZstd() {
            return KtxErrorCode.SUCCESS;
        },
        delete() {
            image = new Uint8Array(0);
        },
    };

    return texture;
}

function mockFactory(stored: Map<string, IKtx2Texture>): IKtx2Factory {
    return {
        async initializeAsync() {
            return undefined;
        },

        async loadAsync(blob) {
            const key = typeof blob === "string" ? blob : blob.name;
            const texture = stored.get(key);
            if (texture === undefined) {
                throw new Error(`no texture stored for ${key}`);
            }
            return texture;
        },

        create(createInfo, storage = KtxCreateStorage.ALLOC_STORAGE) {
            return mockTexture(createInfo, storage);
        },

        createFromBuffer(buffer) {
            const texture = mockTexture(
                {
                    baseWidth: buffer.byteLength,
                    baseHeight: 1,
                    vkFormat: VkFormat.R8G8B8A8_SRGB,
                    numLevels: 1,
                },
                KtxCreateStorage.NO_STORAGE,
            );
            texture.setImageFromMemory(0, 0, 0, buffer);
            return texture;
        },
    };
}

describe("mock KTX factory", () => {
    it("creates a texture and loads it back", async () => {
        const stored = new Map<string, IKtx2Texture>();
        const factory = mockFactory(stored);
        await factory.initializeAsync();

        const createInfo: IKtxTextureCreateInfo = {
            baseWidth: 2,
            baseHeight: 2,
            vkFormat: VkFormat.R8G8B8A8_SRGB,
            numLevels: 1,
        };

        const texture = factory.create(createInfo, KtxCreateStorage.ALLOC_STORAGE);
        expect(texture.width).toBe(2);
        expect(texture.height).toBe(2);
        expect(texture.vkFormat).toBe(VkFormat.R8G8B8A8_SRGB);
        expect(texture.numLevels).toBe(1);
        expect(texture.needsTranscoding).toBe(false);
        expect(texture.dataSize).toBe(16);

        const code = texture.setImageFromMemory(0, 0, 0, new Uint8Array([1, 2, 3, 4]));
        expect(code).toBe(KtxErrorCode.SUCCESS);
        expect(Array.from(texture.getImage(0, 0, 0))).toEqual([1, 2, 3, 4]);

        stored.set("memory.ktx2", texture);
        const loaded = await factory.loadAsync("memory.ktx2");
        const image = loaded.getImage(0, 0, 0);
        expect(loaded).toBe(texture);
        expect(Array.from(image)).toEqual([1, 2, 3, 4]);

        const fromBuffer = factory.createFromBuffer(texture.writeToMemory());
        expect(fromBuffer.width).toBe(4);
        expect(fromBuffer.height).toBe(1);
        expect(fromBuffer.vkFormat).toBe(VkFormat.R8G8B8A8_SRGB);
        expect(Array.from(fromBuffer.getImage())).toEqual([1, 2, 3, 4]);

        texture.delete();
        expect(texture.dataSize).toBe(0);
        expect(Array.from(loaded.getImage())).toEqual([]);
    });

    it("loadAsync rejects a key that was not stored", async () => {
        const factory = mockFactory(new Map());
        await factory.initializeAsync();

        await expect(factory.loadAsync("missing.ktx2")).rejects.toThrow(/missing.ktx2/);
    });
});
