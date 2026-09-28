import { describe, expect, it } from "vitest";
import {
    KtxCreateStorage,
    KtxErrorCode,
    KtxTranscodeFlags,
    KtxTranscodeFormat,
    KtxUastcFlags,
    TextureFormatInfo,
    VkFormat,
    type IKtx2Factory,
    type IKtxTextureCreateInfo,
} from "../src/index.ts";

describe("TextureFormatInfo", () => {
    it("sizes an uncompressed RGBA8 level", () => {
        const info = TextureFormatInfo.rgba32();

        expect(info.blockWidth).toBe(1);
        expect(info.blockHeight).toBe(1);
        expect(info.blockDepth).toBe(1);
        expect(info.bytesPerBlock).toBe(4);
        expect(info.pixelSize).toBe(4);
        expect(info.getBlocksPerRow(2)).toBe(2);
        expect(info.getBlocksPerColumn(2)).toBe(2);
        expect(info.getBlocksPerSlice(2)).toBe(2);
        expect(info.getBytesPerRow(2)).toBe(8);
        expect(info.getDataSize(2, 2)).toBe(16);
        expect(info.getDataSize3D(2, 2, 2)).toBe(32);
        expect(info.getAlignedBytesPerRow(1)).toBe(256);
        expect(info.getAlignedBytesPerRow(64)).toBe(256);
        expect(info.getAlignedBytesPerRow(65)).toBe(512);
    });

    it("rounds compressed blocks up to whole blocks", () => {
        const info = TextureFormatInfo.bc7();

        expect(info.pixelSize).toBe(1);
        expect(info.getBlocksPerRow(5)).toBe(2);
        expect(info.getBlocksPerColumn(5)).toBe(2);
        expect(info.getBlocksPerSlice(1)).toBe(1);
        expect(info.getBytesPerRow(5)).toBe(32);
        expect(info.getDataSize(1, 1)).toBe(16);
        expect(info.getDataSize(5, 5)).toBe(64);
        expect(info.getDataSize(256, 256)).toBe(65536);
        expect(info.getDataSize3D(4, 4, 2)).toBe(32);
        expect(info.getAlignedBytesPerRow(4)).toBe(256);
        expect(info.getAlignedBytesPerRow(64)).toBe(256);
        expect(info.getAlignedBytesPerRow(68)).toBe(512);
    });

    it("uses the same byte size for BC3, ETC2 RGBA, and ASTC 4x4", () => {
        const bc7 = TextureFormatInfo.bc7();

        expect(TextureFormatInfo.bc3()).toEqual(bc7);
        expect(TextureFormatInfo.etc2rgba()).toEqual(bc7);
        expect(TextureFormatInfo.astc4x4rgba()).toEqual(bc7);
        expect(TextureFormatInfo.depth24Stencil8()).toEqual(TextureFormatInfo.rgba32());
        expect(TextureFormatInfo.depth32float()).toEqual(TextureFormatInfo.rgba32());
    });

    it("maps Vulkan formats that share an existing layout", () => {
        const rgba = TextureFormatInfo.rgba32();
        const rgbaFormats = [
            VkFormat.R8G8B8A8_UNORM,
            VkFormat.R8G8B8A8_SNORM,
            VkFormat.R8G8B8A8_USCALED,
            VkFormat.R8G8B8A8_SSCALED,
            VkFormat.R8G8B8A8_UINT,
            VkFormat.R8G8B8A8_SINT,
            VkFormat.R8G8B8A8_SRGB,
            VkFormat.B8G8R8A8_UNORM,
            VkFormat.B8G8R8A8_SNORM,
            VkFormat.B8G8R8A8_USCALED,
            VkFormat.B8G8R8A8_SSCALED,
            VkFormat.B8G8R8A8_UINT,
            VkFormat.B8G8R8A8_SINT,
            VkFormat.B8G8R8A8_SRGB,
            VkFormat.A8B8G8R8_UNORM_PACK32,
            VkFormat.A8B8G8R8_SNORM_PACK32,
            VkFormat.A8B8G8R8_USCALED_PACK32,
            VkFormat.A8B8G8R8_SSCALED_PACK32,
            VkFormat.A8B8G8R8_UINT_PACK32,
            VkFormat.A8B8G8R8_SINT_PACK32,
            VkFormat.A8B8G8R8_SRGB_PACK32,
        ];

        for (const format of rgbaFormats) {
            expect(TextureFormatInfo.fromVkFormat(format)).toEqual(rgba);
        }

        expect(TextureFormatInfo.fromVkFormat(VkFormat.D24_UNORM_S8_UINT)).toEqual(TextureFormatInfo.depth24Stencil8());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.D32_SFLOAT)).toEqual(TextureFormatInfo.depth32float());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ASTC_4X4_UNORM_BLOCK)).toEqual(TextureFormatInfo.astc4x4rgba());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ASTC_4X4_SRGB_BLOCK)).toEqual(TextureFormatInfo.astc4x4rgba());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ASTC_4X4_SFLOAT_BLOCK)).toEqual(TextureFormatInfo.astc4x4rgba());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ASTC_4X4_SFLOAT_BLOCK_EXT)).toEqual(TextureFormatInfo.astc4x4rgba());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.BC3_UNORM_BLOCK)).toEqual(TextureFormatInfo.bc3());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.BC3_SRGB_BLOCK)).toEqual(TextureFormatInfo.bc3());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.BC7_UNORM_BLOCK)).toEqual(TextureFormatInfo.bc7());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.BC7_SRGB_BLOCK)).toEqual(TextureFormatInfo.bc7());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ETC2_R8G8B8A8_UNORM_BLOCK)).toEqual(TextureFormatInfo.etc2rgba());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ETC2_R8G8B8A8_SRGB_BLOCK)).toEqual(TextureFormatInfo.etc2rgba());
    });

    it("throws for a Vulkan format with no layout", () => {
        expect(() => TextureFormatInfo.fromVkFormat(VkFormat.R8_UNORM)).toThrow(/no layout/);
        expect(() => TextureFormatInfo.fromVkFormat(VkFormat.BC1_RGB_UNORM_BLOCK)).toThrow(/no layout/);
        expect(() => TextureFormatInfo.fromVkFormat(VkFormat.UNDEFINED)).toThrow(/VkFormat 0/);
    });
});

