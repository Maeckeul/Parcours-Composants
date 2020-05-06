// un export nommé se fait en ajoutant export devant la variable qu'on veut exporter
export const coucou = () => 'coucou';
const salut = () => 'salut';
const hello = () => 'hello';

// on peut fait 1 et 1 seul export par défaut par fichier
// avec un export par défaut on n'exporte que la valeur
// ici ce que j'exporte c'est () => 'hello';
export default hello;

// on peut aussi fait un export nommé après coup entre accolades,
// on peut aussi exporter plusieurs choses d'un coup en les séparant par des virgules
// il n'y a pas de limite au nombre d'exports nommés par fichier
// lorsqu'on fait un export nommé, on exporte la variable et sa valeur
// c'est à dire le nom de la variable et ce qu'elle contient
export { salut };
