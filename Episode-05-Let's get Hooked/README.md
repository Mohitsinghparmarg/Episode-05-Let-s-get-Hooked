## Namaste Food

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 *  - Img
 *  - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


 Two Types of Export/Import

  - Default Export/Import
        export default Component/Variable;
        import component from "path";
  
  - Named Export/Import
        export const Component;
        import {component} from "path";



# React Hooks
 these are Normal javaScript utility functions.
  -useState()- Superpowerful state variable in React. 
  -useEffect()

  whenever a state variable updates React Rerender the Component.


## What is the difference between Named Export,   Default export and * as export?

    named exports allow you to export multiple values from a module using names,
            // In a module
        export const foo = 'foo';
        export const bar = 'bar';

        // In another module
        import { foo, bar } from './module';
        console.log(foo); // 'foo'
        console.log(bar); // 'bar'

     default exports allow you to export a single value from a module as the default export,
                // In a module
        const baz = 'baz';
        export default baz;

        // In another module
        import baz from './module';
        console.log(baz); // 'baz'

      * as exports allow you to export all values from a module as an object with keys corresponding to the names of the exported values.
            // In a module
        const qux = 'qux';
        const quux = 'quux';
        export { qux, quux };

        // In another module
        import * as module from './module';
        console.log(module.qux); // 'qux'
        console.log(module.quux); // 'quux'






## What are React Hooks?
  React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to provide a more straightforward way to handle state and side effects in React components without using class components.



## Why do we need a useState Hook?
   The useState Hook is essential in React because it allows functional components to have state. Before the introduction of Hooks in React 16.8, functional components were stateless and could not manage their own state. This limitation made it challenging to use functional components for complex UIs that required state management.

   The useState Hook solves this problem by providing a way to add state to functional components. It returns a pair of values: the current state and a function that updates it. This allows you to create components that can manage their own state and update the UI in response to changes in that state.



## this will give the proper understanding of Virtual DOM
  Virtual DOM: https://reactjs.org/docs/faq-internals.html

## it is about Reconciliation ,how React works internally do things fast..
  Reconciliation: https://reactjs.org/docs/reconciliation.html

##  React Fiber one of the most important topic to learn
   React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture

## React without ES6
    React Without ES6: https://reactjs.org/docs/react-without-es6.html

## React without JSX
    React without JSX: https://reactjs.org/docs/react-without-jsx.html

