# ris-ktx2-api

TypeScript interfaces, enumerations, and texture-format helpers for [KTX2](https://registry.khronos.org/KTX/specs/2.0/ktxspec.v2.html) textures. Version 0.1.0.

This package has no WebAssembly and does not read or write files. It is the type surface that `ris-ktx2` implements. `ris-ktx2` wraps Khronos libktx (`libktx.js`) and depends on this package.

Use this package on its own for the enumerations, `TextureFormatInfo`, or to type a function that receives an `IKtx2Factory` or `IKtx2Texture`. Use `ris-ktx2` when you need to load, create, transcode, or compress a texture. `ris-ktx2` exports `Ktx2Factory`, which implements `IKtx2Factory`.

## Install

```sh
npm install ris-ktx2-api
```

The package is ESM only. `package.json` `exports` resolves JavaScript to `dist/index.js` and types to `dist/index.d.ts`. There are no runtime dependencies and the module has no import-time side effects.

## Exports

Everything is exported from the package root.

- `IKtx2Texture` — loaded or created KTX/KTX2 texture: dimensions, transcode, Basis and ASTC compression, ZLIB/Zstandard deflate, image get/set, and write-to-memory
- `IKtx2Factory` — `initializeAsync`, `loadAsync` (a URL string or a browser `File`), `create`, and `createFromBuffer`
- `IKtxTextureCreateInfo` — base width, height, optional `VkFormat`, optional mip count
- `IKtxBasisParams` — ETC1S and UASTC compression settings
- `KtxTranscodeFormat`, `KtxTranscodeFlags` — Basis Universal transcode target and options
- `KtxUastcFlags` — UASTC encoder level and hint bits
- `KtxCreateStorage` — `NO_STORAGE` (`0`) or `ALLOC_STORAGE` (`1`)
- `KtxErrorCode` — libktx `ktx_error_code_e` from `SUCCESS` (`0`) through `DECOMPRESS_CHECKSUM_ERROR` (`20`). libktx's `KTX_ERROR_MAX_ENUM` alias is not included
- `VkFormat` — Vulkan format enumerators, including extension aliases
- `TextureFormatInfo` — block width, height, byte size, and mip-level size

`TextureFormatInfo.fromVkFormat` returns a layout when the byte size matches a helper this package already defines. sRGB, signed, integer, and scaled variants share that size, and channel order does not change it.

- `R8G8B8A8_*`, `B8G8R8A8_*`, and `A8B8G8R8_*_PACK32` — 4 bytes per pixel
- `D24_UNORM_S8_UINT` and `D32_SFLOAT` — 4 bytes per pixel
- `BC3_UNORM_BLOCK` and `BC3_SRGB_BLOCK`
- `BC7_UNORM_BLOCK` and `BC7_SRGB_BLOCK`
- `ETC2_R8G8B8A8_UNORM_BLOCK` and `ETC2_R8G8B8A8_SRGB_BLOCK`
- `ASTC_4X4_UNORM_BLOCK`, `ASTC_4X4_SRGB_BLOCK`, and `ASTC_4X4_SFLOAT_BLOCK` (`ASTC_4X4_SFLOAT_BLOCK_EXT` is the same value)

Other `VkFormat` values throw.

`KtxTranscodeFormat` and `VkFormat` reuse some numbers (both use `13`, for example). `IKtx2Texture.getTextureFormatInfo` takes either enumeration, and an implementation has to tell them apart by type rather than by the number.

## Usage

`TextureFormatInfo` runs on its own. Creating a texture needs an `IKtx2Factory`. `ris-ktx2` provides that with `Ktx2Factory`.

```ts
import { Ktx2Factory } from "ris-ktx2";
import {
  KtxCreateStorage,
  KtxErrorCode,
  KtxTranscodeFlags,
  KtxTranscodeFormat,
  TextureFormatInfo,
  VkFormat,
  type IKtxTextureCreateInfo,
} from "ris-ktx2-api";

const createInfo: IKtxTextureCreateInfo = {
  baseWidth: 256,
  baseHeight: 256,
  vkFormat: VkFormat.R8G8B8A8_SRGB,
  numLevels: 1,
};

const layout = TextureFormatInfo.fromVkFormat(VkFormat.BC7_SRGB_BLOCK);
const levelBytes = layout.getDataSize(createInfo.baseWidth, createInfo.baseHeight);

const factory = new Ktx2Factory();
await factory.initializeAsync();
const texture = factory.create(createInfo, KtxCreateStorage.ALLOC_STORAGE);
const code = texture.transcodeBasis(KtxTranscodeFormat.BC7_RGBA, KtxTranscodeFlags.NONE);
if (code !== KtxErrorCode.SUCCESS) {
  throw new Error(`transcode failed: ${KtxErrorCode[code]}`);
}
const image = texture.getImage(0, 0, 0);
```

`levelBytes` is the BC7 size of a 256×256 level (65536 bytes). `image` is the level's bytes after transcoding. Call `texture.delete()` when the texture is no longer used.

`KtxTranscodeFlags.PVRTC_DECODE_TO_NEXT_POW2` asks libktx to decode a non-power-of-two ETC1S level to the next larger power of two for PVRTC1. libktx still documents that option as not implemented, and it is ignored when the slice dimensions are already powers of two.

`IKtx2Texture.compressAstc` encodes uncompressed 2D 8-bit images to ASTC. libktx returns `KtxErrorCode.INVALID_OPERATION` for data that is already supercompressed or block-compressed, for packed formats such as RGB565, for component sizes other than 8 bits, and for 1D images. Quality `0` through `100` is the normal range. The libktx parameter is unsigned, so a negative value is treated as greater than `100`.

## Scripts

From the package root:

| Script | Command |
| --- | --- |
| Typecheck, then emit an ESM library build and a bundled `.d.ts` | `npm run build` |
| Typecheck and test | `npm test` |
| Remove `dist/` | `npm run clean` |

`prepublishOnly` runs the build. Published files are `dist/`, `src/`, `LICENSE`, `LICENSES/`, `THIRD_PARTY_NOTICES.md`, `README.md`, and `CHANGELOG.md`. `idl-symbols.meta.json` is local generator metadata and is not published.

## License

[MIT](LICENSE). Copyright (c) 2026 Luka Erkapic.

`VkFormat` and the KTX transcode, UASTC, and Basis parameter shapes match Khronos and Basis Universal APIs. Those projects are not vendored here. Attribution and the Apache License 2.0 text are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
