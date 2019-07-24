'use strict';

console.log('>> Ready :)');

//Crear constante con las etiquetas de HTML
const clickDesign = document.querySelector('.design-collapsable');
const clickFill = document.querySelector('.fill-collapsable');
const clickSubmit = document.querySelector('.submit-collapsable');

const clickShare = document.querySelector('.collapsebtn');

const collapseDesign = document.querySelector('.design-container');
const collapseFill = document.querySelector('.fill-container');
const collapseSubmit = document.querySelector('.submit-container');

const collapseShare = document.querySelector('.share-container');


//FUNCIÓN
const openCollapsable = () => {
  collapseDesign.classList.toggle ('hidden');
}
const openCollapsable2 = () => {
  collapseFill.classList.toggle ('hidden');
}
const openCollapsable3 = () => {
  collapseSubmit.classList.toggle ('hidden');
}

const openCollapsable4 = () => {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
}

/*
function openCollapsable (event) {
  collapseDesign.classList.toggle ('hidden');
}
function openCollapsable2 (event) {
  collapseFill.classList.toggle ('hidden');
}
function openCollapsable3 (event) {
  collapseSubmit.classList.toggle ('hidden');
}

function openCollapsable4 (event) {
  event.preventDefault ();
  collapseShare.classList.toggle ('hidden');
  clickShare.classList.add('button-Create-after');
}*/

//Listeners
clickDesign.addEventListener('click', openCollapsable);
clickFill.addEventListener('click', openCollapsable2);
clickSubmit.addEventListener('click', openCollapsable3);

clickShare.addEventListener('click', openCollapsable4);
