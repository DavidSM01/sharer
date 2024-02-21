import * as util from '../util/util.js';
import { LANG } from '../language/lang.js';


export default function () {

  setSavedSettings();
  setSettingsSavers();
  setFilesSelector();

  function setSettingsSavers() {

    let saveElemAttr = (elem, attr = 'value') => util.LSsetItem(elem.id, elem[attr]);

    compress_checkbox.onchange = function () {
      saveElemAttr(this, 'checked');
    }

    confirm_checkbox.onchange = function () {
      saveElemAttr(this, 'checked');
    }

    size_input.oninput = function () {
      saveElemAttr(this);
    }

    unit_select.onchange = function () {
      saveElemAttr(this);
    }


  }


  function setSavedSettings() {

    let compression = util.LSgetItem('compress_checkbox');
    let confirmRequired = util.LSgetItem('confirm_checkbox');
    let size = util.LSgetItem('size_input');
    let unit = util.LSgetItem('unit_select');

    if (confirmRequired == 'true') util.doc.setElemAttr(true, confirm_checkbox, 'checked');
    if (compression == 'false') util.doc.setElemAttr(false, compress_checkbox, 'checked')
    if (size) util.doc.setElemAttr(size, size_input);
    if (unit) util.doc.setElemAttr(unit, unit_select);

  }



  function setFilesSelector() {

    selectFiles_btn.onclick = () => file_input.click();

    file_input.onchange = function () {

      let files = this.files;
      let amount = files.length;

      let setText = html => util.doc.setInnerHTML(html, filesInfo_span);

      if (amount == 1) setText(files[0].name);
      if (amount > 1) setText(`${amount} ${LANG('FILES')}`);

    }
  }


}
