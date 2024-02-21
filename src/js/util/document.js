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

export let setInnerHTML = (htmlData, elem) => setElemAttr(htmlData, elem, 'innerHTML');


export let getByTag = tag => document.getElementsByTagName(tag);

export let getById = id => document.getElementById(id);

export let getAttrVal = (elem, attr) => elem.getAttribute(attr);