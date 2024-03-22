export * as jszip from './jszip.js';
export * as doc from './document.js';
export * as xdc from './xdc.js';
import getRGB from "consistent-color-generation";


export let toColor = string => getRGB(string).toString();


export let toDigit = (number, digits) => {

  let string = String(number);
  let length = string.length;

  for (let i = length; i < digits; i++) {
    string = '0' + string;
  }

  return string;

}
