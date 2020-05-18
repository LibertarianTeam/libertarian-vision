export function buildClass(initial = '', items, source) {
  return items.reduce(
    (result, item) => (source[item] ? `${result} ${item}` : result),
    initial
  )
}
