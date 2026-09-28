import {type IKtxBasisParams} from "./IKtxBasisParams.ts";
import {KtxTranscodeFlags} from "./KtxTranscodeFlags.ts";
import {KtxTranscodeFormat} from "./KtxTranscodeFormat.ts";
import {VkFormat} from "./VkFormat.ts";
import type {TextureFormatInfo} from "./TextureFormatInfo.ts";
import type {KtxErrorCode} from "./KtxErrorCode.ts";

/**
 * A texture loaded from or created as a KTX or KTX2 container.
 *
 * `ris-ktx2` implements this interface on top of libktx. Implementations own
 * the native texture and release it from {@link IKtx2Texture.delete}.
 * Operations that can fail return a {@link KtxErrorCode}.
 */
export interface IKtx2Texture {

    /**
     * File path of the `.ktx` or `.ktx2` texture when it was loaded from a file.
     *
     * Absent for textures created in memory.
     */
    readonly filePath?: string;

    /** Width of the base level, in pixels. */
    readonly width: number;

    /** Height of the base level, in pixels. */
    readonly height: number;

    /** Size of the texture's image data, in bytes. */
    readonly dataSize: number;

    /**
     * Whether the texture must be transcoded before GPU upload.
     *
     * `true` for Basis Universal (ETC1S or UASTC) data that has not yet been
     * transcoded to a GPU block format.
     */
    readonly needsTranscoding: boolean;

    /** Number of mipmap levels. */
    readonly numLevels: number;

    /** Vulkan format of the texture's current image data. */
    readonly vkFormat: VkFormat;

    /**
     * Transcodes Basis Universal data to a GPU format.
     *
     * @param transcodeFormat - Target format.
     * @param transcodeFlags - Transcode options. Pass {@link KtxTranscodeFlags.NONE} for the default.
     * @returns The error code.
     */
    transcodeBasis(transcodeFormat: KtxTranscodeFormat, transcodeFlags: KtxTranscodeFlags): KtxErrorCode;

    /**
     * Supercompresses the texture with Basis Universal using explicit parameters.
     *
     * @param basisParams - ETC1S or UASTC encoder settings.
     * @returns The error code.
     */
    compressBasis(basisParams: IKtxBasisParams): KtxErrorCode;

    /**
     * Supercompresses the texture with Basis Universal at a single quality value.
     *
     * Encodes the source images (typically to ETC1S) and stores them
     * supercompressed inside the KTX2 container. This replaces the original
     * image data and updates the texture metadata, including the DFD.
     *
     * After compression the texture cannot be uploaded directly. Transcode it
     * to a GPU block format such as ASTC, BC7, or ETC2 first.
     *
     * Based on the KTX-Software libktx writer API:
     * https://github.khronos.org/KTX-Software/libktx/group__writer.html#ga405c44d6daf8ddf83dc805810bf4f989
     *
     * @param quality - Compression quality from 1 to 255.
     * `0` selects the underlying default of 128.
     * Lower values are faster and smaller, with lower quality.
     * Higher values are slower and larger, with higher quality.
     * @returns The error code.
     */
    compressBasis(quality: number): KtxErrorCode;

    /**
     * Encodes uncompressed 2D images to ASTC and replaces the original data.
     *
     * On success the texture fields, including the DFD, describe the ASTC
     * encoding. The result can be uploaded to a GPU without a further transcode.
     *
     * libktx `ktxTexture2_CompressAstc` returns
     * {@link KtxErrorCode.INVALID_OPERATION} when the images are already
     * supercompressed, already block-compressed, use a packed format such as
     * RGB565, have a component size other than 8 bits, or are 1D.
     * It returns {@link KtxErrorCode.OUT_OF_MEMORY} when encoding cannot
     * allocate its working buffers.
     *
     * @param quality - Compression quality. `0` through `100` is the normal
     * range: higher is slower and higher quality, lower is faster and lower
     * quality. The libktx parameter is an unsigned integer, and a negative
     * value is treated as greater than `100`.
     * @returns The error code.
     */
    compressAstc(quality: number): KtxErrorCode;

    /**
     * Reads one image from the texture.
     *
     * @param level - Mipmap level. Defaults to `0` in the `ris-ktx2` implementation.
     * @param layer - Array layer. Defaults to `0` in the `ris-ktx2` implementation.
     * @param faceSlice - Face or slice index. Defaults to `0` in the `ris-ktx2` implementation.
     * @returns The image bytes.
     */
    getImage(level?: number, layer?: number, faceSlice?: number): Uint8Array;

    /**
     * Returns the block layout for a transcode target or Vulkan format.
     *
     * {@link KtxTranscodeFormat} and {@link VkFormat} overlap numerically
     * (for example both use `13`). Implementations must tell them apart by
     * which enumeration the caller passed, not by the number alone.
     *
     * @param format - Transcode target or Vulkan format.
     * @returns Block width, height, depth, and byte size for `format`.
     */
    getTextureFormatInfo(format: KtxTranscodeFormat | VkFormat): TextureFormatInfo;

    /**
     * Creates a copy of the texture.
     *
     * @returns The copied texture.
     */
    createCopy(): IKtx2Texture;

    /**
     * Replaces one image with bytes from memory.
     *
     * @param level - Mipmap level.
     * @param layer - Array layer.
     * @param faceSlice - Face or slice index.
     * @param imageData - Image bytes.
     * @returns The error code.
     */
    setImageFromMemory(level: number, layer: number, faceSlice: number, imageData: ArrayBufferView): KtxErrorCode;

    /**
     * Writes the texture container to memory.
     *
     * @returns The KTX or KTX2 file bytes.
     */
    writeToMemory(): ArrayBufferView;

    /**
     * Deflates the KTX2 data with ZLIB.
     *
     * On success, the level index, data size, DFD, data pointer, and
     * supercompression scheme are updated.
     *
     * @param compressionLevel - Compression level from 1 to 9. Lower is faster.
     * @returns The error code.
     */
    deflateZlib(compressionLevel: number): KtxErrorCode;

    /**
     * Deflates the KTX2 data with Zstandard.
     *
     * On success, the level index, data size, DFD, data pointer, and
     * supercompression scheme are updated.
     *
     * @param compressionLevel - Compression level from 1 to 22. Lower is faster.
     * Values above 20 use more memory.
     * @returns The error code.
     */
    deflateZstd(compressionLevel: number): KtxErrorCode;

    /** Deletes the texture and releases its native resources. */
    delete(): void;
}
