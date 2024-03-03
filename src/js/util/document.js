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


export let setTextContent = (text, elem) => elem.textContent = text;


export let getById = id => document.getElementById(id);

export let queryAll = (elem, css) => elem.querySelectorAll(css);


export let addListener = (elem, event, func, options = {}) => elem.addEventListener(event, func, options);