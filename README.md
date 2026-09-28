# ris-ktx2-api

TypeScript interfaces, enumerations, and texture-format helpers for [KTX2](https://registry.khronos.org/KTX/specs/2.0/ktxspec.v2.html) textures. Version 0.1.0.

The package has no WebAssembly and does not load files by itself. It describes the API that `ris-ktx2` implements.

## How it fits with the other packages

| Package | Role |
| --- | --- |
| `ris-ktx2-api` | This package. Interfaces, enums, and `TextureFormatInfo`. |
| `ris-ktx2` | Implements `IKtx2Factory` and `IKtx2Texture` with Khronos libktx. Depends on this package. |
| `ris-ktx2-viewer` | Browser app that imports these types while previewing and converting textures. |
| `ris-framework` | Renderer that consumes `IKtx2Texture`, `VkFormat`, `KtxTranscodeFlags`, and `TextureFormatInfo`. |
| `ris-framework-api` | Framework interfaces that take `IKtx2Factory` / `IKtx2Texture` and map `VkFormat` and `KtxTranscodeFormat` to framework texture formats. |

Inside this repository the other packages depend on it with `"ris-ktx2-api": "file:../ris-ktx2-api"`.

## Install

```sh
npm install ris-ktx2-api
```

The package is ESM. Types resolve from `dist/index.d.ts`.

## Exports

Everything is exported from the package root.

- `IKtx2Texture` — loaded or created KTX/KTX2 texture: dimensions, transcode, Basis and ASTC compression, ZLIB/Zstandard deflate, image get/set, and write-to-memory
- `IKtx2Factory` — `initializeAsync`, `loadAsync`, `create`, and `createFromBuffer`
- `IKtxTextureCreateInfo` — base width, height, optional `VkFormat`, optional mip count
- `IKtxBasisParams` — ETC1S and UASTC compression settings
- `KtxTranscodeFormat`, `KtxTranscodeFlags` — Basis Universal transcode target and options
- `KtxUastcFlags` — UASTC encoder level and hint bits
- `KtxCreateStorage` — `NO_STORAGE` or `ALLOC_STORAGE`
- `KtxErrorCode` — `SUCCESS` (`0`) and `INVALID_OPERATION` (`10`)
- `VkFormat` — Vulkan format enumerators, including extension aliases
- `TextureFormatInfo` — block width, height, byte size, and mip-level size for the formats the class maps

`TextureFormatInfo.fromVkFormat` supports `R8G8B8A8_UNORM`, `R8G8B8A8_SRGB`, `D24_UNORM_S8_UINT`, `D32_SFLOAT`, `ASTC_4X4_UNORM_BLOCK`, `BC7_UNORM_BLOCK`, `BC3_UNORM_BLOCK`, and `ETC2_R8G8B8A8_UNORM_BLOCK`. Other `VkFormat` values throw.

## Usage

`TextureFormatInfo` runs on its own. Creating a texture requires an `IKtx2Factory` implementation, which `ris-ktx2` supplies.

```ts
import {
  KtxCreateStorage,
  KtxTranscodeFlags,
  KtxTranscodeFormat,
  TextureFormatInfo,
  VkFormat,
  type IKtx2Factory,
  type IKtxTextureCreateInfo,
} from "ris-ktx2-api";

const createInfo: IKtxTextureCreateInfo = {
  baseWidth: 256,
  baseHeight: 256,
  vkFormat: VkFormat.R8G8B8A8_SRGB,
  numLevels: 1,
};

const layout = TextureFormatInfo.fromVkFormat(VkFormat.BC7_UNORM_BLOCK);
const levelBytes = layout.getDataSize(createInfo.baseWidth, createInfo.baseHeight);

declare const factory: IKtx2Factory;

await factory.initializeAsync();
const texture = factory.create(createInfo, KtxCreateStorage.ALLOC_STORAGE);
texture.transcodeBasis(KtxTranscodeFormat.BC7_RGBA, KtxTranscodeFlags.NONE);
const image = texture.getImage(0, 0, 0);
```

`levelBytes` is the BC7 size of a 256×256 level (65536 bytes). `image` is the level's bytes after transcoding.

## Scripts

From `ris-ktx2-api/`:

| Script | Command |
| --- | --- |
| Build (`tsc`, then an ESM library build and a bundled `.d.ts`) | `npm run build` |
| Typecheck and test | `npm test` |
| Remove `dist/` | `npm run clean` |

`prepublishOnly` runs the build. Published files are `dist/`, `src/`, `LICENSE`, `LICENSES/`, `THIRD_PARTY_NOTICES.md`, `README.md`, and `CHANGELOG.md`.

## License

[MIT](LICENSE). Copyright (c) 2026 Luka Erkapic.

`VkFormat` and the KTX transcode, UASTC, and Basis parameter shapes match Khronos and Basis Universal APIs. Those projects are not vendored here. Attribution and the Apache License 2.0 text are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
