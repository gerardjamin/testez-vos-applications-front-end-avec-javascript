import { data } from '../../../data/mock-homepage-data.js'

import { isInTestEnv } from '../env/index.js'


export const retrieveSensorsData = () => isInTestEnv()
    ? data.facades  //soit je recupere les données mokées dans un fichier javascript
    : fetch('http://localhost:5500/data/homepage-data.json')
        .then(res => res.json())
        .then(data => data.facades)
        .catch(err => console.log("Oh no", err))

        //soit je lance un call API via un fetch en interne dans le fichier json

//test unitaire
// On va tester suivant la valeur de isInTestEnv() si l'on renvoie bien les données mokées ou
//le retour de la commande fetch()