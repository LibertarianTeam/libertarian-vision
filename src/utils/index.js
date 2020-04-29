export function getAsset(img) {
  return img.includes("https") ? img : require(`@/assets/${img}`);
}
