import JSZip from 'jszip';


export let newZipObj = () => new JSZip();


export function setData(zipObj, path, data, options = {}) {

  zipObj.file(path, data, options);

  return zipObj;
}


export function createZip(zipObj, onChunkFunc, options = {}) {

  let zip = zipObj.generateAsync(options, onChunkFunc);

  return zip;
} 
