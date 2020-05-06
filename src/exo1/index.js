/*
 * Exo 1 : Import/Export
 *
 * OK, on a découvert ES5 et un peu ES2015 la semaine dernière
 * Il est temps de s'y mettre vraiment, et de maîtriser les modules !
 *
 * 1) Créer un fichier src/exo1/hello.js
 *
 * 2) Dans ce fichier, définir 3 fonctions (coucou, salut et hello),
 *    qui renvoient une chaine de caractère ('coucou', 'salut' et 'hello')
 *
 * 3) Exporter ces 3 fonctions, en faisant deux export nommés
 *    et un export par défaut
 *
 * 4) Importer ces 3 fonctions dans ce module (src/exo1/index.js)
 */

/*
 * Import
 */
import test from './test';
// ce qui a été exporté ailleurs peut être importé
// un import nommé se fait entre accolades
// on précise le chemin (en commançant pas ./ si c'est dans le dossier courant)
// on peut omettre l'extension .js
// si le fichier s'appelle index on peut omettre son nom
// on peut importer plusieurs choses d'un coup avec des virgules
// pour un import nommé on respecte le nom d'origine
// import { coucou, salut } from './hello';

// l'import par défaut est sans accolade
// on pourrait importer l'import par défaut sous le nom qu'on veut
// import hello from './hello';

// import par défaurt et nommé en 1 fois :
import hello, { coucou, salut } from './hello';
// on peut renommer à la volée un import nommé par exemple pour éviter les conflis
// pour cela on utilise as
import sum, { salut as displaySomething } from './math';

console.log(sum(5, 2));
salut(); // -> salut de hello.js
displaySomething(); // -> salut de math.js

/*
 * Tests
 */
test(coucou, salut, hello);
