import * as util from '../util/util.js';
import languages from './langs.js';


export let LANG = getLanguageData();


export function setInitials() {

  setElemsText();
  setPlaceholders();

  function setElemsText() {

    let setText = (elem, languageKey) => util.setTextContent(LANG[languageKey], elem);

    setLg("span", setText);

  }

  function setPlaceholders() {

    let setPlaceholder = (elem, languageKey) => util.setElemAttr(LANG[languageKey], elem, "placeholder");

    setLg("input", setPlaceholder);

  }


  function setLg(elemsTag, setFunc) {

    let elems = util.getByTag(elemsTag);
    let elemsArr = util.arrFrom(elems);

    elemsArr.forEach((elem) => {
      let lgKey = util.getAttrVal(elem, "lg");
      if (lgKey) setFunc(elem, lgKey);
    });
  }

}


function getLanguageData() {

  let browserLanguage = window.navigator.language || 'en-US';
  browserLanguage = browserLanguage.slice(0, 2).toLowerCase();

  let languageData = languages[browserLanguage] || languages["en"];

  return languageData;

}


