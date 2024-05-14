# Widget Météo

Tu viens de voir un outil pratique pour déployer un projet React ?
Tu veux montrer au monde entier ce dont tu es capable ?

Allez !

1. On se code un truc sympa
2. On fait le build
3. On le met en ligne

## 1. On va coder un widget de Météo

Un widget est un mini-outil, qui pourra s'intégrer facilement dans des outils plus complets. Nous on va faire une mini-interface pour voir le temps qu'il fait dans une ville donnée. On va faire un composant quoi !

## 2. On fait le build

Le build est une étape cruciale. Il s'agit de lancer l'analyse de nos fichiers contenant l'ensemble du code de notre application. Notre code de développement ne sera pas utilisé tel quel en production. Il faut lui appliquer plusieurs traitements. Par exemple le scss doit être transformé en css pour être compris par le navigateur. L'ES6 doit être transpilé en ES5 pour plus de compatibilité. Le code doit être minifié, réduit en supprimant les espaces ou les caractères inutiles et ainsi rendu plus léger. Heureusement on a un outil qui dirige les opérations avec Vite 🎉.

Donc dans les faits :

```bash
yarn build
```

## Mise en ligne

Il existe des tas de solutions d'hébergement pour nos applications. Aujourd'hui nous allons en voir une des plus complexes. Il s'agit de Surge.

Surge propose une solution gratuite pour héberger du contenu statique (HTML/CSS/JS). Ça tombe bien c'est précisement ce qu'on a réalisé ! Y a plus qu'à tester 😁

Quand t'auras fini de jouer pourquoi pas recommencer ? Tiens cadeau https://github.com/public-apis/public-apis
