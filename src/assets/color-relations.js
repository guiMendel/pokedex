const kind_color = {
  normal: "#828282",
  poison: "#4b0d85",
  grass: "#118642",
  fire: "#922314",
  water: "#002369",
  electric: "#b39f07",
  ice: "#5a9296",
  fighting: "#800b0b",
  ground: "#452615",
  flying: "#354382",
  psychic: "#6e1d3c",
  bug: "#6f8a38",
  rock: "#383430",
  ghost: "#6b582d",
  dark: "#130821",
  dragon: "#092e04",
  steel: "#4f4f4f",
  fairy: "#d955bc"
};
export default kind_color;
export function get_kind(kind, index) {
  let got = kind.split(";").sort()[index];
  // se pedir um indice que não existe, pega o primeiro
  if (!got && index > 0) got = kind.split(";")[0];
  return got;
}
