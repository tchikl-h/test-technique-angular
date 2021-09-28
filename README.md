# MesPlantes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

# Objectif
L'objectif est d'avoir une liste de plantes, de pouvoir filtrer les plantes à arroser, et les plantes déjà arrosées, ainsi que d'avoir un bouton sur chaque card pour arroser la plante.

L'idée est de récupérer des données d'une API et de les afficher sous forme de carrousel de cards. Il faut ensuite pouvoir filtrer les cartes en fonction d'une date (avant ou après la date actuelle). Uniquement les cards avec une date antérieure à la date actuelle ont un bouton "arroser", lorsqu'il est cliqué, cela passe la date antérieure à la date actuelle (mettant à jour les listes filtrés à jour).

Bon courage ;)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## API

Run `npm run db` for an api. Navigate to `http://localhost:3000/`. You can visualize the data in ./db/db.json

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
