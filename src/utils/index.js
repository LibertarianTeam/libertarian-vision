export function getAsset(src, { fullURL = false } = {}) {
  const external = src.includes("https");
  const url = external ? src : require(`@/assets/${src}`);

  return fullURL ? `${process.env.VUE_APP_PRODUCTION_URL}${url}` : url;
}

export function buildClass(initial = "", items, source) {
  return items.reduce(
    (result, item) => (source[item] ? `${result} ${item}` : result),
    initial
  );
}
