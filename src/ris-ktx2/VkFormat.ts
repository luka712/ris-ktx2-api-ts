/**
 * Vulkan `VkFormat` enumerators.
 *
 * Names and numeric values match the Vulkan API so they can be stored in
 * KTX2 files and passed through to graphics APIs. Extension enumerators that
 * share a value with a core enumerator are documented as aliases.
 * See THIRD_PARTY_NOTICES.md.
 */
export enum VkFormat {
  /** No format is specified. */
  UNDEFINED = 0,
  /** 4-bit red and green, unsigned normalized, packed into an 8-bit word. */
  R4G4_UNORM_PACK8 = 1,
  /** 4-bit red, green, blue, and alpha, unsigned normalized, packed into a 16-bit word. */
  R4G4B4A4_UNORM_PACK16 = 2,
  /** 4-bit blue, green, red, and alpha, unsigned normalized, packed into a 16-bit word. */
  B4G4R4A4_UNORM_PACK16 = 3,
  /** 5-bit red, 6-bit green, and 5-bit blue, unsigned normalized, packed into a 16-bit word. */
  R5G6B5_UNORM_PACK16 = 4,
  /** 5-bit blue, 6-bit green, and 5-bit red, unsigned normalized, packed into a 16-bit word. */
  B5G6R5_UNORM_PACK16 = 5,
  /** 5-bit red, 5-bit green, 5-bit blue, and 1-bit alpha, unsigned normalized, packed into a 16-bit word. */
  R5G5B5A1_UNORM_PACK16 = 6,
  /** 5-bit blue, 5-bit green, 5-bit red, and 1-bit alpha, unsigned normalized, packed into a 16-bit word. */
  B5G5R5A1_UNORM_PACK16 = 7,
  /** 1-bit alpha, 5-bit red, 5-bit green, and 5-bit blue, unsigned normalized, packed into a 16-bit word. */
  A1R5G5B5_UNORM_PACK16 = 8,
  /** 8-bit red, unsigned normalized. */
  R8_UNORM = 9,
  /** 8-bit red, signed normalized. */
  R8_SNORM = 10,
  /** 8-bit red, unsigned scaled. */
  R8_USCALED = 11,
  /** 8-bit red, signed scaled. */
  R8_SSCALED = 12,
  /** 8-bit red, unsigned integer. */
  R8_UINT = 13,
  /** 8-bit red, signed integer. */
  R8_SINT = 14,
  /** 8-bit red, sRGB. */
  R8_SRGB = 15,
  /** 8-bit red and green, unsigned normalized. */
  R8G8_UNORM = 16,
  /** 8-bit red and green, signed normalized. */
  R8G8_SNORM = 17,
  /** 8-bit red and green, unsigned scaled. */
  R8G8_USCALED = 18,
  /** 8-bit red and green, signed scaled. */
  R8G8_SSCALED = 19,
  /** 8-bit red and green, unsigned integer. */
  R8G8_UINT = 20,
  /** 8-bit red and green, signed integer. */
  R8G8_SINT = 21,
  /** 8-bit red and green, sRGB. */
  R8G8_SRGB = 22,
  /** 8-bit red, green, and blue, unsigned normalized. */
  R8G8B8_UNORM = 23,
  /** 8-bit red, green, and blue, signed normalized. */
  R8G8B8_SNORM = 24,
  /** 8-bit red, green, and blue, unsigned scaled. */
  R8G8B8_USCALED = 25,
  /** 8-bit red, green, and blue, signed scaled. */
  R8G8B8_SSCALED = 26,
  /** 8-bit red, green, and blue, unsigned integer. */
  R8G8B8_UINT = 27,
  /** 8-bit red, green, and blue, signed integer. */
  R8G8B8_SINT = 28,
  /** 8-bit red, green, and blue, sRGB. */
  R8G8B8_SRGB = 29,
  /** 8-bit blue, green, and red, unsigned normalized. */
  B8G8R8_UNORM = 30,
  /** 8-bit blue, green, and red, signed normalized. */
  B8G8R8_SNORM = 31,
  /** 8-bit blue, green, and red, unsigned scaled. */
  B8G8R8_USCALED = 32,
  /** 8-bit blue, green, and red, signed scaled. */
  B8G8R8_SSCALED = 33,
  /** 8-bit blue, green, and red, unsigned integer. */
  B8G8R8_UINT = 34,
  /** 8-bit blue, green, and red, signed integer. */
  B8G8R8_SINT = 35,
  /** 8-bit blue, green, and red, sRGB. */
  B8G8R8_SRGB = 36,
  /** 8-bit red, green, blue, and alpha, unsigned normalized. */
  R8G8B8A8_UNORM = 37,
  /** 8-bit red, green, blue, and alpha, signed normalized. */
  R8G8B8A8_SNORM = 38,
  /** 8-bit red, green, blue, and alpha, unsigned scaled. */
  R8G8B8A8_USCALED = 39,
  /** 8-bit red, green, blue, and alpha, signed scaled. */
  R8G8B8A8_SSCALED = 40,
  /** 8-bit red, green, blue, and alpha, unsigned integer. */
  R8G8B8A8_UINT = 41,
  /** 8-bit red, green, blue, and alpha, signed integer. */
  R8G8B8A8_SINT = 42,
  /** 8-bit red, green, blue, and alpha, sRGB. */
  R8G8B8A8_SRGB = 43,
  /** 8-bit blue, green, red, and alpha, unsigned normalized. */
  B8G8R8A8_UNORM = 44,
  /** 8-bit blue, green, red, and alpha, signed normalized. */
  B8G8R8A8_SNORM = 45,
  /** 8-bit blue, green, red, and alpha, unsigned scaled. */
  B8G8R8A8_USCALED = 46,
  /** 8-bit blue, green, red, and alpha, signed scaled. */
  B8G8R8A8_SSCALED = 47,
  /** 8-bit blue, green, red, and alpha, unsigned integer. */
  B8G8R8A8_UINT = 48,
  /** 8-bit blue, green, red, and alpha, signed integer. */
  B8G8R8A8_SINT = 49,
  /** 8-bit blue, green, red, and alpha, sRGB. */
  B8G8R8A8_SRGB = 50,
  /** 8-bit alpha, blue, green, and red, unsigned normalized, packed into a 32-bit word. */
  A8B8G8R8_UNORM_PACK32 = 51,
  /** 8-bit alpha, blue, green, and red, signed normalized, packed into a 32-bit word. */
  A8B8G8R8_SNORM_PACK32 = 52,
  /** 8-bit alpha, blue, green, and red, unsigned scaled, packed into a 32-bit word. */
  A8B8G8R8_USCALED_PACK32 = 53,
  /** 8-bit alpha, blue, green, and red, signed scaled, packed into a 32-bit word. */
  A8B8G8R8_SSCALED_PACK32 = 54,
  /** 8-bit alpha, blue, green, and red, unsigned integer, packed into a 32-bit word. */
  A8B8G8R8_UINT_PACK32 = 55,
  /** 8-bit alpha, blue, green, and red, signed integer, packed into a 32-bit word. */
  A8B8G8R8_SINT_PACK32 = 56,
  /** 8-bit alpha, blue, green, and red, sRGB, packed into a 32-bit word. */
  A8B8G8R8_SRGB_PACK32 = 57,
  /** 2-bit alpha, 10-bit red, 10-bit green, and 10-bit blue, unsigned normalized, packed into a 32-bit word. */
  A2R10G10B10_UNORM_PACK32 = 58,
  /** 2-bit alpha, 10-bit red, 10-bit green, and 10-bit blue, signed normalized, packed into a 32-bit word. */
  A2R10G10B10_SNORM_PACK32 = 59,
  /** 2-bit alpha, 10-bit red, 10-bit green, and 10-bit blue, unsigned scaled, packed into a 32-bit word. */
  A2R10G10B10_USCALED_PACK32 = 60,
  /** 2-bit alpha, 10-bit red, 10-bit green, and 10-bit blue, signed scaled, packed into a 32-bit word. */
  A2R10G10B10_SSCALED_PACK32 = 61,
  /** 2-bit alpha, 10-bit red, 10-bit green, and 10-bit blue, unsigned integer, packed into a 32-bit word. */
  A2R10G10B10_UINT_PACK32 = 62,
  /** 2-bit alpha, 10-bit red, 10-bit green, and 10-bit blue, signed integer, packed into a 32-bit word. */
  A2R10G10B10_SINT_PACK32 = 63,
  /** 2-bit alpha, 10-bit blue, 10-bit green, and 10-bit red, unsigned normalized, packed into a 32-bit word. */
  A2B10G10R10_UNORM_PACK32 = 64,
  /** 2-bit alpha, 10-bit blue, 10-bit green, and 10-bit red, signed normalized, packed into a 32-bit word. */
  A2B10G10R10_SNORM_PACK32 = 65,
  /** 2-bit alpha, 10-bit blue, 10-bit green, and 10-bit red, unsigned scaled, packed into a 32-bit word. */
  A2B10G10R10_USCALED_PACK32 = 66,
  /** 2-bit alpha, 10-bit blue, 10-bit green, and 10-bit red, signed scaled, packed into a 32-bit word. */
  A2B10G10R10_SSCALED_PACK32 = 67,
  /** 2-bit alpha, 10-bit blue, 10-bit green, and 10-bit red, unsigned integer, packed into a 32-bit word. */
  A2B10G10R10_UINT_PACK32 = 68,
  /** 2-bit alpha, 10-bit blue, 10-bit green, and 10-bit red, signed integer, packed into a 32-bit word. */
  A2B10G10R10_SINT_PACK32 = 69,
  /** 16-bit red, unsigned normalized. */
  R16_UNORM = 70,
  /** 16-bit red, signed normalized. */
  R16_SNORM = 71,
  /** 16-bit red, unsigned scaled. */
  R16_USCALED = 72,
  /** 16-bit red, signed scaled. */
  R16_SSCALED = 73,
  /** 16-bit red, unsigned integer. */
  R16_UINT = 74,
  /** 16-bit red, signed integer. */
  R16_SINT = 75,
  /** 16-bit red, signed floating-point. */
  R16_SFLOAT = 76,
  /** 16-bit red and green, unsigned normalized. */
  R16G16_UNORM = 77,
  /** 16-bit red and green, signed normalized. */
  R16G16_SNORM = 78,
  /** 16-bit red and green, unsigned scaled. */
  R16G16_USCALED = 79,
  /** 16-bit red and green, signed scaled. */
  R16G16_SSCALED = 80,
  /** 16-bit red and green, unsigned integer. */
  R16G16_UINT = 81,
  /** 16-bit red and green, signed integer. */
  R16G16_SINT = 82,
  /** 16-bit red and green, signed floating-point. */
  R16G16_SFLOAT = 83,
  /** 16-bit red, green, and blue, unsigned normalized. */
  R16G16B16_UNORM = 84,
  /** 16-bit red, green, and blue, signed normalized. */
  R16G16B16_SNORM = 85,
  /** 16-bit red, green, and blue, unsigned scaled. */
  R16G16B16_USCALED = 86,
  /** 16-bit red, green, and blue, signed scaled. */
  R16G16B16_SSCALED = 87,
  /** 16-bit red, green, and blue, unsigned integer. */
  R16G16B16_UINT = 88,
  /** 16-bit red, green, and blue, signed integer. */
  R16G16B16_SINT = 89,
  /** 16-bit red, green, and blue, signed floating-point. */
  R16G16B16_SFLOAT = 90,
  /** 16-bit red, green, blue, and alpha, unsigned normalized. */
  R16G16B16A16_UNORM = 91,
  /** 16-bit red, green, blue, and alpha, signed normalized. */
  R16G16B16A16_SNORM = 92,
  /** 16-bit red, green, blue, and alpha, unsigned scaled. */
  R16G16B16A16_USCALED = 93,
  /** 16-bit red, green, blue, and alpha, signed scaled. */
  R16G16B16A16_SSCALED = 94,
  /** 16-bit red, green, blue, and alpha, unsigned integer. */
  R16G16B16A16_UINT = 95,
  /** 16-bit red, green, blue, and alpha, signed integer. */
  R16G16B16A16_SINT = 96,
  /** 16-bit red, green, blue, and alpha, signed floating-point. */
  R16G16B16A16_SFLOAT = 97,
  /** 32-bit red, unsigned integer. */
  R32_UINT = 98,
  /** 32-bit red, signed integer. */
  R32_SINT = 99,
  /** 32-bit red, signed floating-point. */
  R32_SFLOAT = 100,
  /** 32-bit red and green, unsigned integer. */
  R32G32_UINT = 101,
  /** 32-bit red and green, signed integer. */
  R32G32_SINT = 102,
  /** 32-bit red and green, signed floating-point. */
  R32G32_SFLOAT = 103,
  /** 32-bit red, green, and blue, unsigned integer. */
  R32G32B32_UINT = 104,
  /** 32-bit red, green, and blue, signed integer. */
  R32G32B32_SINT = 105,
  /** 32-bit red, green, and blue, signed floating-point. */
  R32G32B32_SFLOAT = 106,
  /** 32-bit red, green, blue, and alpha, unsigned integer. */
  R32G32B32A32_UINT = 107,
  /** 32-bit red, green, blue, and alpha, signed integer. */
  R32G32B32A32_SINT = 108,
  /** 32-bit red, green, blue, and alpha, signed floating-point. */
  R32G32B32A32_SFLOAT = 109,
  /** 64-bit red, unsigned integer. */
  R64_UINT = 110,
  /** 64-bit red, signed integer. */
  R64_SINT = 111,
  /** 64-bit red, signed floating-point. */
  R64_SFLOAT = 112,
  /** 64-bit red and green, unsigned integer. */
  R64G64_UINT = 113,
  /** 64-bit red and green, signed integer. */
  R64G64_SINT = 114,
  /** 64-bit red and green, signed floating-point. */
  R64G64_SFLOAT = 115,
  /** 64-bit red, green, and blue, unsigned integer. */
  R64G64B64_UINT = 116,
  /** 64-bit red, green, and blue, signed integer. */
  R64G64B64_SINT = 117,
  /** 64-bit red, green, and blue, signed floating-point. */
  R64G64B64_SFLOAT = 118,
  /** 64-bit red, green, blue, and alpha, unsigned integer. */
  R64G64B64A64_UINT = 119,
  /** 64-bit red, green, blue, and alpha, signed integer. */
  R64G64B64A64_SINT = 120,
  /** 64-bit red, green, blue, and alpha, signed floating-point. */
  R64G64B64A64_SFLOAT = 121,
  /** 10-bit blue, 11-bit green, and 11-bit red, unsigned floating-point, packed into a 32-bit word. */
  B10G11R11_UFLOAT_PACK32 = 122,
  /** 5-bit shared exponent, 9-bit blue, 9-bit green, and 9-bit red, unsigned floating-point, packed into a 32-bit word. */
  E5B9G9R9_UFLOAT_PACK32 = 123,
  /** 16-bit unsigned normalized depth. */
  D16_UNORM = 124,
  /** 24-bit unsigned normalized depth packed into a 32-bit word with 8 unused bits. */
  X8_D24_UNORM_PACK32 = 125,
  /** 32-bit signed floating-point depth. */
  D32_SFLOAT = 126,
  /** 8-bit unsigned integer stencil. */
  S8_UINT = 127,
  /** 16-bit unsigned normalized depth and 8-bit unsigned integer stencil. */
  D16_UNORM_S8_UINT = 128,
  /** 24-bit unsigned normalized depth and 8-bit unsigned integer stencil. */
  D24_UNORM_S8_UINT = 129,
  /** 32-bit signed floating-point depth and 8-bit unsigned integer stencil. */
  D32_SFLOAT_S8_UINT = 130,
  /** 4×4 BC1 RGB block compression, unsigned normalized (8 bytes per block). */
  BC1_RGB_UNORM_BLOCK = 131,
  /** 4×4 BC1 RGB block compression, sRGB (8 bytes per block). */
  BC1_RGB_SRGB_BLOCK = 132,
  /** 4×4 BC1 RGBA block compression with punch-through alpha, unsigned normalized (8 bytes per block). */
  BC1_RGBA_UNORM_BLOCK = 133,
  /** 4×4 BC1 RGBA block compression with punch-through alpha, sRGB (8 bytes per block). */
  BC1_RGBA_SRGB_BLOCK = 134,
  /** 4×4 BC2 RGBA block compression, unsigned normalized (16 bytes per block). */
  BC2_UNORM_BLOCK = 135,
  /** 4×4 BC2 RGBA block compression, sRGB (16 bytes per block). */
  BC2_SRGB_BLOCK = 136,
  /** 4×4 BC3 RGBA block compression, unsigned normalized (16 bytes per block). */
  BC3_UNORM_BLOCK = 137,
  /** 4×4 BC3 RGBA block compression, sRGB (16 bytes per block). */
  BC3_SRGB_BLOCK = 138,
  /** 4×4 BC4 single-channel block compression, unsigned normalized (8 bytes per block). */
  BC4_UNORM_BLOCK = 139,
  /** 4×4 BC4 single-channel block compression, signed normalized (8 bytes per block). */
  BC4_SNORM_BLOCK = 140,
  /** 4×4 BC5 two-channel block compression, unsigned normalized (16 bytes per block). */
  BC5_UNORM_BLOCK = 141,
  /** 4×4 BC5 two-channel block compression, signed normalized (16 bytes per block). */
  BC5_SNORM_BLOCK = 142,
  /** 4×4 BC6H HDR block compression, unsigned floating-point (16 bytes per block). */
  BC6H_UFLOAT_BLOCK = 143,
  /** 4×4 BC6H HDR block compression, signed floating-point (16 bytes per block). */
  BC6H_SFLOAT_BLOCK = 144,
  /** 4×4 BC7 RGBA block compression, unsigned normalized (16 bytes per block). */
  BC7_UNORM_BLOCK = 145,
  /** 4×4 BC7 RGBA block compression, sRGB (16 bytes per block). */
  BC7_SRGB_BLOCK = 146,
  /** 4×4 ETC2 RGB block compression, unsigned normalized (8 bytes per block). */
  ETC2_R8G8B8_UNORM_BLOCK = 147,
  /** 4×4 ETC2 RGB block compression, sRGB (8 bytes per block). */
  ETC2_R8G8B8_SRGB_BLOCK = 148,
  /** 4×4 ETC2 RGB block compression with 1-bit alpha, unsigned normalized (8 bytes per block). */
  ETC2_R8G8B8A1_UNORM_BLOCK = 149,
  /** 4×4 ETC2 RGB block compression with 1-bit alpha, sRGB (8 bytes per block). */
  ETC2_R8G8B8A1_SRGB_BLOCK = 150,
  /** 4×4 ETC2 RGBA block compression, unsigned normalized (16 bytes per block). */
  ETC2_R8G8B8A8_UNORM_BLOCK = 151,
  /** 4×4 ETC2 RGBA block compression, sRGB (16 bytes per block). */
  ETC2_R8G8B8A8_SRGB_BLOCK = 152,
  /** 4×4 EAC single-channel block compression, unsigned normalized (8 bytes per block). */
  EAC_R11_UNORM_BLOCK = 153,
  /** 4×4 EAC single-channel block compression, signed normalized (8 bytes per block). */
  EAC_R11_SNORM_BLOCK = 154,
  /** 4×4 EAC two-channel block compression, unsigned normalized (16 bytes per block). */
  EAC_R11G11_UNORM_BLOCK = 155,
  /** 4×4 EAC two-channel block compression, signed normalized (16 bytes per block). */
  EAC_R11G11_SNORM_BLOCK = 156,
  /** ASTC 4×4 block compression, unsigned normalized (16 bytes per block). */
  ASTC_4X4_UNORM_BLOCK = 157,
  /** ASTC 4×4 block compression, sRGB (16 bytes per block). */
  ASTC_4X4_SRGB_BLOCK = 158,
  /** ASTC 5×4 block compression, unsigned normalized (16 bytes per block). */
  ASTC_5X4_UNORM_BLOCK = 159,
  /** ASTC 5×4 block compression, sRGB (16 bytes per block). */
  ASTC_5X4_SRGB_BLOCK = 160,
  /** ASTC 5×5 block compression, unsigned normalized (16 bytes per block). */
  ASTC_5X5_UNORM_BLOCK = 161,
  /** ASTC 5×5 block compression, sRGB (16 bytes per block). */
  ASTC_5X5_SRGB_BLOCK = 162,
  /** ASTC 6×5 block compression, unsigned normalized (16 bytes per block). */
  ASTC_6X5_UNORM_BLOCK = 163,
  /** ASTC 6×5 block compression, sRGB (16 bytes per block). */
  ASTC_6X5_SRGB_BLOCK = 164,
  /** ASTC 6×6 block compression, unsigned normalized (16 bytes per block). */
  ASTC_6X6_UNORM_BLOCK = 165,
  /** ASTC 6×6 block compression, sRGB (16 bytes per block). */
  ASTC_6X6_SRGB_BLOCK = 166,
  /** ASTC 8×5 block compression, unsigned normalized (16 bytes per block). */
  ASTC_8X5_UNORM_BLOCK = 167,
  /** ASTC 8×5 block compression, sRGB (16 bytes per block). */
  ASTC_8X5_SRGB_BLOCK = 168,
  /** ASTC 8×6 block compression, unsigned normalized (16 bytes per block). */
  ASTC_8X6_UNORM_BLOCK = 169,
  /** ASTC 8×6 block compression, sRGB (16 bytes per block). */
  ASTC_8X6_SRGB_BLOCK = 170,
  /** ASTC 8×8 block compression, unsigned normalized (16 bytes per block). */
  ASTC_8X8_UNORM_BLOCK = 171,
  /** ASTC 8×8 block compression, sRGB (16 bytes per block). */
  ASTC_8X8_SRGB_BLOCK = 172,
  /** ASTC 10×5 block compression, unsigned normalized (16 bytes per block). */
  ASTC_10X5_UNORM_BLOCK = 173,
  /** ASTC 10×5 block compression, sRGB (16 bytes per block). */
  ASTC_10X5_SRGB_BLOCK = 174,
  /** ASTC 10×6 block compression, unsigned normalized (16 bytes per block). */
  ASTC_10X6_UNORM_BLOCK = 175,
  /** ASTC 10×6 block compression, sRGB (16 bytes per block). */
  ASTC_10X6_SRGB_BLOCK = 176,
  /** ASTC 10×8 block compression, unsigned normalized (16 bytes per block). */
  ASTC_10X8_UNORM_BLOCK = 177,
  /** ASTC 10×8 block compression, sRGB (16 bytes per block). */
  ASTC_10X8_SRGB_BLOCK = 178,
  /** ASTC 10×10 block compression, unsigned normalized (16 bytes per block). */
  ASTC_10X10_UNORM_BLOCK = 179,
  /** ASTC 10×10 block compression, sRGB (16 bytes per block). */
  ASTC_10X10_SRGB_BLOCK = 180,
  /** ASTC 12×10 block compression, unsigned normalized (16 bytes per block). */
  ASTC_12X10_UNORM_BLOCK = 181,
  /** ASTC 12×10 block compression, sRGB (16 bytes per block). */
  ASTC_12X10_SRGB_BLOCK = 182,
  /** ASTC 12×12 block compression, unsigned normalized (16 bytes per block). */
  ASTC_12X12_UNORM_BLOCK = 183,
  /** ASTC 12×12 block compression, sRGB (16 bytes per block). */
  ASTC_12X12_SRGB_BLOCK = 184,
  /** Packed 4:2:2 format with 8-bit unsigned normalized components in order G, B, G, R. */
  G8B8G8R8_422_UNORM = 1000156000,
  /** Packed 4:2:2 format with 8-bit unsigned normalized components in order B, G, R, G. */
  B8G8R8G8_422_UNORM = 1000156001,
  /** 4:2:0 format stored as three planes (G, B, and R), 8-bit unsigned normalized samples. */
  G8_B8_R8_3PLANE_420_UNORM = 1000156002,
  /** 4:2:0 format stored as two planes (G, and interleaved B and R), 8-bit unsigned normalized samples. */
  G8_B8R8_2PLANE_420_UNORM = 1000156003,
  /** 4:2:2 format stored as three planes (G, B, and R), 8-bit unsigned normalized samples. */
  G8_B8_R8_3PLANE_422_UNORM = 1000156004,
  /** 4:2:2 format stored as two planes (G, and interleaved B and R), 8-bit unsigned normalized samples. */
  G8_B8R8_2PLANE_422_UNORM = 1000156005,
  /** 4:4:4 format stored as three planes (G, B, and R), 8-bit unsigned normalized samples. */
  G8_B8_R8_3PLANE_444_UNORM = 1000156006,
  /** red with 10 significant bits and 6 unused bits, unsigned normalized, packed into a 16-bit word. */
  R10X6_UNORM_PACK16 = 1000156007,
  /** red and green, each with 10 significant bits and 6 unused bits, unsigned normalized, packed into two 16-bit words. */
  R10X6G10X6_UNORM_2PACK16 = 1000156008,
  /** red, green, blue, and alpha, each with 10 significant bits and 6 unused bits, unsigned normalized, packed into four 16-bit words. */
  R10X6G10X6B10X6A10X6_UNORM_4PACK16 = 1000156009,
  /** Packed 4:2:2 format, unsigned normalized, each component with 10 significant bits and 6 unused bits, component order G, B, G, R. */
  G10X6B10X6G10X6R10X6_422_UNORM_4PACK16 = 1000156010,
  /** Packed 4:2:2 format, unsigned normalized, each component with 10 significant bits and 6 unused bits, component order B, G, R, G. */
  B10X6G10X6R10X6G10X6_422_UNORM_4PACK16 = 1000156011,
  /** 4:2:0 format stored as three planes (G, B, and R), unsigned normalized samples with 10 significant bits and 6 unused bits. */
  G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16 = 1000156012,
  /** 4:2:0 format stored as two planes (G, and interleaved B and R), unsigned normalized samples with 10 significant bits and 6 unused bits. */
  G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16 = 1000156013,
  /** 4:2:2 format stored as three planes (G, B, and R), unsigned normalized samples with 10 significant bits and 6 unused bits. */
  G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16 = 1000156014,
  /** 4:2:2 format stored as two planes (G, and interleaved B and R), unsigned normalized samples with 10 significant bits and 6 unused bits. */
  G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16 = 1000156015,
  /** 4:4:4 format stored as three planes (G, B, and R), unsigned normalized samples with 10 significant bits and 6 unused bits. */
  G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16 = 1000156016,
  /** red with 12 significant bits and 4 unused bits, unsigned normalized, packed into a 16-bit word. */
  R12X4_UNORM_PACK16 = 1000156017,
  /** red and green, each with 12 significant bits and 4 unused bits, unsigned normalized, packed into two 16-bit words. */
  R12X4G12X4_UNORM_2PACK16 = 1000156018,
  /** red, green, blue, and alpha, each with 12 significant bits and 4 unused bits, unsigned normalized, packed into four 16-bit words. */
  R12X4G12X4B12X4A12X4_UNORM_4PACK16 = 1000156019,
  /** Packed 4:2:2 format, unsigned normalized, each component with 12 significant bits and 4 unused bits, component order G, B, G, R. */
  G12X4B12X4G12X4R12X4_422_UNORM_4PACK16 = 1000156020,
  /** Packed 4:2:2 format, unsigned normalized, each component with 12 significant bits and 4 unused bits, component order B, G, R, G. */
  B12X4G12X4R12X4G12X4_422_UNORM_4PACK16 = 1000156021,
  /** 4:2:0 format stored as three planes (G, B, and R), unsigned normalized samples with 12 significant bits and 4 unused bits. */
  G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16 = 1000156022,
  /** 4:2:0 format stored as two planes (G, and interleaved B and R), unsigned normalized samples with 12 significant bits and 4 unused bits. */
  G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16 = 1000156023,
  /** 4:2:2 format stored as three planes (G, B, and R), unsigned normalized samples with 12 significant bits and 4 unused bits. */
  G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16 = 1000156024,
  /** 4:2:2 format stored as two planes (G, and interleaved B and R), unsigned normalized samples with 12 significant bits and 4 unused bits. */
  G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16 = 1000156025,
  /** 4:4:4 format stored as three planes (G, B, and R), unsigned normalized samples with 12 significant bits and 4 unused bits. */
  G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16 = 1000156026,
  /** Packed 4:2:2 format with 16-bit unsigned normalized components in order G, B, G, R. */
  G16B16G16R16_422_UNORM = 1000156027,
  /** Packed 4:2:2 format with 16-bit unsigned normalized components in order B, G, R, G. */
  B16G16R16G16_422_UNORM = 1000156028,
  /** 4:2:0 format stored as three planes (G, B, and R), 16-bit unsigned normalized samples. */
  G16_B16_R16_3PLANE_420_UNORM = 1000156029,
  /** 4:2:0 format stored as two planes (G, and interleaved B and R), 16-bit unsigned normalized samples. */
  G16_B16R16_2PLANE_420_UNORM = 1000156030,
  /** 4:2:2 format stored as three planes (G, B, and R), 16-bit unsigned normalized samples. */
  G16_B16_R16_3PLANE_422_UNORM = 1000156031,
  /** 4:2:2 format stored as two planes (G, and interleaved B and R), 16-bit unsigned normalized samples. */
  G16_B16R16_2PLANE_422_UNORM = 1000156032,
  /** 4:4:4 format stored as three planes (G, B, and R), 16-bit unsigned normalized samples. */
  G16_B16_R16_3PLANE_444_UNORM = 1000156033,
  /** 4:4:4 format stored as two planes (G, and interleaved B and R), 8-bit unsigned normalized samples. */
  G8_B8R8_2PLANE_444_UNORM = 1000330000,
  /** 4:4:4 format stored as two planes (G, and interleaved B and R), unsigned normalized samples with 10 significant bits and 6 unused bits. */
  G10X6_B10X6R10X6_2PLANE_444_UNORM_3PACK16 = 1000330001,
  /** 4:4:4 format stored as two planes (G, and interleaved B and R), unsigned normalized samples with 12 significant bits and 4 unused bits. */
  G12X4_B12X4R12X4_2PLANE_444_UNORM_3PACK16 = 1000330002,
  /** 4:4:4 format stored as two planes (G, and interleaved B and R), 16-bit unsigned normalized samples. */
  G16_B16R16_2PLANE_444_UNORM = 1000330003,
  /** 4-bit alpha, red, green, and blue, unsigned normalized, packed into a 16-bit word. */
  A4R4G4B4_UNORM_PACK16 = 1000340000,
  /** 4-bit alpha, blue, green, and red, unsigned normalized, packed into a 16-bit word. */
  A4B4G4R4_UNORM_PACK16 = 1000340001,
  /** ASTC 4×4 block compression, signed floating-point (16 bytes per block). */
  ASTC_4X4_SFLOAT_BLOCK = 1000066000,
  /** ASTC 5×4 block compression, signed floating-point (16 bytes per block). */
  ASTC_5X4_SFLOAT_BLOCK = 1000066001,
  /** ASTC 5×5 block compression, signed floating-point (16 bytes per block). */
  ASTC_5X5_SFLOAT_BLOCK = 1000066002,
  /** ASTC 6×5 block compression, signed floating-point (16 bytes per block). */
  ASTC_6X5_SFLOAT_BLOCK = 1000066003,
  /** ASTC 6×6 block compression, signed floating-point (16 bytes per block). */
  ASTC_6X6_SFLOAT_BLOCK = 1000066004,
  /** ASTC 8×5 block compression, signed floating-point (16 bytes per block). */
  ASTC_8X5_SFLOAT_BLOCK = 1000066005,
  /** ASTC 8×6 block compression, signed floating-point (16 bytes per block). */
  ASTC_8X6_SFLOAT_BLOCK = 1000066006,
  /** ASTC 8×8 block compression, signed floating-point (16 bytes per block). */
  ASTC_8X8_SFLOAT_BLOCK = 1000066007,
  /** ASTC 10×5 block compression, signed floating-point (16 bytes per block). */
  ASTC_10X5_SFLOAT_BLOCK = 1000066008,
  /** ASTC 10×6 block compression, signed floating-point (16 bytes per block). */
  ASTC_10X6_SFLOAT_BLOCK = 1000066009,
  /** ASTC 10×8 block compression, signed floating-point (16 bytes per block). */
  ASTC_10X8_SFLOAT_BLOCK = 1000066010,
  /** ASTC 10×10 block compression, signed floating-point (16 bytes per block). */
  ASTC_10X10_SFLOAT_BLOCK = 1000066011,
  /** ASTC 12×10 block compression, signed floating-point (16 bytes per block). */
  ASTC_12X10_SFLOAT_BLOCK = 1000066012,
  /** ASTC 12×12 block compression, signed floating-point (16 bytes per block). */
  ASTC_12X12_SFLOAT_BLOCK = 1000066013,
  /** 1-bit alpha, 5-bit blue, 5-bit green, and 5-bit red, unsigned normalized, packed into a 16-bit word. */
  A1B5G5R5_UNORM_PACK16 = 1000470000,
  /** 8-bit alpha, unsigned normalized. */
  A8_UNORM = 1000470001,
  /** PVRTC1 2 bits per pixel, unsigned normalized. */
  PVRTC1_2BPP_UNORM_BLOCK_IMG = 1000054000,
  /** PVRTC1 4 bits per pixel, unsigned normalized. */
  PVRTC1_4BPP_UNORM_BLOCK_IMG = 1000054001,
  /** PVRTC2 2 bits per pixel, unsigned normalized. */
  PVRTC2_2BPP_UNORM_BLOCK_IMG = 1000054002,
  /** PVRTC2 4 bits per pixel, unsigned normalized. */
  PVRTC2_4BPP_UNORM_BLOCK_IMG = 1000054003,
  /** PVRTC1 2 bits per pixel, sRGB. */
  PVRTC1_2BPP_SRGB_BLOCK_IMG = 1000054004,
  /** PVRTC1 4 bits per pixel, sRGB. */
  PVRTC1_4BPP_SRGB_BLOCK_IMG = 1000054005,
  /** PVRTC2 2 bits per pixel, sRGB. */
  PVRTC2_2BPP_SRGB_BLOCK_IMG = 1000054006,
  /** PVRTC2 4 bits per pixel, sRGB. */
  PVRTC2_4BPP_SRGB_BLOCK_IMG = 1000054007,
  /** Two 16-bit signed fixed-point components (red and green). Each component has 10 integer bits and 5 fractional bits (NVIDIA). */
  R16G16_SFIXED5_NV = 1000464000,
  /** Alias of {@link VkFormat.ASTC_4X4_SFLOAT_BLOCK}. */
  ASTC_4X4_SFLOAT_BLOCK_EXT = 1000066000,
  /** Alias of {@link VkFormat.ASTC_5X4_SFLOAT_BLOCK}. */
  ASTC_5X4_SFLOAT_BLOCK_EXT = 1000066001,
  /** Alias of {@link VkFormat.ASTC_5X5_SFLOAT_BLOCK}. */
  ASTC_5X5_SFLOAT_BLOCK_EXT = 1000066002,
  /** Alias of {@link VkFormat.ASTC_6X5_SFLOAT_BLOCK}. */
  ASTC_6X5_SFLOAT_BLOCK_EXT = 1000066003,
  /** Alias of {@link VkFormat.ASTC_6X6_SFLOAT_BLOCK}. */
  ASTC_6X6_SFLOAT_BLOCK_EXT = 1000066004,
  /** Alias of {@link VkFormat.ASTC_8X5_SFLOAT_BLOCK}. */
  ASTC_8X5_SFLOAT_BLOCK_EXT = 1000066005,
  /** Alias of {@link VkFormat.ASTC_8X6_SFLOAT_BLOCK}. */
  ASTC_8X6_SFLOAT_BLOCK_EXT = 1000066006,
  /** Alias of {@link VkFormat.ASTC_8X8_SFLOAT_BLOCK}. */
  ASTC_8X8_SFLOAT_BLOCK_EXT = 1000066007,
  /** Alias of {@link VkFormat.ASTC_10X5_SFLOAT_BLOCK}. */
  ASTC_10X5_SFLOAT_BLOCK_EXT = 1000066008,
  /** Alias of {@link VkFormat.ASTC_10X6_SFLOAT_BLOCK}. */
  ASTC_10X6_SFLOAT_BLOCK_EXT = 1000066009,
  /** Alias of {@link VkFormat.ASTC_10X8_SFLOAT_BLOCK}. */
  ASTC_10X8_SFLOAT_BLOCK_EXT = 1000066010,
  /** Alias of {@link VkFormat.ASTC_10X10_SFLOAT_BLOCK}. */
  ASTC_10X10_SFLOAT_BLOCK_EXT = 1000066011,
  /** Alias of {@link VkFormat.ASTC_12X10_SFLOAT_BLOCK}. */
  ASTC_12X10_SFLOAT_BLOCK_EXT = 1000066012,
  /** Alias of {@link VkFormat.ASTC_12X12_SFLOAT_BLOCK}. */
  ASTC_12X12_SFLOAT_BLOCK_EXT = 1000066013,
  /** Alias of {@link VkFormat.G8B8G8R8_422_UNORM}. */
  G8B8G8R8_422_UNORM_KHR = 1000156000,
  /** Alias of {@link VkFormat.B8G8R8G8_422_UNORM}. */
  B8G8R8G8_422_UNORM_KHR = 1000156001,
  /** Alias of {@link VkFormat.G8_B8_R8_3PLANE_420_UNORM}. */
  G8_B8_R8_3PLANE_420_UNORM_KHR = 1000156002,
  /** Alias of {@link VkFormat.G8_B8R8_2PLANE_420_UNORM}. */
  G8_B8R8_2PLANE_420_UNORM_KHR = 1000156003,
  /** Alias of {@link VkFormat.G8_B8_R8_3PLANE_422_UNORM}. */
  G8_B8_R8_3PLANE_422_UNORM_KHR = 1000156004,
  /** Alias of {@link VkFormat.G8_B8R8_2PLANE_422_UNORM}. */
  G8_B8R8_2PLANE_422_UNORM_KHR = 1000156005,
  /** Alias of {@link VkFormat.G8_B8_R8_3PLANE_444_UNORM}. */
  G8_B8_R8_3PLANE_444_UNORM_KHR = 1000156006,
  /** Alias of {@link VkFormat.R10X6_UNORM_PACK16}. */
  R10X6_UNORM_PACK16_KHR = 1000156007,
  /** Alias of {@link VkFormat.R10X6G10X6_UNORM_2PACK16}. */
  R10X6G10X6_UNORM_2PACK16_KHR = 1000156008,
  /** Alias of {@link VkFormat.R10X6G10X6B10X6A10X6_UNORM_4PACK16}. */
  R10X6G10X6B10X6A10X6_UNORM_4PACK16_KHR = 1000156009,
  /** Alias of {@link VkFormat.G10X6B10X6G10X6R10X6_422_UNORM_4PACK16}. */
  G10X6B10X6G10X6R10X6_422_UNORM_4PACK16_KHR = 1000156010,
  /** Alias of {@link VkFormat.B10X6G10X6R10X6G10X6_422_UNORM_4PACK16}. */
  B10X6G10X6R10X6G10X6_422_UNORM_4PACK16_KHR = 1000156011,
  /** Alias of {@link VkFormat.G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16}. */
  G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16_KHR = 1000156012,
  /** Alias of {@link VkFormat.G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16}. */
  G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16_KHR = 1000156013,
  /** Alias of {@link VkFormat.G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16}. */
  G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16_KHR = 1000156014,
  /** Alias of {@link VkFormat.G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16}. */
  G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16_KHR = 1000156015,
  /** Alias of {@link VkFormat.G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16}. */
  G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16_KHR = 1000156016,
  /** Alias of {@link VkFormat.R12X4_UNORM_PACK16}. */
  R12X4_UNORM_PACK16_KHR = 1000156017,
  /** Alias of {@link VkFormat.R12X4G12X4_UNORM_2PACK16}. */
  R12X4G12X4_UNORM_2PACK16_KHR = 1000156018,
  /** Alias of {@link VkFormat.R12X4G12X4B12X4A12X4_UNORM_4PACK16}. */
  R12X4G12X4B12X4A12X4_UNORM_4PACK16_KHR = 1000156019,
  /** Alias of {@link VkFormat.G12X4B12X4G12X4R12X4_422_UNORM_4PACK16}. */
  G12X4B12X4G12X4R12X4_422_UNORM_4PACK16_KHR = 1000156020,
  /** Alias of {@link VkFormat.B12X4G12X4R12X4G12X4_422_UNORM_4PACK16}. */
  B12X4G12X4R12X4G12X4_422_UNORM_4PACK16_KHR = 1000156021,
  /** Alias of {@link VkFormat.G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16}. */
  G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16_KHR = 1000156022,
  /** Alias of {@link VkFormat.G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16}. */
  G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16_KHR = 1000156023,
  /** Alias of {@link VkFormat.G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16}. */
  G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16_KHR = 1000156024,
  /** Alias of {@link VkFormat.G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16}. */
  G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16_KHR = 1000156025,
  /** Alias of {@link VkFormat.G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16}. */
  G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16_KHR = 1000156026,
  /** Alias of {@link VkFormat.G16B16G16R16_422_UNORM}. */
  G16B16G16R16_422_UNORM_KHR = 1000156027,
  /** Alias of {@link VkFormat.B16G16R16G16_422_UNORM}. */
  B16G16R16G16_422_UNORM_KHR = 1000156028,
  /** Alias of {@link VkFormat.G16_B16_R16_3PLANE_420_UNORM}. */
  G16_B16_R16_3PLANE_420_UNORM_KHR = 1000156029,
  /** Alias of {@link VkFormat.G16_B16R16_2PLANE_420_UNORM}. */
  G16_B16R16_2PLANE_420_UNORM_KHR = 1000156030,
  /** Alias of {@link VkFormat.G16_B16_R16_3PLANE_422_UNORM}. */
  G16_B16_R16_3PLANE_422_UNORM_KHR = 1000156031,
  /** Alias of {@link VkFormat.G16_B16R16_2PLANE_422_UNORM}. */
  G16_B16R16_2PLANE_422_UNORM_KHR = 1000156032,
  /** Alias of {@link VkFormat.G16_B16_R16_3PLANE_444_UNORM}. */
  G16_B16_R16_3PLANE_444_UNORM_KHR = 1000156033,
  /** Alias of {@link VkFormat.G8_B8R8_2PLANE_444_UNORM}. */
  G8_B8R8_2PLANE_444_UNORM_EXT = 1000330000,
  /** Alias of {@link VkFormat.G10X6_B10X6R10X6_2PLANE_444_UNORM_3PACK16}. */
  G10X6_B10X6R10X6_2PLANE_444_UNORM_3PACK16_EXT = 1000330001,
  /** Alias of {@link VkFormat.G12X4_B12X4R12X4_2PLANE_444_UNORM_3PACK16}. */
  G12X4_B12X4R12X4_2PLANE_444_UNORM_3PACK16_EXT = 1000330002,
  /** Alias of {@link VkFormat.G16_B16R16_2PLANE_444_UNORM}. */
  G16_B16R16_2PLANE_444_UNORM_EXT = 1000330003,
  /** Alias of {@link VkFormat.A4R4G4B4_UNORM_PACK16}. */
  A4R4G4B4_UNORM_PACK16_EXT = 1000340000,
  /** Alias of {@link VkFormat.A4B4G4R4_UNORM_PACK16}. */
  A4B4G4R4_UNORM_PACK16_EXT = 1000340001,
  /** Alias of {@link VkFormat.R16G16_SFIXED5_NV}. */
  R16G16_S10_5_NV = 1000464000,
  /** Alias of {@link VkFormat.A1B5G5R5_UNORM_PACK16}. */
  A1B5G5R5_UNORM_PACK16_KHR = 1000470000,
  /** Alias of {@link VkFormat.A8_UNORM}. */
  A8_UNORM_KHR = 1000470001,
  /** Largest enumerator value. Not a texture format. */
  MAX_ENUM = 2147483647,
}
