import * as util from '../util/util.js';
import { LANG } from '../language/lang.js';


let sizeInput = () => util.doc.getById('size_input');
let unitSelect = () => util.doc.getById('unit_select');


let fileInput = () => util.doc.getById('file_input');


let addWarning = elem => util.doc.addClass('warning', elem);
let removeWarning = elem => util.doc.removeClass('warning', elem);


export function checkValidPartSize() {
  let partSizeDiv = util.doc.getById('partSize_div');
  let partSize = sizeInput().value * unitSelect().value;
  let validPartSize = partSize >= (1024 * 40);
  if (validPartSize) {
    removeWarning(partSizeDiv);
    return partSize;
  } else addWarning(partSizeDiv);
}


export function checkIfSelectedFiles() {
  let selectFilesDiv = util.doc.getById('selectFiles_div');
  let files = fileInput().files;
  let amount = files.length;
  if (amount > 0) {
    removeWarning(selectFilesDiv);
    return files;
  } else addWarning(selectFilesDiv);
}


export let compressCheckbox = () => util.doc.getById('compress_checkbox');
export let confirmCheckbox = () => util.doc.getById('confirm_checkbox');


export default function () {


  setSavedSettings();
  setSettingsSavers();
  setFilesSelector();


  function setSettingsSavers() {

    let saveElemAttr = (elem, attr = 'value') => util.LSsetItem(elem.id, elem[attr]);

    util.doc.addListener(compressCheckbox(), 'click', function () {
      saveElemAttr(this, 'checked');
    });

    util.doc.addListener(confirmCheckbox(), 'click', function () {
      saveElemAttr(this, 'checked');
    });

    util.doc.addListener(sizeInput(), 'input', function () {
      saveElemAttr(this);
      checkValidPartSize();
    });

    util.doc.addListener(unitSelect(), 'change', function () {
      saveElemAttr(this);
      checkValidPartSize();
    });

  }


  function setSavedSettings() {

    let compression = util.LSgetItem('compress_checkbox');
    let confirmRequired = util.LSgetItem('confirm_checkbox');
    let size = util.LSgetItem('size_input');
    let unit = util.LSgetItem('unit_select');

    if (compression == 'false') compressCheckbox().checked = false;
    if (confirmRequired == 'true') confirmCheckbox().checked = true;
    if (size) sizeInput().value = size;
    if (unit) unitSelect().value = unit;

  }



  function setFilesSelector() {

    let selectFilesBtn = util.doc.getById('selectFiles_btn');

    util.doc.addListener(selectFilesBtn, 'click', () => fileInput().click());

    util.doc.addListener(fileInput(), 'change', () => {

      let files = checkIfSelectedFiles();
      if (files) {
        let amount = files.length;

        let holder = util.doc.getById('filesInfo_span');

        let setText = text => util.doc.setTextContent(text, holder);

        if (amount == 1) setText(files[0].name);
        if (amount > 1) setText(`${amount} ${LANG('FILES')}`);

      }

    });
  }


}
