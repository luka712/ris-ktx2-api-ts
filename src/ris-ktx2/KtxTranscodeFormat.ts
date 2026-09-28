/**
 * Target formats for transcoding a Basis Universal (ETC1S or UASTC) texture.
 *
 * Numeric values match the libktx `ktx_transcode_fmt_e` enumerators.
 * Gaps in the numbering are formats libktx does not expose (there is no
 * equivalent `VkFormat` for the omitted targets).
 */
export enum KtxTranscodeFormat {
    /**
     * Opaque ETC1 RGB. Returns alpha data instead when
     * {@link KtxTranscodeFlags.TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS} is set.
     */
    KTX_TTF_ETC1_RGB = 0,

    /**
     * ETC2 RGBA. An EAC alpha block followed by an ETC1 block.
     * Textures without alpha get an opaque alpha channel.
     */
    ETC2_RGBA = 1,

    /**
     * Opaque BC1 RGB. Returns alpha data instead when
     * {@link KtxTranscodeFlags.TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS} is set.
     */
    KTX_TTF_BC1_RGB = 2,

    /**
     * BC3 compressed RGBA.
     * Common on desktop devices. Widely supported block compression for color textures.
     */
    BC3_RGBA = 3,

    /**
     * Single-channel BC4. The red channel is the opaque or alpha green component,
     * depending on {@link KtxTranscodeFlags.TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS}.
     */
    KTX_TTF_BC4_R = 4,

    /**
     * Two-channel BC5 (red and green). Intended for tangent-space normal maps.
     * The texture should have an alpha channel; otherwise green is 255.
     */
    KTX_TTF_BC5_RG = 5,

    /**
     * BC7 compressed RGBA.
     * High quality block compression for color textures.
     * Supports an alpha channel and is suitable for diffuse and physically based textures.
     */
    BC7_RGBA = 6,

    /**
     * Opaque PVRTC1 4bpp RGB. Returns alpha data instead when
     * {@link KtxTranscodeFlags.TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS} is set.
     */
    KTX_TTF_PVRTC1_4_RGB = 8,

    /**
     * PVRTC1 4bpp RGBA. Useful for simple opacity maps.
     * If the texture has no alpha channel, PVRTC1 4bpp RGB is used instead.
     */
    KTX_TTF_PVRTC1_4_RGBA = 9,

    /**
     * ASTC 4×4 RGBA.
     * Common on mobile devices, especially Apple. High quality block compression
     * for color textures, including an alpha channel.
     */
    ASTC_4X4_RGBA = 10,

    /**
     * Uncompressed 32bpp RGBA in raster order (R, G, B, A).
     * Supported on all devices.
     */
    RGBA32 = 13,

    /** Uncompressed 16bpp RGB565 in raster order, with red in the high bits. */
    KTX_TTF_RGB565 = 14,

    /** Uncompressed 16bpp BGR565 in raster order, with red in the low bits. */
    KTX_TTF_BGR565 = 15,

    /** Uncompressed 16bpp RGBA4444 in raster order. */
    KTX_TTF_RGBA4444 = 16,

    /**
     * Opaque PVRTC2 4bpp RGB. Supports arbitrary dimensions, unlike PVRTC1.
     */
    KTX_TTF_PVRTC2_4_RGB = 18,

    /** PVRTC2 4bpp RGBA. Premultiplied alpha is recommended. */
    KTX_TTF_PVRTC2_4_RGBA = 19,

    /**
     * Unsigned ETC2 EAC R11. The red channel is the opaque or alpha green
     * component, depending on
     * {@link KtxTranscodeFlags.TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS}.
     */
    KTX_TTF_ETC2_EAC_R11 = 20,

    /**
     * Unsigned ETC2 EAC RG11. Intended for tangent-space normal maps.
     * The texture should have an alpha channel; otherwise green is 255.
     */
    KTX_TTF_ETC2_EAC_RG11 = 21,

    /**
     * Selects {@link KtxTranscodeFormat.KTX_TTF_ETC1_RGB} or
     * {@link KtxTranscodeFormat.ETC2_RGBA} according to whether the texture has alpha.
     */
    KTX_TTF_ETC = 22,

    /**
     * Selects {@link KtxTranscodeFormat.KTX_TTF_BC1_RGB} or
     * {@link KtxTranscodeFormat.BC3_RGBA} according to whether the texture has alpha.
     */
    BC1_OR_3 = 23,

    /** No transcode format selected. */
    NO_SELECTION = 2147483647,
}
