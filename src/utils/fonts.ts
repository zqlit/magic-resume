type FontSource = {
  family: string;
  url: string;
  format: "truetype" | "opentype" | "woff" | "woff2";
  weight: string;
  style: "normal" | "italic";
};

type FontDefinition = {
  labelKey: string;
  value: string;
  aliases: string[];
  sources: FontSource[];
  // 对于通过 CSS @import 加载的字体，标记为 true
  cssImport?: boolean;
};

export const DEFAULT_FONT_FAMILY = "\"Alibaba PuHuiTi\", sans-serif";

// CDN 字体 URL - 注意：只有 Alibaba PuHuiTi 提供直接的字体文件 URL
// Google Fonts 和 MiSans 需要通过 CSS @import 方式加载（在 font.css 中配置）
const CDN_URLS = {
  // 阿里巴巴普惠体 - 直接 woff2 字体文件
  alibabaRegular: "https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-3/AlibabaPuHuiTi-3-55-Regular/AlibabaPuHuiTi-3-55-Regular.woff2",
  alibabaBold: "https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-3/AlibabaPuHuiTi-3-85-Bold/AlibabaPuHuiTi-3-85-Bold.woff2",
  // Noto Sans SC - Google Fonts 静态字体 URL (通过 fonts.gstatic.com)
  notoSansScRegular: "https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63OEALZlLGZvIzPbDoNv0d4JlI.woff2",
  notoSansScMedium: "https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63OEALZlLGZvIzPbDoNv0d4JlI.woff2",
  notoSansScBold: "https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63OEALZlLGZvIzPbDoNv0d4JlI.woff2",
  // Noto Serif SC - Google Fonts 静态字体 URL
  notoSerifScRegular: "https://fonts.gstatic.com/s/notoserifsc/v15/xn7mYHgbiwtYwsU6gb7Y-aDioIJClqzLdxDe1LW311DbuLqQ.woff2",
  notoSerifScMedium: "https://fonts.gstatic.com/s/notoserifsc/v15/xn7mYHgbiwtYwsU6gb7Y-aDioIJClqzLdxDe1LW311DbuLqQ.woff2",
  notoSerifScBold: "https://fonts.gstatic.com/s/notoserifsc/v15/xn7mYHgbiwtYwsU6gb7Y-aDioIJClqzLdxDe1LW311DbuLqQ.woff2",
  // MiSans - 使用 jsDelivr CDN 托管
  misansRegular: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.woff2",
  misansMedium: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Medium/MiSans-Medium.woff2",
  misansBold: "https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Bold/MiSans-Bold.woff2",
};

