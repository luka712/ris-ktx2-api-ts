import {VkFormat} from "./VkFormat.ts";

/**
 * Describes how a texture format is laid out in memory, in blocks.
 *
 * For uncompressed formats a block is one pixel:
 * `blockWidth` and `blockHeight` are `1`, and `bytesPerBlock` is the bytes per pixel.
 *
 * For compressed formats such as BC7, a block is a group of pixels
 * (typically 4×4) stored in a fixed number of bytes.
 */
export class TextureFormatInfo {
    /** Width of one block, in pixels. */
    public readonly blockWidth: number;

    /** Height of one block, in pixels. */
    public readonly blockHeight: number;

    /** Depth of one block, in pixels. */
    public readonly blockDepth: number;

    /** Size of one block, in bytes. */
    public readonly bytesPerBlock: number;

    /**
     * Average number of bytes used per pixel.
     *
     * For uncompressed formats this is the bytes per pixel.
     * For compressed formats this is the average storage cost per pixel.
     */
    public get pixelSize(): number {
        return this.bytesPerBlock /
            (this.blockWidth * this.blockHeight * this.blockDepth);
    }

    /**
     * Creates a block-layout description.
     *
     * @param blockWidth - Block width, in pixels.
     * @param blockHeight - Block height, in pixels.
     * @param blockDepth - Block depth, in pixels.
     * @param bytesPerBlock - Bytes stored in one block.
     */
    public constructor(
        blockWidth: number,
        blockHeight: number,
        blockDepth: number,
        bytesPerBlock: number
    ) {
        this.blockWidth = blockWidth;
        this.blockHeight = blockHeight;
        this.blockDepth = blockDepth;
        this.bytesPerBlock = bytesPerBlock;
    }

    /**
     * Number of blocks needed to cover `width` pixels.
     *
     * @param width - Texture width, in pixels.
     * @returns Block count, rounded up to a whole block.
     */
    public getBlocksPerRow(width: number): number {
        return Math.ceil(width / this.blockWidth);
    }

    /**
     * Number of block rows needed to cover `height` pixels.
     *
     * @param height - Texture height, in pixels.
     * @returns Block-row count, rounded up to a whole block.
     */
    public getBlocksPerColumn(height: number): number {
        return Math.ceil(height / this.blockHeight);
    }

    /**
     * Number of block slices needed to cover `depth` pixels.
     *
     * @param depth - Texture depth, in pixels.
     * @returns Block-slice count, rounded up to a whole block.
     */
    public getBlocksPerSlice(depth: number): number {
        return Math.ceil(depth / this.blockDepth);
    }

    /**
     * Unaligned number of bytes in one row of blocks.
     *
     * @param width - Texture width, in pixels.
     * @returns Bytes per row, without a 256-byte alignment.
     */
    public getBytesPerRow(width: number): number {
        return this.getBlocksPerRow(width) * this.bytesPerBlock;
    }

    /**
     * WebGPU `bytesPerRow` for `width`.
     *
     * WebGPU requires `bytesPerRow` to be a multiple of 256.
     *
     * @param width - Texture width, in pixels.
     * @returns `getBytesPerRow(width)` rounded up to a multiple of 256.
     */
    public getAlignedBytesPerRow(width: number): number {
        const bytesPerRow = this.getBytesPerRow(width);
        return Math.ceil(bytesPerRow / 256) * 256;
    }

    /**
     * Byte size of one 2D mip level.
     *
     * @param width - Level width, in pixels.
     * @param height - Level height, in pixels.
     * @returns Level size, in bytes.
     */
    public getDataSize(width: number, height: number): number {
        const blocksX = this.getBlocksPerRow(width);
        const blocksY = this.getBlocksPerColumn(height);

        return blocksX * blocksY * this.bytesPerBlock;
    }

