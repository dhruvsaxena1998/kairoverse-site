interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  maxage?: string;
  fit?: "cover" | "contain" | "fill";
  output?: "webp" | "jpeg" | "png";
}
export const weserv = (src: string, options: ImageOptions = {}) => {
  const {
    width = 1920,
    height = 1080,
    quality = 80,
    maxage = "31d",
    fit = "cover",
    output = "webp",
  } = options;

  return `https://images.weserv.nl?url=${src}&w=${width}&h=${height}&q=${quality}&maxage=${maxage}&fit=${fit}&output=${output}`;
};
