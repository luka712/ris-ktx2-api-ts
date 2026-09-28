import { describe, expect, it } from "vitest";
import { KtxCreateStorage } from "../src/ris-ktx2/KtxCreateStorage.ts";
import { KtxErrorCode } from "../src/ris-ktx2/KtxErrorCode.ts";
import { KtxTranscodeFlags } from "../src/ris-ktx2/KtxTranscodeFlags.ts";
import { KtxTranscodeFormat } from "../src/ris-ktx2/KtxTranscodeFormat.ts";
import { KtxUastcFlags } from "../src/ris-ktx2/KtxUastcFlags.ts";
import { TextureFormatInfo } from "../src/ris-ktx2/TextureFormatInfo.ts";
import { VkFormat } from "../src/ris-ktx2/VkFormat.ts";

describe("TextureFormatInfo", () => {
    it("sizes an uncompressed RGBA8 level", () => {
        const info = TextureFormatInfo.rgba32();

        expect(info.blockWidth).toBe(1);
        expect(info.blockHeight).toBe(1);
        expect(info.pixelSize).toBe(4);
        expect(info.getDataSize(2, 2)).toBe(16);
        expect(info.getAlignedBytesPerRow(1)).toBe(256);
    });

    it("rounds compressed blocks up to whole blocks", () => {
        const info = TextureFormatInfo.bc7();

        expect(info.getBlocksPerRow(5)).toBe(2);
        expect(info.getBlocksPerColumn(5)).toBe(2);
        expect(info.getDataSize(5, 5)).toBe(64);
        expect(info.getDataSize(256, 256)).toBe(65536);
        expect(info.getDataSize3D(4, 4, 2)).toBe(32);
    });

    it("maps the Vulkan formats that have layouts", () => {
        expect(TextureFormatInfo.fromVkFormat(VkFormat.R8G8B8A8_UNORM).pixelSize).toBe(4);
        expect(TextureFormatInfo.fromVkFormat(VkFormat.R8G8B8A8_SRGB).pixelSize).toBe(4);
        expect(TextureFormatInfo.fromVkFormat(VkFormat.D24_UNORM_S8_UINT).bytesPerBlock).toBe(4);
        expect(TextureFormatInfo.fromVkFormat(VkFormat.D32_SFLOAT)).toEqual(TextureFormatInfo.depth32float());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ASTC_4X4_UNORM_BLOCK)).toEqual(TextureFormatInfo.astc4x4rgba());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.BC3_UNORM_BLOCK)).toEqual(TextureFormatInfo.bc3());
        expect(TextureFormatInfo.fromVkFormat(VkFormat.ETC2_R8G8B8A8_UNORM_BLOCK)).toEqual(TextureFormatInfo.etc2rgba());
    });

    it("throws for a Vulkan format with no layout", () => {
        expect(() => TextureFormatInfo.fromVkFormat(VkFormat.R8_UNORM)).toThrow(/no layout/);
    });
});

describe("public enumerations", () => {
    it("keeps the libktx and Vulkan numeric values", () => {
        expect(KtxErrorCode.SUCCESS).toBe(0);
        expect(KtxErrorCode.INVALID_OPERATION).toBe(10);
        expect(KtxCreateStorage.NO_STORAGE).toBe(0);
        expect(KtxCreateStorage.ALLOC_STORAGE).toBe(1);
        expect(KtxTranscodeFlags.NONE).toBe(0);
        expect(KtxTranscodeFlags.PVRTC_DECODE_TO_NEXT_POW2).toBe(2);
        expect(KtxTranscodeFlags.TRANSCODE_ALPHA_DATA_TO_OPAQUE_FORMATS).toBe(4);
        expect(KtxTranscodeFlags.HIGH_QUALITY).toBe(32);
        expect(KtxTranscodeFormat.KTX_TTF_ETC1_RGB).toBe(0);
        expect(KtxTranscodeFormat.BC7_RGBA).toBe(6);
        expect(KtxTranscodeFormat.RGBA32).toBe(13);
        expect(KtxTranscodeFormat.BC1_OR_3).toBe(23);
        expect(KtxTranscodeFormat.NO_SELECTION).toBe(2147483647);
        expect(KtxUastcFlags.LEVEL_DEFAULT).toBe(2);
        expect(KtxUastcFlags.LEVEL_MASK).toBe(15);
        expect(VkFormat.R8G8B8A8_SRGB).toBe(43);
        expect(VkFormat.BC7_UNORM_BLOCK).toBe(145);
        expect(VkFormat.G8B8G8R8_422_UNORM_KHR).toBe(VkFormat.G8B8G8R8_422_UNORM);
    });
});
