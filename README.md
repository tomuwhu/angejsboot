# angejsboot
ExpessJS - EJS - AngularJS - Bootstrap - Mongoose

### Telepítés
1. [NodeJS](https://nodejs.org/en/) telepítése
1. [MongoDB Community Server](https://www.mongodb.com/download-center?jmp=nav#community) telepítése
1. [angejsboot github reposatory](https://github.com/tomuwhu/angejsboot) klónozása
1. console (terminál ablak) megnyitása
1. cd /../../../anglejsboot (ahova klónozva lett)
1. npm i
1. npm test
1. a böngészőben: http://localhost:3000

### Felépítés

###### Lényeges fájlok:

```javascript
 /
 └─┬─app.js     
   ├─roter.js       // szerveroldali események kezelése (GET, POST)
   ├─┬─views        // szerveroldali renderelésű fájlok (ejs)
   │ └───index.ejs  // minta (kezdeti) kimeneti fájl '/' eseményre
   └─┬─public       // kliensoldalról elérhető fájlok
     ├─┬─ajs        // kliensoldali scriptek
     │ └───index.js // minta (kezdeti) kimeneti fájl kliens oldali scriptje
     └─┬─css        // kliens oldali stílusfájlok
       └───style.css
```
