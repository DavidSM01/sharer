import * as util from './util/util.js';


let sendDiv = util.doc.getById('sendFiles_div');
let mainDiv = util.doc.getById('main_div');

export let toggleSendScreen = () => util.doc.toggleClasses(['hidden'], [sendDiv, mainDiv]);

export default function () {

  let sendFiles = util.doc.getById('sendFiles_btn');
  let closeSendFiles = util.doc.getById('closeSendFiles_btn');

  sendFiles.onclick = () => toggleSendScreen();
  closeSendFiles.onclick = () => toggleSendScreen();

}