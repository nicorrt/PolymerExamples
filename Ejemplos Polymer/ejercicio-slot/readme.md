# SlottedComponents

## Example of slots and components

Crea un componente que tenga slots dedicados para cada sección.

-   Header
    -   imagen
    -   texto
-   Body
    -   Slide (otro componente)
-   Footer

El slot **header** tendrá anidados dos slot el cuál podrá recibir una imagen, en caso de recibirla tendrá que mostrarla y también podrá recibir un texto, en caso de recibirlo también lo enseñará. En caso de no recibir nada, mostrara las propiedades por defecto. La lógica de este proceso la realizará el componente padre.

El slot **header** tiene andidados dos slots: Un slot de tipo imagen y un slot para un texto.
El texto que se sera declarado como una propiedad de componente. con un valor por defecto.
La ruta de la imagen sera declarada como otra propiedad del componente con una ruta valida de una imagen por defecto.


El slot **body** tendrá a su vez otro slot hijo que será un **slide** (carrousel),

El slot slide, recibirá un componente el cuál desde el padre recibirá un array de 3 objetos, cada objeto tendrá un ID único y un string que diga "Soy el ID x":

-    Cada slide podrá ser clicable. Cuando se clique cualquier slide, se enviará un evento al padre que hará que se pinte en el elemento padre (en este caso, el body) qué ID se ha clicado.

**Ejemplo**: clico el slide que dice "Soy el ID 3". Se envía un evento al padre, se añade al final del body "El ID 3 ha sido clicado". Si se clica otro ID, la frase será cambiada.

El slot **footer** tendrá adaptado un fallback para casos que no se pase ningún componente este tenga un comportamiento predeterminado. 

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
