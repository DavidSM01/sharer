export let arrFrom = (obj) => Array.from(obj);

export let LSgetItem = (key) => localStorage.getItem(key);
export let LSsetItem = (key, item) => localStorage.setItem(key, item);


export let containClass = (classname, elem) => elem.classList.contains(classname);

export function toggleClasses(classes, elems) {
  elems.forEach((elem) => {
    classes.forEach((classname) => {
      elem.classList.toggle(classname);
    });
  });
}


export let setElemAttr = (val, elem, attr = "value") => elem[attr] = val;

export let setInnerHtml = (elem, htmlData) => elem.innerHTML = htmlData;

export let getByTag = (tag) => document.getElementsByTagName(tag);

export let getAttrVal = (elem, attr) => elem.getAttribute(attr);