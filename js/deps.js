import "https://unpkg.com/react@18/umd/react.development.js";
import "https://unpkg.com/react-dom@18/umd/react-dom.development.js";

const React = window.React;
const ReactDOM = window.ReactDOM;
const elements = ['a', 'br', 'div', 'em', 'h1', 'h2', 'h3', 'h4', 'header', 'hr', 'i', 'img', 'p', 'li', 'ol', 'section', 'span', 'strong', 'ul', 'button']
const El = {};

for (const element of elements) {
  El[element] = function (opts={}, ...children) {
    return React.createElement(element, opts, ...children);
  }
}

export { React, ReactDOM, El };