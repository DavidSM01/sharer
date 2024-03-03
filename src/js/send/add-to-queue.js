import * as util from '../util/util.js';
import * as selfData from '../self.js';


export default function addToQueue(files, partSize, compression, confirmRequired, note) {

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