# Third-party notices

`ris-ktx2-api` is TypeScript written for this repository and distributed under the MIT License (see `LICENSE`). Copyright (c) 2026 Luka Erkapic.

This package does not vendor KTX-Software, Vulkan-Headers, basis_universal, or their binaries. `idl-symbols.meta.json` is local generator metadata for these sources. It is not a Khronos IDL file and it is not part of the published package.

The enumerations and parameter fields below use the same names and numeric values as the public APIs they interoperate with. Some comments paraphrase that upstream documentation. Because of that, the Apache License 2.0 text is included at `LICENSES/Apache-2.0.txt`.

## Khronos KTX-Software

Copyright 2010-2024 The Khronos Group Inc. and contributors.

SPDX-License-Identifier: Apache-2.0

`KtxTranscodeFormat`, `KtxTranscodeFlags`, `KtxUastcFlags`, `KtxCreateStorage`, `KtxErrorCode`, and the Basis Universal fields on `IKtxBasisParams` follow the public libktx API:

https://github.com/KhronosGroup/KTX-Software

Upstream license overview (v4.3.2): https://github.com/KhronosGroup/KTX-Software/blob/v4.3.2/LICENSE.md

KTX-Software bundles other projects, including basis_universal. Those sources are not redistributed here. The sibling `ris-ktx2` package is what ships the libktx WebAssembly build; that build is outside this package.

## Basis Universal

Copyright Binomial LLC.

SPDX-License-Identifier: Apache-2.0

UASTC and ETC1S parameters described by `KtxUastcFlags` and `IKtxBasisParams` originate in the Basis Universal codec, which libktx exposes:

https://github.com/BinomialLLC/basis_universal

## Vulkan `VkFormat`

Copyright 2015-2026 The Khronos Group Inc.

SPDX-License-Identifier: Apache-2.0 OR MIT

`VkFormat` enumerator names and numeric values match the Vulkan `VkFormat` enumeration generated in Vulkan-Headers:

https://github.com/KhronosGroup/Vulkan-Headers

Vulkan-Headers are dual-licensed Apache-2.0 OR MIT. This package is distributed under the MIT License.

## Development dependencies

`vite` (MIT), `vite-plugin-dts` (MIT), `@microsoft/api-extractor` (MIT), `vitest` (MIT), and `@typescript/typescript6` (Apache-2.0) are used to build and test this package. They are not bundled into `dist/`. Their licenses are recorded in `package-lock.json`.
