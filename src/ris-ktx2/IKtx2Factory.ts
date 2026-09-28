import {KtxCreateStorage} from "./KtxCreateStorage.ts";
import type {IKtx2Texture} from "./IKtx2Texture.ts";
import type {IKtxTextureCreateInfo} from "./IKtxTextureCreateInfo.ts";

/**
 * Creates and loads KTX2 textures.
 *
 * `ris-ktx2` provides the implementation. Call {@link IKtx2Factory.initializeAsync}
 * before {@link IKtx2Factory.loadAsync}, {@link IKtx2Factory.create}, or
 * {@link IKtx2Factory.createFromBuffer}.
 */
export interface IKtx2Factory {

    /**
     * Initializes the factory and loads the native KTX library.
     */
    initializeAsync(): Promise<void>;

    /**
     * Loads a KTX or KTX2 texture.
     *
     * @param blob - A `File` to read, or a URL string to fetch.
     * @returns The loaded texture.
     */
    loadAsync(blob: string | File): Promise<IKtx2Texture>;

    /**
     * Creates a KTX2 texture from {@link IKtxTextureCreateInfo}.
     *
     * @param createInfo - Width, height, format, and mip count.
     * @param storage - Whether to allocate image storage. Optional.
     * @returns The new texture.
     */
    create(createInfo: IKtxTextureCreateInfo, storage?: KtxCreateStorage): IKtx2Texture;

    /**
     * Creates a texture from an in-memory KTX or KTX2 file.
     *
     * @param buffer - File bytes.
     * @returns The loaded texture.
     */
    createFromBuffer(buffer: ArrayBufferView<ArrayBufferLike>): IKtx2Texture;
}
