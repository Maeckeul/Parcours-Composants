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

const HelloWorld = ({ lang, method }) => {
  return (
    <div id="hello-world">
      <h1>Ce HTML a été généré par {lang}</h1>
      <h2>Et affiché avec {method}</h2>
    </div>
  );
};

const rootDomElement = document.getElementById('root');

render(<HelloWorld lang="React" method="ReactDOM" />, rootDomElement);

/*
 * Tests
 */
test();
