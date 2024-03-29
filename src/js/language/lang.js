import languages from "./langs.js";

export function LANG(key) {
  let browserLang = window.navigator.language;
  let lang = (browserLang || "en-US").slice(0, 2).toLowerCase();

  let langData = languages[lang];
  let fallbackData = languages["en"];

  let data = langData[key] || fallbackData[key];

  return data;
}

export function setInitials() {
  setTexts();
  setPlaceholders();

  function setTexts() {
    let setText = (elem, langKey) => (elem.textContent = LANG(langKey));

    setElemsLang("span", setText);
  }

  function setPlaceholders() {
    let setPlaceholder = (elem, langKey) => (elem.placeholder = LANG(langKey));

    setElemsLang("input", setPlaceholder);
  }

  function setElemsLang(elemsTag, setFunc) {
    let elems = document.querySelectorAll(elemsTag);
    let elemsArr = Array.from(elems);

    elemsArr.forEach((elem) => {
      let langKey = elem.dataset.lang;
      if (langKey) setFunc(elem, langKey);
    });
  }
}
