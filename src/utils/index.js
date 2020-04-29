export function getAsset(img) {
  return img.includes("https") ? img : require(`@/assets/${img}`);
}

export function buildClass(initial = "", items, source) {
  return items.reduce(
    (result, item) => (source[item] ? `${result} ${item}` : result),
    initial
  );
}