const FONT_DEFINITIONS: FontDefinition[] = [
  {
    labelKey: "alibaba",
    value: DEFAULT_FONT_FAMILY,
    aliases: [
      "Alibaba PuHuiTi, sans-serif",
      "\"Alibaba PuHuiTi\", sans-serif"
    ],
    sources: [
      {
        family: "Alibaba PuHuiTi",
        url: CDN_URLS.alibabaRegular,
        format: "woff2",
        weight: "400",
        style: "normal"
      },
      {
        family: "Alibaba PuHuiTi",
        url: CDN_URLS.alibabaBold,
        format: "woff2",
        weight: "700",
        style: "normal"
      }
    ]
  },
  {
    labelKey: "misans",
    value: "\"MiSans\", sans-serif",
    aliases: [
      "\"MiSans\", \"Microsoft YaHei\", \"微软雅黑\", sans-serif",
      "\"Microsoft YaHei\", \"微软雅黑\", sans-serif",
      "\"Microsoft YaHei Local\", \"Microsoft YaHei\", \"微软雅黑\", sans-serif",
      "\"MiSans\", sans-serif",
      "MiSans, sans-serif",
      "Microsoft YaHei, sans-serif"
    ],
    sources: [
      {
        family: "MiSans",
        url: CDN_URLS.misansRegular,
        format: "woff2",
        weight: "400",
        style: "normal"
      },
      {
        family: "MiSans",
        url: CDN_URLS.misansMedium,
        format: "woff2",
        weight: "500",
        style: "normal"
      },
      {
        family: "MiSans",
        url: CDN_URLS.misansBold,
        format: "woff2",
        weight: "700",
        style: "normal"
      }
    ]
  },
  {
    labelKey: "notosanssc",
    value: "\"Noto Sans SC\", \"Noto Sans CJK SC\", sans-serif",
    aliases: [
      "\"Noto Sans SC\", \"Noto Sans CJK SC\", sans-serif",
      "Noto Sans SC, sans-serif"
    ],
    sources: [
      {
        family: "Noto Sans SC",
        url: CDN_URLS.notoSansScRegular,
        format: "woff2",
        weight: "400",
        style: "normal"
      },
      {
        family: "Noto Sans SC",
        url: CDN_URLS.notoSansScMedium,
        format: "woff2",
        weight: "500",
        style: "normal"
      },
      {
        family: "Noto Sans SC",
        url: CDN_URLS.notoSansScBold,
        format: "woff2",
        weight: "700",
        style: "normal"
      }
    ]
  },
  {
    labelKey: "sourcehanserifsc",
    value: "\"Source Han Serif SC\", \"Noto Serif SC\", serif",
    aliases: [
      "\"Source Han Serif SC\", \"Noto Serif SC\", serif",
      "\"Noto Serif SC\", \"Source Han Serif SC\", serif",
      "Source Han Serif SC, serif",
      "Noto Serif SC, serif"
    ],
    sources: [
      {
        family: "Source Han Serif SC",
        url: CDN_URLS.notoSerifScRegular,
        format: "woff2",
        weight: "400",
        style: "normal"
      },
      {
        family: "Source Han Serif SC",
        url: CDN_URLS.notoSerifScMedium,
        format: "woff2",
        weight: "500",
        style: "normal"
      },
      {
        family: "Source Han Serif SC",
        url: CDN_URLS.notoSerifScBold,
        format: "woff2",
        weight: "700",
        style: "normal"
      }
    ]
  }
];

const fontDataUrlCache = new Map<string, Promise<string>>();

const toDataUrl = async (url: string) => {
  if (!fontDataUrlCache.has(url)) {
    fontDataUrlCache.set(
      url,
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load font: ${url}`);
          }
          return response.blob();
        })
        .then(
          (blob) =>
            new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result as string);
              reader.onerror = () => reject(new Error(`Failed to read font: ${url}`));
              reader.readAsDataURL(blob);
            })
        )
    );
  }

  return fontDataUrlCache.get(url)!;
};

const findFontDefinition = (fontFamily?: string) => {
  const normalizedValue = fontFamily?.trim();
  if (!normalizedValue) {
    return FONT_DEFINITIONS[0];
  }

  return (
    FONT_DEFINITIONS.find(
      (definition) =>
        definition.value === normalizedValue ||
        definition.aliases.includes(normalizedValue) ||
        definition.aliases.some((alias) =>
          normalizedValue.includes(alias.replace(/"/g, ""))
        )
    ) || FONT_DEFINITIONS[0]
  );
};

const buildFontFaceRule = (source: FontSource, resolvedUrl: string) => `@font-face {
  font-family: "${source.family}";
  src: url("${resolvedUrl}") format("${source.format}");
  font-weight: ${source.weight};
  font-style: ${source.style};
  font-display: swap;
}`;

export const normalizeFontFamily = (fontFamily?: string) =>
  findFontDefinition(fontFamily).value;

export const getFontOptions = (t: (key: string) => string) =>
  FONT_DEFINITIONS.map((definition) => ({
    value: definition.value,
    label: t(definition.labelKey)
  }));

export const getFontFaceCss = async (
  fontFamily?: string,
  inline = false
) => {
  const definition = findFontDefinition(fontFamily);

  const rules = await Promise.all(
    definition.sources.map(async (source) => {
      const resolvedUrl = inline ? await toDataUrl(source.url) : source.url;
      return buildFontFaceRule(source, resolvedUrl);
    })
  );

  return rules.join("\n");
};
