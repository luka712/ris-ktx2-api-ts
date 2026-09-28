import {KtxUastcFlags} from "./KtxUastcFlags.ts";

/**
 * Parameters for Basis Universal supercompression.
 *
 * Field meanings follow libktx `ktxBasisParams`. Every field is optional on
 * this interface; callers that need a non-default ETC1S compression level
 * must set {@link IKtxBasisParams.compressionLevel} explicitly, because `0`
 * is a valid level.
 */
export interface IKtxBasisParams {

    /**
     * ETC1S encoding speed versus quality.
     *
     * libktx 4.3 documents the range as `[0, 5]`. libktx 4.4 documents
     * `[0, 6]`, with the higher levels intended for video. Higher values are
     * slower and produce higher quality. There is no implicit default: `0`
     * is a valid level, so callers set this themselves. The usual KTX default
     * level is `2`.
     */
    compressionLevel?: number;

    /**
     * ETC1S visual quality target.
     *
     * Range is `[1, 255]`. Lower values compress more, run faster, and keep
     * less quality. Higher values compress less, run slower, and keep more
     * quality. This selects the endpoint and selector counts and the RDO
     * thresholds. Setting those lower-level parameters yourself overrides the
     * values chosen from this level. libktx uses the quality level to choose
     * the RDO thresholds only when the level is above `128`; otherwise those
     * thresholds stay at their own defaults. When neither this nor both
     * endpoint and selector counts are set, libktx uses `128`.
     */
    qualityLevel?: number;

    /**
     * `true` to encode UASTC. `false` to encode ETC1S.
     */
    uastc?: boolean;

    /**
     * UASTC encoding options.
     *
     * A combination of {@link KtxUastcFlags}. Level values in bits 0–3 are
     * mutually exclusive. Hints at bit 4 and above can be combined with a
     * level. {@link KtxUastcFlags.FAVOR_UASTC_ERROR} is inside the level mask.
     */
    uastcFlags?: KtxUastcFlags;

    /**
     * Tune codec parameters for normal maps and set the texture DFD accordingly.
     *
     * Disables selector and endpoint RDO. Only valid for linear textures.
     */
    normalMap?: boolean;

    /**
     * Number of threads used for compression.
     *
     * @defaultValue 1
     */
    threadCount?: number;

    /**
     * Swizzle applied before encoding.
     *
     * Four entries, each one of `"r"`, `"g"`, `"b"`, `"a"`, `"0"`, or `"1"`.
     * The KTX C API types the same value as a 4-character string matching
     * `/^[rgba01]{4}$/`. Usable with both ETC1S and UASTC.
     *
     * If both this swizzle and a pre-swizzle are specified,
     * `ktxTexture_CompressBasisEx` raises `KTX_INVALID_OPERATION`.
     */
    inputSwizzle?: string[];

    /**
     * Enable Rate Distortion Optimization post-processing for UASTC.
     */
    uastcRDO?: boolean;

    /**
     * UASTC RDO quality scalar (lambda).
     *
     * Lower values yield higher quality and larger LZ-compressed files.
     * Higher values yield lower quality and smaller LZ-compressed files.
     * A useful range to try is `[0.2, 4]`. The full range is `[0.001, 50]`.
     *
     * @defaultValue 1
     */
    uastcRDOQualityScalar?: number;

    /**
     * When `true`, the encoder may print operation details.
     */
    verbose?: boolean;
}
