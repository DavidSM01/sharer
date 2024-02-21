import * as util from '../util/util.js';
import languages from './langs.js';


export let LANG = getLanguageData;


export function setInitials() {

  setTexts();
  setPlaceholders();


  function setTexts() {

    let setText = (elem, langKey) => util.doc.setInnerHTML(LANG(langKey), elem);

    setElemsLang('span', setText);

  }


  function setPlaceholders() {

    let setPlaceholder = (elem, langKey) => util.doc.setElemAttr(LANG(langKey), elem, 'placeholder');

    setElemsLang('input', setPlaceholder);

  }



  function setElemsLang(elemsTag, setFunc) {

    let elems = util.doc.getByTag(elemsTag);
    let elemsArr = util.arrFrom(elems);

    elemsArr.forEach((elem) => {
      let langKey = util.doc.getAttrVal(elem, 'lg');
      if (langKey) setFunc(elem, langKey);

    });
  }

}


function getLanguageData(key) {

  let browserLang = window.navigator && window.navigator.language;

  let lang = (browserLang || 'en-US').slice(0, 2).toLowerCase();

  let langData = languages[lang];
  let fallbackData = languages['en'];

  let data = langData[key] || fallbackData[key];

  return data;

}
