export function toggleClasses(classes, elems) {
  elems.forEach((elem) => {
    classes.forEach((classname) => {
      elem.classList.toggle(classname);
    });
  });
}
