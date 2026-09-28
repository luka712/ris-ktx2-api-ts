/**
 * Flags that select options for Basis Universal transcoding.
 *
 * Numeric values match the libktx `ktx_transcode_flag_bits_e` enumerators.
 * Combine them with bitwise OR when more than one option applies.
 */
export enum KtxTranscodeFlags {
    /** No special transcoding options. */
    NONE = 0,

    /**
     * For PVRTC1, decode a non-power-of-two ETC1S level to the next larger
     * power of two. libktx documents this option as not implemented yet.
     * Ignored when the level dimensions are already powers of two.
     */
    PVRTC_DECODE_TO_NEXT_POW2 = 2,

    /**
     * When transcoding to an opaque format, decode the alpha slice instead of
     * the color slice if the Basis data has alpha. Has no effect when there
     * is no alpha data.
     */
    TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS = 4,

    /**
     * Request a higher-quality transcode of UASTC to BC1, BC3, ETC2 EAC R11,
     * or ETC2 EAC RG11. Unused by other UASTC transcode targets.
     */
    HIGH_QUALITY = 32,
}
