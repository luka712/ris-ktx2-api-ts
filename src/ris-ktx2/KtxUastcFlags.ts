/**
 * UASTC encoding configuration flags.
 *
 * Packed bitfield matching libktx `ktx_pack_uastc_flag_bits_e`.
 * Bits 0–3 hold the compression level ({@link KtxUastcFlags.LEVEL_MASK}).
 * {@link KtxUastcFlags.FAVOR_UASTC_ERROR} is `8`, so it sits inside that mask:
 * combining it with a level changes the value `LEVEL_MASK` extracts.
 * Hints at bit 4 and above (`16`, `64`, `128`, `256`) combine with a level
 * with bitwise OR and leave bits 0–3 unchanged.
 */
export enum KtxUastcFlags {
    /**
     * Fastest compression (lowest quality, highest speed). About 43.45 dB.
     */
    LEVEL_FASTEST = 0,

    /**
     * Faster compression. About 46.49 dB.
     */
    LEVEL_FASTER = 1,

    /**
     * Default compression level. About 47.47 dB.
     */
    LEVEL_DEFAULT = 2,

    /**
     * Slower compression (higher quality). About 48.01 dB.
     */
    LEVEL_SLOWER = 3,

    /**
     * Very slow compression (highest quality). About 48.24 dB.
     */
    LEVEL_VERY_SLOW = 4,

    /**
     * Mask for the compression level in bits 0–3.
     */
    LEVEL_MASK = 15,

    /**
     * Optimize encoding for the lowest UASTC reconstruction error.
     */
    FAVOR_UASTC_ERROR = 8,

    /**
     * Optimize encoding for the lowest BC7 decode error.
     */
    FAVOR_BC7_ERROR = 16,

    /**
     * Hint to optimize for faster ETC1 transcoding.
     */
    ETC1_FASTER_HINTS = 64,

    /**
     * Hint to optimize for the fastest ETC1 transcoding.
     */
    ETC1_FASTEST_HINTS = 128,

    /**
     * Disables flip-and-individual optimizations for ETC1 transcoding.
     */
    ETC1_DISABLE_FLIP_AND_INDIVIDUAL = 256,
}
