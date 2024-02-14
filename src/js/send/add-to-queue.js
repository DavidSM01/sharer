import * as util from '../util/util.js';


export default function addToQueue() {

  let checkedData = checkMandatories();
  if (checkedData) processFiles(...checkedData);

}


function checkMandatories() {

  let compression = compress_checkbox.checked;
  let confirmRequired = confirm_checkbox.checked;
  let note = note_input.value;

  let partSize = size_input.value * unit_select.value;

  let files = file_input.files;
  let amount = files.length;


  let highlight = elem => util.addClass('warning', elem);


  let validPartSize = partSize >= 40960 || highlight(partSize_div);
  if (validPartSize) util.removeClass('warning', partSize_div);


  let filesSelected = amount > 0 || highlight(selectFiles_div);
  if (filesSelected) util.removeClass('warning', selectFiles_div);


  if (validPartSize && filesSelected) return [files, partSize, compression, confirmRequired, note];

}


function processFiles(files, partSize, compression, confirmRequired, note) {
  
  let filesInfo = {
    partSize: partSize,
    note: note,
  }
  
  let filesArr = util.arrFrom(files);
  
  let updates = filesArr.map((file, index) => processFile(file, index, partSize, compression, confirmRequired));

}



function processFile(file, index, partSize, compression, confirmRequired) {
  
  let name = file.name;
  let size = file.size;
  let type = file.type;
  
  let time = util.time();
  let randomNumber = util.random();
  
  let id = time + index + randomNumber;
  
  let info = {
    id: id,
    name: name,
    size: size,
    type: type,
    time: time,
  }
  
  
  //let base64 = zipFile(file);
  
  
  return [info];
}
