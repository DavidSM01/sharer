import * as util from '../util/util.js';
import * as selfData from '../self.js';
import { toggleSendScreen } from '../screens-changes.js';

export default function addToQueue() {

  let checkedData = checkMandatories();
  if (checkedData) {

    toggleSendScreen();
    let updates = getUpdates(...checkedData);

  }

}


function checkMandatories() {

  let highlight = elem => util.doc.addClass('warning', elem);

  let sizeValue = util.doc.getById('size_input').value;
  let sizeUnit = util.doc.getById('unit_select').value;
  let partSize = sizeValue * sizeUnit;

  let partSizeDiv = util.doc.getById('partSize_div');
  let validPartSize = partSize >= (1024 * 40) || highlight(partSizeDiv);


  let files = util.doc.getById('file_input').files;
  let amount = files.length;

  let selectFilesDiv = util.doc.getById('selectFiles_div');
  let filesSelected = amount > 0 || highlight(selectFilesDiv);


  if (validPartSize && filesSelected) {
    let compression = util.
      doc.getById('compress_checkbox').checked;
    let confirmRequired = util.doc.getById('confirm_checkbox').checked;
    let note = util.doc.getById('note_input').value;

    return [files, partSize, compression, confirmRequired, note];
  }

}


function getUpdates(files, partSize, compression, confirmRequired, note) {

  let filesArr = util.arrFrom(files);
  let filesInfo = filesArr.map((file, index) => getFileInfo(file));

  let info = {
    self: {
      id: selfData.id,
      name: selfData.name,
      color: selfData.color,
    },
    files: {
      infos: filesInfo,
      partSize: partSize,
      note: note,
      compression: compression,
      confirm: confirmRequired,
    },
    time: util.time(),
  }


}



function getFileInfo(file) {

  let name = file.name;
  let size = file.size;
  let type = file.type;

  let info = {
    name: name,
    size: size,
    type: type,
  };

  return info;

}


/*
async function zipFile(file, compression, onChunkFunc) {
  let zipObj = util.jszip.newZipObj();
  util.jszip.setData(zipObj, file.name, file);

  let options = {
    type: "base64",
    streamFiles: true,
  };

  if (compression) {
    options.compression = "DEFLATE";
    options.compressionOptions = {
      level: 9
    }
  }


  let zip = await util.jszip.createZip(zipObj, onChunkFunc, options);

  return zip;
}
*/