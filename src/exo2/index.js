/*
 * Exo 2 : React !
 *
 * C'est parti avec React :D !!!
 *
 * 1) Installer les packages react et react-dom
 *  -> yarn add react react-dom
 *
 * 2) Créer un composant <HelloWorld />, en créant une fonction HelloWorld()
 *    qui renvoie le JSX suivant :
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par React</h1>
 *        <h2>Et affiché avec ReactDOM</h2>
 *      </div>
 *
 * 3) Importer la fonction render du module 'react-dom'
 *
 * 4) Exécuter la fonction render()
 *    pour afficher <HelloWorld /> dans la div #root
 * 
 * 5) Rajouter un fichier .css pour venir centrer le texte de #hello-world
 */

/*
 * Npm import
 */
// j'importe React puisque je vais faire des React.createElement déguisés avec mon JSX
import React from 'react';
// j'importe via un import nommé la fonction render de react-dom
// cette fonction va transposer mes élements React virtuels vers du DOM réel
import { render } from 'react-dom';

/*
 * Local import
 */
import test from './test';

// on peut aussi importer des assets (img, css, ...) et ainsi webpack pourra faire intervenir des outils pour les traiter au moment des les rappatrier dans dist
import './style.css';

// const paragraph = <p>Hello world</p>;
// // const paragraph = React.createElement('p', null, 'Hello world');

// par convention on nomme les composants avec une majuscule
// function HelloWorld() {
//   return <p>Hello world</p>;
// }
// ici on retourne directement implicitement du JSX
// pour l'écrire sur plusieurs lignes je l'entoure de parenthèses
const HelloWorld = () => (
  <div id="hello-world">
    <h1>Ce HTML a été généré par React</h1>
    <h2>Et affiché avec ReactDOM</h2>
  </div>
);

const rootDomElement = document.getElementById('root');

// render prend 2 arguments :
// - les élements JSX
// - un élement cible dans le dom réel
// il va faire le rendu du JSX dans la cible du dom
// render(HelloWorld(), rootDomElement);
// nos composants sont des fonctions qui retournent du JSX, pour récupérer la valeur de retour, on peut executer la fonction "à la manière JSX" en écrivant une balise
render(<HelloWorld />, rootDomElement);

/*
 * Code
 */


/*
 * Tests
 */
test();
