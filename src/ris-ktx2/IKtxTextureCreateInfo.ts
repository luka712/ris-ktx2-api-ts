import type {VkFormat} from "./VkFormat.ts";

/**
 * Parameters for creating an empty 2D KTX2 texture.
 */
export interface IKtxTextureCreateInfo {

    /** Base width of the texture, in pixels. */
    baseWidth: number;

    /** Base height of the texture, in pixels. */
    baseHeight: number;

    /**
     * Vulkan format of the image data.
     *
     * When omitted, the `ris-ktx2` implementation uses {@link VkFormat.R8G8B8A8_SRGB}.
     */
    vkFormat?: VkFormat;

    /**
     * Number of mipmap levels.
     *
     * @defaultValue 1
     */
    numLevels?: number;
}
