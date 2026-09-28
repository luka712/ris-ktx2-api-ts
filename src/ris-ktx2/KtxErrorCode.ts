/**
 * Result codes returned by KTX2 texture operations.
 *
 * This package exposes the two codes the `ris-ktx2` implementation maps
 * from libktx. `SUCCESS` is `0` and `INVALID_OPERATION` is `10`, matching
 * `ktx_error_code_e`.
 */
export enum KtxErrorCode {
    /** The operation was successful. */
    SUCCESS = 0,

    /** The operation is not allowed in the current state. */
    INVALID_OPERATION = 10,
}
