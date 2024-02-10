import * as util from '../util/util.js';
import languages from './langs.js';


export let LANG = getLanguageData();


export function setInitials() {

  setTexts();
  setPlaceholders();

  function setTexts() {

    let setText = (elem, languageKey) => util.setInnerHTML(LANG[languageKey], elem);

    setElemsLang("span", setText);

  }


  function setPlaceholders() {

    let setPlaceholder = (elem, languageKey) => util.setElemAttr(LANG[languageKey], elem, "placeholder");

    setElemsLang("input", setPlaceholder);

  }


  function setElemsLang(elemsTag, setFunc) {

    let elems = util.getByTag(elemsTag);
    let elemsArr = util.arrFrom(elems);

    elemsArr.forEach((elem) => {
      let lgKey = util.getAttrVal(elem, "lg");
      if (lgKey) setFunc(elem, lgKey);
    });
  }

}


function getLanguageData() {

  let browserLanguage = window.navigator.language;

  let language = browserLanguage || "en-US";
  language = language.slice(0, 2).toLowerCase();


  let languageData = languages[language] || languages["en"];

  return languageData;

}


