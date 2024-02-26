import * as util from './util/util.js';


let sendDiv = util.doc.getById('sendFiles_div');
let mainDiv = util.doc.getById('main_div');

export let toggleSendScreen = () => util.doc.toggleClasses(['hidden'], [sendDiv, mainDiv]);

export default function () {

  sendFiles_btn.onclick = () => toggleSendScreen();
  closeSendFiles_btn.onclick = () => toggleSendScreen();

}