    /**
     * Byte size of one 3D mip level.
     *
     * @param width - Level width, in pixels.
     * @param height - Level height, in pixels.
     * @param depth - Level depth, in pixels.
     * @returns Level size, in bytes.
     */
    public getDataSize3D(
        width: number,
        height: number,
        depth: number
    ): number {
        const blocksX = this.getBlocksPerRow(width);
        const blocksY = this.getBlocksPerColumn(height);
        const blocksZ = this.getBlocksPerSlice(depth);

        return blocksX * blocksY * blocksZ * this.bytesPerBlock;
    }

    /**
     * BC7 layout: 4×4 blocks, 16 bytes per block.
     *
     * @returns The BC7 {@link TextureFormatInfo}.
     */
    public static bc7(): TextureFormatInfo {
        return new TextureFormatInfo(4, 4, 1, 16);
    }

    /**
     * BC3 layout: 4×4 blocks, 16 bytes per block.
     *
     * @returns The BC3 {@link TextureFormatInfo}.
     */
    public static bc3(): TextureFormatInfo {
        return new TextureFormatInfo(4, 4, 1, 16);
    }

    /**
     * ETC2 RGBA layout: 4×4 blocks, 16 bytes per block.
     *
     * @returns The ETC2 RGBA {@link TextureFormatInfo}.
     */
    public static etc2rgba(): TextureFormatInfo {
        return new TextureFormatInfo(4, 4, 1, 16);
    }

    /**
     * ASTC 4×4 RGBA layout: 4×4 blocks, 16 bytes per block.
     *
     * @returns The ASTC 4×4 RGBA {@link TextureFormatInfo}.
     */
    public static astc4x4rgba(): TextureFormatInfo {
        return new TextureFormatInfo(4, 4, 1, 16);
    }

    /**
     * Uncompressed RGBA8 layout: 1×1 blocks, 4 bytes per pixel.
     *
     * @returns The RGBA8 {@link TextureFormatInfo}.
     */
    public static rgba32(): TextureFormatInfo {
        return new TextureFormatInfo(1, 1, 1, 4);
    }

    /**
     * `D24_UNORM_S8_UINT` layout: 4 bytes per pixel.
     *
     * @returns The depth/stencil {@link TextureFormatInfo}.
     */
    public static depth24Stencil8(): TextureFormatInfo {
        return new TextureFormatInfo(1, 1, 1, 4);
    }

    /**
     * `D32_SFLOAT` layout: 4 bytes per pixel.
     *
     * @returns The 32-bit float depth {@link TextureFormatInfo}.
     */
    public static depth32float(): TextureFormatInfo {
        return new TextureFormatInfo(1, 1, 1, 4);
    }

    /**
     * Block layout for a Vulkan format this package knows how to size.
     *
     * Supported formats are `R8G8B8A8_UNORM`, `R8G8B8A8_SRGB`,
     * `D24_UNORM_S8_UINT`, `D32_SFLOAT`, `ASTC_4X4_UNORM_BLOCK`,
     * `BC7_UNORM_BLOCK`, `BC3_UNORM_BLOCK`, and `ETC2_R8G8B8A8_UNORM_BLOCK`.
     *
     * @param vkFormat - Vulkan format.
     * @returns The matching layout.
     * @throws {Error} When `vkFormat` has no layout in this package.
     */
    public static fromVkFormat(vkFormat: VkFormat): TextureFormatInfo {
        switch (vkFormat) {
            case VkFormat.R8G8B8A8_UNORM:
            case VkFormat.R8G8B8A8_SRGB:
                return this.rgba32();
            case VkFormat.D24_UNORM_S8_UINT:
                return this.depth24Stencil8();
            case VkFormat.D32_SFLOAT:
                return this.depth32float();
            case VkFormat.ASTC_4X4_UNORM_BLOCK:
                return this.astc4x4rgba();
            case VkFormat.BC7_UNORM_BLOCK:
                return this.bc7();
            case VkFormat.BC3_UNORM_BLOCK:
                return this.bc3();
            case VkFormat.ETC2_R8G8B8A8_UNORM_BLOCK:
                return this.etc2rgba();
            default:
                throw new Error(`TextureFormatInfo.fromVkFormat has no layout for VkFormat ${vkFormat}.`);
        }
    }
}
