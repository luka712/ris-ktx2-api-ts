/**
 * Result codes returned by KTX2 texture operations.
 *
 * Names and numeric values match libktx `ktx_error_code_e`.
 * `KTX_ERROR_MAX_ENUM` is not a member: in libktx it aliases
 * {@link KtxErrorCode.DECOMPRESS_CHECKSUM_ERROR} and is not a distinct result.
 */
export enum KtxErrorCode {
    /** The operation succeeded. */
    SUCCESS = 0,

    /** The file data does not match the KTX specification. */
    FILE_DATA_ERROR = 1,

    /** The file is a pipe or a named pipe. */
    FILE_ISPIPE = 2,

    /** The target file could not be opened. */
    FILE_OPEN_FAILED = 3,

    /** The operation would exceed the maximum file size. */
    FILE_OVERFLOW = 4,

    /** Reading the file failed. */
    FILE_READ_ERROR = 5,

    /** Seeking in the file failed. */
    FILE_SEEK_ERROR = 6,

    /** The file ended before the requested data was read. */
    FILE_UNEXPECTED_EOF = 7,

    /** Writing the file failed. */
    FILE_WRITE_ERROR = 8,

    /** An OpenGL call failed. */
    GL_ERROR = 9,

    /** The operation is not allowed in the current state. */
    INVALID_OPERATION = 10,

    /** A parameter value was not valid. */
    INVALID_VALUE = 11,

    /** A metadata key was missing, or a required GPU entry point was not found. */
    NOT_FOUND = 12,

    /** Not enough memory to complete the operation. */
    OUT_OF_MEMORY = 13,

    /** Transcoding a block-compressed texture failed. */
    TRANSCODE_FAILED = 14,

    /** The file is not a KTX file. */
    UNKNOWN_FILE_FORMAT = 15,

    /** The file requests a texture type this library does not support. */
    UNSUPPORTED_TEXTURE_TYPE = 16,

    /** The feature is not built into this library, or it is not implemented yet. */
    UNSUPPORTED_FEATURE = 17,

    /** An OpenGL or Vulkan dependency is not linked into the application. */
    LIBRARY_NOT_LINKED = 18,

    /** The decompressed byte count does not match the expected size. */
    DECOMPRESS_LENGTH_ERROR = 19,

    /** A checksum did not match while decompressing. */
    DECOMPRESS_CHECKSUM_ERROR = 20,
}
