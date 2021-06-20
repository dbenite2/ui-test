# UiTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0. later updated to version 12.0.0

## Requirements

This projects needs of a minimum node version of 14.0.0, its not goint to work at all with versions like 10.0.0 or less.
It is recommended to have the latest version of the Angular CLI to avoid any conflict.

## Development server
 
To run the application, first run `npm install` to get all the necessary dependecies of the project.
Run `npm start` to see the application, wich it will be served at port 4200

## Folder structure

The application was built following the next folder structure
- components: here are located all the used components of the application
- shared: small reusable components small enough to be used anywhere in the application
- core: it contains the services and the principal models of the application
- utils: constants and static code

Internally, the components herarchy was divided by a big parent and small card children, having all the bussisnes logic to the parent.

The application also uses ngrx for state management.

## Deployment

The application is also hosted using vercel technologies and can be found in the next url: https://thumb-rule-david-bentiez.vercel.app/

