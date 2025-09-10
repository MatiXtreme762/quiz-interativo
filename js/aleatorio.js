const nomes = ["Ricardinho", "Alemão da Caravan", "Osvaldo", "Titio Julião", "Titio Cariri", "Torreto"];

export function aleatorio(lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return lista[posicao];
}

export const nome = aleatorio(nomes)