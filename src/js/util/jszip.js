import JSZip from 'jszip';


export let newZipObj = () => new JSZip();


export function setData(zipObj, path, data, options = {}) {

  zipObj.file(path, data, options);

  return zipObj;
}


export async function createZip(zipObj, onChunkFunc, options = {}) {

  let zip = await zipObj.generateAsync(options, onChunkFunc);

  return zip;
} 
