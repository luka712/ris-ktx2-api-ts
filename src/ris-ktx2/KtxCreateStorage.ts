/**
 * How image storage is allocated when a KTX2 texture is created.
 *
 * Values match libktx `ktxTextureCreateStorageEnum`:
 * `KTX_TEXTURE_CREATE_NO_STORAGE` is `0` and
 * `KTX_TEXTURE_CREATE_ALLOC_STORAGE` is `1`.
 */
export enum KtxCreateStorage {
    /** Do not allocate image storage. */
    NO_STORAGE,

    /** Allocate image storage for the texture. */
    ALLOC_STORAGE,
}
