import { LANG } from "../language/lang.js";

let sizeInput = document.getElementById("size_input");
let unitSelect = document.getElementById("unit_select");

let fileInput = document.getElementById("file_input");

let addWarning = (elem) => elem.classList.add("warning");
let removeWarning = (elem) => elem.classList.remove("warning");

export function checkValidPartSize() {
  let partSizeDiv = document.getElementById("partSize_div");
  let partSize = sizeInput.value * unitSelect.value;
  let validPartSize = partSize >= 1024 * 40;
  if (validPartSize) {
    removeWarning(partSizeDiv);
    return partSize;
  } else addWarning(partSizeDiv);
}

export function checkIfSelectedFiles() {
  let selectFilesDiv = document.getElementById("selectFiles_div");
  let files = fileInput.files;
  let amount = files.length;
  if (amount > 0) {
    removeWarning(selectFilesDiv);
    return files;
  } else addWarning(selectFilesDiv);
}

export let compressCheckbox = document.getElementById("compress_checkbox");
export let confirmCheckbox = document.getElementById("confirm_checkbox");

export default function () {
  setSavedSettings();
  setSettingsSavers();
  setFilesSelector();

  function setSettingsSavers() {
    let saveElemAttr = (elem, attr = "value") =>
      localStorage.setItem(elem.id, elem[attr]);

    compressCheckbox.addEventListener("click", function () {
      saveElemAttr(this, "checked");
    });

    confirmCheckbox.addEventListener("click", function () {
      saveElemAttr(this, "checked");
    });

    sizeInput.addEventListener("input", function () {
      saveElemAttr(this);
      checkValidPartSize();
    });

    unitSelect.addEventListener("change", function () {
      saveElemAttr(this);
      checkValidPartSize();
    });
  }

  function setSavedSettings() {
    let compression = localStorage.getItem("compress_checkbox");
    let confirmRequired = localStorage.getItem("confirm_checkbox");
    let size = localStorage.getItem("size_input");
    let unit = localStorage.getItem("unit_select");

    if (compression == "false") compressCheckbox.checked = false;
    if (confirmRequired == "true") confirmCheckbox.checked = true;
    if (size) sizeInput.value = size;
    if (unit) unitSelect.value = unit;
  }

  function setFilesSelector() {
    let selectFilesBtn = document.getElementById("selectFiles_btn");

    selectFilesBtn.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", () => {
      let files = checkIfSelectedFiles();
      if (files) {
        let amount = files.length;

        let holder = document.getElementById("filesInfo_span");

        let setText = (text) => (holder.textContent = text);

        if (amount == 1) setText(files[0].name);
        if (amount > 1) setText(`${amount} ${LANG("FILES")}`);
      }
    });
  }
}
