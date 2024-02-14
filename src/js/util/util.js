export let arrFrom = obj => Array.from(obj);

export let time = () => Date.now();

export let LSgetItem = key => localStorage.getItem(key);
export let LSsetItem = (key, item) => localStorage.setItem(key, item);


export let addClass = (classname, elem) => elem.classList.add(classname);

export let removeClass = (classname, elem) => elem.classList.remove(classname);

export let toggleClass = (classname, elem) => elem.classList.toggle(classname);

export function toggleClasses(classes, elems) {
  elems.forEach((elem) => {
    classes.forEach((classname) => {
        toggleClass(classname, elem);
    });
  });
}


export let setElemAttr = (val, elem, attr = "value") => elem[attr] = val;

export let setInnerHTML = (htmlData, elem) => setElemAttr(htmlData, elem, "innerHTML");


export let getByTag = tag => document.getElementsByTagName(tag);

export let getAttrVal = (elem, attr) => elem.getAttribute(attr);


export let toDigit = number => {

  let string = String(number);
  let length = string.length;

  for (let i = length; i < 5; i++) {
    string = "0" + string;
  }

  return string;

}


export let random = digits => {
  return Math.trunc(Math.random() * 10000)
}
