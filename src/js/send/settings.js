import * as util from '../util/util.js';


export default function () {

  setSavedSettings();
  setSettingsSavers();
  setFilesSelector();

  function setSettingsSavers() {

    let saveElemAttr = (elem, attr = "value") => util.LSsetItem(elem.id, elem[attr]);

    compress_checkbox.onchange = function () {
      saveElemAttr(this, "checked");
    }

    size_input.oninput = function () {
      saveElemAttr(this);
    }

    unit_select.onchange = function () {
      saveElemAttr(this);
    }

  }


  function setSavedSettings() {

    let compression = util.LSgetItem("compress_checkbox");
    let size = util.LSgetItem("size_input");
    let unit = util.LSgetItem("unit_select");

    if (compression == "false") util.setElemAttr(false, compress_checkbox, "checked")
    if (size) util.setElemAttr(size, size_input);
    if (unit) util.setElemAttr(unit, unit_select);

  }



  function setFilesSelector() {

    selectFiles_btn.onclick = () => file_input.click();

    file_input.onchange = function () {

      let files = this.files;
      let amount = files.length;

      let innerHtml = (html) => util.setInnerHtml(filesInfo_span, html);

      if (amount == 1) innerHtml(files[0].name);
      if (amount > 1) innerHtml(`${amount} files`);

    }
  }

}