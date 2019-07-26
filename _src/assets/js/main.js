'use strict';

console.log('>> Ready :)');

//FUNCIONES COLLAPSABLES

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
  collapseDesign.classList.toggle('hidden');
  collapseFill.classList.add('hidden');
  collapseSubmit.classList.add('hidden')
}
const openCollapsable2 = () => {
  collapseDesign.classList.add('hidden');
  collapseFill.classList.toggle('hidden');
  collapseSubmit.classList.add('hidden')
}
const openCollapsable3 = () => {
  collapseDesign.classList.add('hidden');
  collapseFill.classList.add('hidden');
  collapseSubmit.classList.toggle('hidden')
}

const openCollapsable4 = () => {
  event.preventDefault();
  collapseShare.classList.toggle('hidden');
  clickShare.classList.add('button-Create-after');
}

//Listeners
clickDesign.addEventListener('click', openCollapsable);
clickFill.addEventListener('click', openCollapsable2);
clickSubmit.addEventListener('click', openCollapsable3);

clickShare.addEventListener('click', openCollapsable4);



//FUNCIONES COLORES

const clickTheme1 = document.querySelector('.theme__radio1');
const clickTheme2 = document.querySelector('.theme__radio2');
const clickTheme3 = document.querySelector('.theme__radio3');

const card = document.querySelector('.section1__card');

function changeColorTheme(event) {
  console.log(event.currentTarget.value)
  card.classList.remove('theme-colors1');
  card.classList.remove('theme-colors2');
  card.classList.remove('theme-colors3');

  card.classList.add(event.currentTarget.value);
}

clickTheme1.addEventListener('click', changeColorTheme);
clickTheme2.addEventListener('click', changeColorTheme);
clickTheme3.addEventListener('click', changeColorTheme);

//FUNCION DE ESCRIBIR

const changeTitle = document.querySelector('.js__form-name');
const writeTitle = document.querySelector('.js__title');


function changeName() {
  const inputValue = changeTitle.value;
  if (changeTitle.value === '') {
    writeTitle.innerHTML = 'Nombre Apellido';
  } else {
    writeTitle.innerHTML = inputValue;
  }

}
changeTitle.addEventListener('keyup', changeName);


const Job = document.querySelector('.js__form-job');
const writeJob = document.querySelector('.js__job');

function changeJob() {
  const inputValue = Job.value;
  if (Job.value === '') {
    writeJob.innerHTML = 'Front-end developer';
  } else {
    writeJob.innerHTML = inputValue;
  }
}

Job.addEventListener('keyup', changeJob);
