# Ris Ktx2 API

TypeScript API, interfaces, enums, and helpers for [`ris-ktx2`](https://www.npmjs.com/package/ris-ktx2), a KTX/KTX2 texture library.

`ris-ktx2-api` contains the public API and types, while `ris-ktx2` provides the implementation.

## What is KTX2?

[KTX2](https://registry.khronos.org/KTX/specs/2.0/ktxspec.v2.html) is a texture container format designed for efficient storage and delivery of GPU textures.

It can store textures in GPU-compressed formats such as:

* ASTC
* BCn
* ETC2
* PVRTC

KTX2 also supports Basis Universal compression, allowing a texture to be transcoded to a GPU format supported by the target platform.

This makes KTX2 useful for graphics applications where texture size, loading time, and GPU memory usage are important.

> **Note:** The current `ris-ktx2` implementation supports only Universal Basis and raw/uncompressed texture data.

## Why Ris Ktx2?

`ris-ktx2` provides a TypeScript-friendly API for working with KTX2 textures.

It can be used to:

* load and create KTX2 textures
* encode textures using Basis Universal
* transcode Basis textures to GPU formats
* read and write texture data
* calculate GPU texture memory requirements

The API separates the public TypeScript interface from the underlying KTX2 implementation, making it easier to use the library from TypeScript applications.

## Packages

| Package        | Description                                        |
| -------------- | -------------------------------------------------- |
| `ris-ktx2-api` | API, interfaces, enums, and texture-format helpers |
| `ris-ktx2`     | KTX2 implementation                                |

## Install

```sh
npm install ris-ktx2-api ris-ktx2
```

`ris-ktx2-api` is ESM-only, has no runtime dependencies, and has no import-time side effects.

## Usage

```ts
import { Ktx2Factory } from "ris-ktx2";
import {
    KtxCreateStorage,
    VkFormat,
} from "ris-ktx2-api";

const factory = new Ktx2Factory();

await factory.initializeAsync();

const texture = factory.create(
    {
        baseWidth: 256,
        baseHeight: 256,
        vkFormat: VkFormat.R8G8B8A8_SRGB,
        numLevels: 1,
    },
    KtxCreateStorage.ALLOC_STORAGE,
);

texture.setImageFromMemory(
    0,
    0,
    0,
    new Uint8Array(256 * 256 * 4),
);

texture.compressBasis(128);

const data = texture.writeToMemory();

texture.delete();
```

### Loading

```ts
import {
    KtxTranscodeFlags,
    KtxTranscodeFormat,
} from "ris-ktx2-api";

const texture = await factory.loadAsync("/textures/example.ktx2");

if (texture.needsTranscoding) {
    texture.transcodeBasis(
        KtxTranscodeFormat.BC7_RGBA,
        KtxTranscodeFlags.NONE,
    );
}

const image = texture.getImage(0, 0, 0);

texture.delete();
```

`loadAsync` accepts either a URL or a browser `File`.

## API

The package exports:

* `IKtx2Texture`
* `IKtx2Factory`
* `IKtxTextureCreateInfo`
* `IKtxBasisParams`
* `KtxTranscodeFormat`
* `KtxTranscodeFlags`
* `KtxUastcFlags`
* `KtxCreateStorage`
* `KtxErrorCode`
* `VkFormat`
* `TextureFormatInfo`

`TextureFormatInfo` provides helpers for calculating texture and mip-level sizes for supported formats.

## Development

```sh
npm run build
npm test
npm run clean
```

| Script          | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| `npm run build` | Typecheck and build the ESM library with TypeScript declarations |
| `npm test`      | Typecheck and run tests                                          |
| `npm run clean` | Remove `dist/`                                                   |

## Releasing

The release version is defined by `package.json`.

The `development` branch publishes prereleases using the `next` npm tag:

```sh
npm install ris-ktx2-api@next
```

The `main` branch publishes stable releases using the `latest` npm tag:

```sh
npm install ris-ktx2-api
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for npm publishing and provenance setup.

## License

MIT © 2026 Luka Erkapic.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for attribution and third-party license information.