describe("public enumerations", () => {
    it("keeps the libktx and Vulkan numeric values", () => {
        expect(KtxErrorCode.SUCCESS).toBe(0);
        expect(KtxErrorCode.INVALID_OPERATION).toBe(10);
        expect(KtxErrorCode.DECOMPRESS_CHECKSUM_ERROR).toBe(20);
        expect(KtxCreateStorage.NO_STORAGE).toBe(0);
        expect(KtxCreateStorage.ALLOC_STORAGE).toBe(1);
        expect(KtxTranscodeFlags.NONE).toBe(0);
        expect(KtxTranscodeFlags.PVRTC_DECODE_TO_NEXT_POW2).toBe(2);
        expect(KtxTranscodeFlags.TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS).toBe(4);
        expect(KtxTranscodeFlags.HIGH_QUALITY).toBe(32);
        expect(KtxTranscodeFlags.HIGH_QUALITY | KtxTranscodeFlags.PVRTC_DECODE_TO_NEXT_POW2).toBe(34);
        expect(KtxTranscodeFormat.KTX_TTF_ETC1_RGB).toBe(0);
        expect(KtxTranscodeFormat.BC7_RGBA).toBe(6);
        expect(KtxTranscodeFormat.RGBA32).toBe(13);
        expect(KtxTranscodeFormat.BC1_OR_3).toBe(23);
        expect(KtxTranscodeFormat.NO_SELECTION).toBe(2147483647);
        expect(KtxUastcFlags.LEVEL_DEFAULT).toBe(2);
        expect(KtxUastcFlags.LEVEL_MASK).toBe(15);
        expect(KtxUastcFlags.FAVOR_UASTC_ERROR).toBe(8);
        expect((KtxUastcFlags.LEVEL_DEFAULT | KtxUastcFlags.FAVOR_UASTC_ERROR) & KtxUastcFlags.LEVEL_MASK).toBe(10);
        expect((KtxUastcFlags.LEVEL_DEFAULT | KtxUastcFlags.FAVOR_BC7_ERROR) & KtxUastcFlags.LEVEL_MASK).toBe(2);
        expect(VkFormat.R8G8B8A8_SRGB).toBe(43);
        expect(VkFormat.BC7_UNORM_BLOCK).toBe(145);
        expect(VkFormat.BC7_SRGB_BLOCK).toBe(146);
        expect(VkFormat.G8B8G8R8_422_UNORM_KHR).toBe(VkFormat.G8B8G8R8_422_UNORM);
        expect(VkFormat.ASTC_4X4_SFLOAT_BLOCK_EXT).toBe(VkFormat.ASTC_4X4_SFLOAT_BLOCK);
    });

    it("lists every libktx ktx_error_code_e value except the max alias", () => {
        const names = [
            "SUCCESS",
            "FILE_DATA_ERROR",
            "FILE_ISPIPE",
            "FILE_OPEN_FAILED",
            "FILE_OVERFLOW",
            "FILE_READ_ERROR",
            "FILE_SEEK_ERROR",
            "FILE_UNEXPECTED_EOF",
            "FILE_WRITE_ERROR",
            "GL_ERROR",
            "INVALID_OPERATION",
            "INVALID_VALUE",
            "NOT_FOUND",
            "OUT_OF_MEMORY",
            "TRANSCODE_FAILED",
            "UNKNOWN_FILE_FORMAT",
            "UNSUPPORTED_TEXTURE_TYPE",
            "UNSUPPORTED_FEATURE",
            "LIBRARY_NOT_LINKED",
            "DECOMPRESS_LENGTH_ERROR",
            "DECOMPRESS_CHECKSUM_ERROR",
        ] as const;

        names.forEach((name, value) => {
            expect(KtxErrorCode[name]).toBe(value);
            expect(KtxErrorCode[value]).toBe(name);
        });

        expect(Object.prototype.hasOwnProperty.call(KtxErrorCode, "ERROR_MAX_ENUM")).toBe(false);
    });
});

describe("public types", () => {
    it("accepts a create-info object from the package entry point", () => {
        const createInfo: IKtxTextureCreateInfo = {
            baseWidth: 256,
            baseHeight: 256,
            vkFormat: VkFormat.R8G8B8A8_SRGB,
            numLevels: 1,
        };
        const factory: IKtx2Factory = {
            async initializeAsync() {
                return undefined;
            },
            async loadAsync() {
                throw new Error("not used");
            },
            create() {
                throw new Error("not used");
            },
            createFromBuffer() {
                throw new Error("not used");
            },
        };

        expect(createInfo.vkFormat).toBe(VkFormat.R8G8B8A8_SRGB);
        expect(factory).toBeDefined();
        expect(TextureFormatInfo.fromVkFormat(VkFormat.BC7_SRGB_BLOCK).getDataSize(256, 256)).toBe(65536);
    });
});
