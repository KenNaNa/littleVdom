import {createElement, render, renderDom} from './element';
import diff from './diff';
let virtualDom1 = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['a']),
    createElement('li', {class: 'item'}, ['b']),
    createElement('li', {class: 'item'}, ['c'])
])
let virtualDom2 = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['1']),
    createElement('li', {class: 'item'}, ['b']),
    createElement('li', {class: 'item'}, ['3'])
])

let patches = diff(virtualDom1, virtualDom2);
let el = render(virtualDom1);
console.log(el);
renderDom(el, window.root);
console.log(virtualDom1);