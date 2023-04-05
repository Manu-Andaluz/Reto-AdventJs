function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
  const values = Object.values(store);
  let found;
  for (let value of values) {
    found =
      typeof value == "object" ? contains(value, product) : value === product;
    if (found) {
      return true;
    }
  }
  return false;
}
