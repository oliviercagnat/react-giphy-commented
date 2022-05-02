// External libraries

// Take our JSX and render into HTML
import ReactDOM from 'react-dom';
// Make us able to write JSX
// import React from 'react';
// We import Component from React
import React, { Component } from 'react';

// Internal libraries
import '../assets/stylesheets/application.scss';
// We need to import our App component
import App from './components/App';

// At first, we were saying that if we had State in our
// component, we needed to use Class, otherwise function.
// State were not existing in function before so we needed to use Class
// Nowadays, we use React Hooks, ad we don't need to use Class anymore.
// Most of the time, function component.

// 1st way to create a React component.
// Through a function component, most used now.
// Shortcut: rsc : React Stateless Component

// Props is the param of our React component
// it is a JS object with a bunch of keys,
// that we can store in a variable
// const Hello = (props) => {
//   // Here destructuring of props
//   const { name, age } = props;
//   const message = `Super ${props.name} ${name}`;
//   // We return directly some HTML thanks to JSX
//   // Similar to embeded Ruby
//   return (
//     <div>
//       <h1>Hello, {message}</h1>
//       <h2>I am {age}</h2>
//     </div>
//   );
// }

// 2nd way: through a JS class
// Shortcut: rcc React Class Component



// We need to make it inherit from a React component class
// Props is inherited directly from the React component
// class Hello extends Component {
//   // We are created a Hello component with a props,
//   // We pass the props in the super
//   // No need to write the constructor because it is already integrated in it
//   // constructor () {
//   //   super(props);
//   // }
//   // Because it is a class, we build methods inside.
//   // In a class, we use the render method.
//   // Inside a "render", we "return" the HTML we want
//   render() {
//     // it is storing it a an instance vairable of my class,
//     // We can access the props by doing this.props
//     // Equivalent to self in Ruby
//     const { name, age } = this.props;
//     const message = `Hello I'm ${name} and I am ${age}`;
//     return <h1>{message}</h1>
//   }
// }


// Select where we want React element to be
const container = document.getElementById('root');

// Takes 2 arguments, 1st the content we want to render,
// 2nd is where we want to render it.
// ReactDOM.render("Hello", root)
// We can also write HTML directly
// ReactDOM.render(<h1>Hello</h1>, root)
// We can also insert functions with
// ReactDOM.render(<Hello name="Boris" age="32" />, container);
ReactDOM.render(<App />, container);
