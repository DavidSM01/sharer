export * as jszip from './jszip.js';
export * as doc from './document.js';

//export let doc = documentUtils;
//export let jszip = jszipUtils;


export let arrFrom = obj => Array.from(obj);

export let time = () => Date.now();

export let LSgetItem = key => localStorage.getItem(key);
export let LSsetItem = (key, item) => localStorage.setItem(key, item);


export let toDigit = (number, digits) => {

  let string = String(number);
  let length = string.length;

  for (let i = length; i < digits; i++) {
    string = '0' + string;
  }

  return string;

}


export let random = () => {
  return Math.trunc(Math.random() * 10000)
}
