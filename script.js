// Variaveis Globais
const btn = document.getElementById('btn');
const btn2 = document.getElementById('submit-btn');
const box = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const getPosSend = document.getElementById('form-data');
const getForm = document.getElementById('evaluation-form');
let theRadio;
const theSubjects = [];
let theAv;

// Inputs necessarios
const getStudentName = document.getElementById('input-name');
const getStudentLastName = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const getHouse = document.getElementById('house');
const getRadio = document.getElementsByName('family');
const getSubjects = document.getElementsByClassName('subject');
const getAvaliation = document.getElementsByName('rate');

// Funcoes

const verifyLogin = () => {
  const login = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const disableBtn = () => {
  if (box.checked === true) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
};

const createPara = () => {
  for (let i = 0; i < 5; i += 1) {
    const createPar = document.createElement('p');
    createPar.className = 'data';
    getPosSend.appendChild(createPar);
  }
};

const verifyWhosChecked = () => {
  for (let i = 0; i < getRadio.length; i += 1) {
    if (getRadio[i].checked === true) {
      theRadio = getRadio[i];
    }
  }
};

const verifyWhosSelected = () => {
  for (let i = 0; i < getSubjects.length; i += 1) {
    if (getSubjects[i].checked === true) {
      theSubjects.push(getSubjects[i].value);
    }
  }
};

const verifyFinale = () => {
  let newSubjects = '';
  for (let i = 0; i < theSubjects.length; i += 1) {
    if (newSubjects === '') {
      newSubjects += `${theSubjects[i]}`;
    } else {
      newSubjects += `, ${theSubjects[i]}`;
    }
  }

  return newSubjects;
};

const createParaText = () => {
  const getData = document.getElementsByClassName('data');
  verifyWhosChecked();
  verifyWhosSelected();
  const newSubject = verifyFinale();
  getData[0].innerHTML = `Nome: ${getStudentName.value} ${getStudentLastName.value}`;
  getData[1].innerHTML = `Email: ${getEmail.value}`;
  getData[2].innerHTML = `Casa: ${getHouse.value}`;
  getData[3].innerHTML = `Família: ${theRadio.value}`;
  getData[4].innerHTML = `Matérias: ${newSubject}`;
};

const createAvaliation = () => {
  for (let i = 0; i < getAvaliation.length; i += 1) {
    if (getAvaliation[i].checked === true) {
      theAv = getAvaliation[i].value;
    }
  }
  const createNewPar = document.createElement('p');
  createNewPar.innerHTML = `Avaliação: ${theAv}`;
  getPosSend.appendChild(createNewPar);
};

const createObservation = () => {
  const createNewPar = document.createElement('p');
  createNewPar.innerHTML = `Observações: ${textarea.value}`;
  getPosSend.appendChild(createNewPar);
};

const sendData = () => {
  btn2.addEventListener('click', () => {
    createPara();
    createParaText();
    createAvaliation();
    createObservation();
    getForm.style.display = 'none';
  });
};
btn.addEventListener('click', verifyLogin);

box.addEventListener('click', disableBtn);

textarea.addEventListener('input', () => {
  counter.innerHTML = 500 - textarea.value.length;
});

disableBtn();
sendData();
