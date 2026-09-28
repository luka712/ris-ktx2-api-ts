# Changelog

## 0.1.0

First public release.

- `IKtx2Texture` and `IKtx2Factory`, the interfaces implemented by `ris-ktx2`
- `IKtxTextureCreateInfo` and `IKtxBasisParams` for creating textures and configuring Basis Universal compression
- `VkFormat`, `KtxTranscodeFormat`, `KtxTranscodeFlags`, `KtxUastcFlags`, `KtxCreateStorage`, and `KtxErrorCode`
- `KtxErrorCode` matches libktx `ktx_error_code_e` from `SUCCESS` (`0`) through `DECOMPRESS_CHECKSUM_ERROR` (`20`). `SUCCESS` and `INVALID_OPERATION` (`10`) are unchanged. libktx's `KTX_ERROR_MAX_ENUM` alias is not a member
- `TextureFormatInfo` block-layout helpers. `fromVkFormat` covers the original eight formats, the sRGB variants of the mapped block formats, `ASTC_4X4_SFLOAT_BLOCK` (same 4×4, 16-byte layout), and the other 8-bit 4-channel formats that store 4 bytes per pixel
