import * as util from '../util/util.js';
import { LANG } from '../language/lang.js';


export default function () {

  let compressCheckbox = util.doc.getById('compress_checkbox');
  let confirmCheckbox = util.doc.getById('confirm_checkbox');
  let sizeInput = util.doc.getById('size_input');
  let unitSelect = util.doc.getById('unit_select');

  setSettingsSavers();
  setSavedSettings();
  setFilesSelector();

  function setSettingsSavers() {

    let saveElemAttr = (elem, attr = 'value') => util.LSsetItem(elem.id, elem[attr]);

    util.doc.addListener(compressCheckbox, 'click', function () {
      saveElemAttr(this, 'checked');
    });

    util.doc.addListener(confirmCheckbox, 'click', function () {
      saveElemAttr(this, 'checked');
    });

    util.doc.addListener(sizeInput, 'input', function () {
      saveElemAttr(this);
    });

    util.doc.addListener(unitSelect, 'change', function () {
      saveElemAttr(this);
    });

  }


  function setSavedSettings() {

    let compression = util.LSgetItem('compress_checkbox');
    let confirmRequired = util.LSgetItem('confirm_checkbox');
    let size = util.LSgetItem('size_input');
    let unit = util.LSgetItem('unit_select');

    if (compression == 'false') compressCheckbox.checked = false;
    if (confirmRequired == 'true') confirmCheckbox.checked = true;
    if (size) sizeInput.value = size;
    if (unit) unitSelect.value = unit;

  }



  function setFilesSelector() {

    let selectFilesBtn = util.doc.getById('selectFiles_btn');
    let fileInput = util.doc.getById('file_input');


    selectFilesBtn.onclick = () => fileInput.click();

    fileInput.onchange = function () {

      let files = this.files;
      let amount = files.length;

      let holder = util.doc.getById('filesInfo_span');

      let setText = text => util.doc.setTextContent(text, holder);

      if (amount == 1) setText(files[0].name);
      if (amount > 1) setText(`${amount} ${LANG('FILES')}`);

    }
  }


}
