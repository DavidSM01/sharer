import * as util from '../util/util.js';
import { LANG } from '../language/lang.js';


export default function () {

  let compressCheckbox = () => util.doc.getById('compress_checkbox');
  let confirmCheckbox = () => util.doc.getById('confirm_checkbox');
  let sizeInput = () => util.doc.getById('size_input');
  let unitSelect = () => util.doc.getById('unit_select');


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


    let checkValidPartSize = () => {
      let partSizeDiv = util.doc.getById('partSize_div');
      let validPartSize = () => (sizeInput().value * unitSelect().value) > (1024 * 40);
      if (validPartSize()) util.doc.removeClass('warning', partSizeDiv);
      else util.doc.addClass('warning', partSizeDiv);
    }

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
    let fileInput = util.doc.getById('file_input');

    util.doc.addListener(selectFilesBtn, 'click', () => fileInput.click());

    util.doc.addListener(fileInput, 'change', () => {

      let files = fileInput.files;
      let amount = files.length;

      let selectFilesDiv = util.doc.getById('selectFiles_div');
      if (amount > 0) util.doc.removeClass('warning', selectFilesDiv);
      else util.doc.addClass('warning', selectFilesDiv);

      let holder = util.doc.getById('filesInfo_span');

      let setText = text => util.doc.setTextContent(text, holder);

      if (amount == 1) setText(files[0].name);
      if (amount > 1) setText(`${amount} ${LANG('FILES')}`);

    });
  }


}
