import * as util from './util/util.js';


let sendDiv = util.doc.query('#sendFiles_div');
let mainDiv = util.doc.query('#main_div');

export let toggleSendScreen = () => util.doc.toggleClasses(['hidden'], [sendDiv, mainDiv]);

export default function () {

  let sendFiles = util.doc.query('#sendFiles_btn');
  let closeSendFiles = util.doc.query('#closeSendFiles_btn');

  sendFiles.onclick = () => toggleSendScreen();
  closeSendFiles.onclick = () => toggleSendScreen();

}