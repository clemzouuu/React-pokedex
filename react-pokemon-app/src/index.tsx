import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// On appelle la méthode Render sur DOM, on demarre l'application avec App
// Methode prend en parametre un composant React et un élément html avec un element root
ReactDOM.render(
    <App />,
    document.getElementById('root')   
); 