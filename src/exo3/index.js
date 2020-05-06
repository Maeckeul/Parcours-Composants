/* eslint-disable react/prop-types */
/*
 * Exo 3 : Props corn time!
 *
 * Wouhouh! C'est la folie aujourd'hui :)
 * On ne va pas s'arrêter en si bon chemin, découvrons les props.
 *
 * 1) Créer un composant <HelloWorld />, qui renvoie le JSX suivant :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par *lang*</h1>
 *        <h2>Et affiché avec *method*</h2>
 *      </div>
 *
 *      *lang* et *method* étant les deux propriétés d'un objet passé en argument.
 *
 *    Par exemple : <HelloWorld lang="Titi" method="Gros minet" /> doit renvoyer :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par Titi</h1>
 *        <h2>Et affiché avec Gros minet</h2>
 *      </div>
 *
 * 2) Exécuter la fonction render() de ReactDOM
 *    pour afficher <HelloWorld lang="React" method="ReactDOM" /> dans la div #root
 */

/*
 * Import
 */
import React from 'react';
import { render } from 'react-dom';

import test from './test';


/*
 * Code
 */


// un composant pourra recevoir un paramètre, qu'on appelle par habitude props qui contiendra un objet contenant les associations de clés et de valeur passer à l'instanciation/execution
// const HelloWorld = (props) => {
//   // props -> { method: 'Gros minet', lang: 'Tit' }
//   // dans du JSX on peut repasser "en mode interprété" en écrivant entre accolades
//   return (
//     <div id="hello-world">
//       <h1>Ce HTML a été généré par {props.method}</h1>
//       <h2>Et affiché avec {props.lang} {1 + 2}</h2>
//     </div>
//   );
// };

// avec de la destructuration
const HelloWorld = ({ method, lang }) => (
  <div id="hello-world">
    <h1>Ce HTML a été généré par {method}</h1>
    <h2>Et affiché avec {lang} {1 + 2}</h2>
  </div>
);


// appel d'un composant avec un paramètre
// version classlique
// HelloWorld({
//   method: 'Gros minet',
//   lang: 'Titi',
// });
// // version JSX
// <HelloWorld method="Gros minet" land="Titi" />


const rootDomElement = document.getElementById('root');
render(<HelloWorld method="Gros minet" lang="Titi" />, rootDomElement);

/*
 * Tests
 */
test();
