import * as util from '../util/util.js';


export default function addToQueue() {

  let checkedData = checkMandatories();
  if (checkedData) processFiles(...checkedData);

}


function checkMandatories() {

  let compression = compress_checkbox.checked;
  let note = note_input.value;

  let partSize = size_input.value * unit_select.value;

  let files = file_input.files;
  let amount = files.length;


  let highlight = (elem) => util.addClass('warning', elem);


  let validPartSize = partSize >= 40960 || highlight(partSize_div);
  if (validPartSize) util.removeClass('warning', partSize_div);


  let filesSelected = amount > 0 || highlight(selectFiles_div);
  if (filesSelected) util.removeClass('warning', selectFiles_div);


  if (validPartSize && filesSelected) return [files, partSize, compression, note];

}


function processFiles(files, partSize, compression, note) {

}