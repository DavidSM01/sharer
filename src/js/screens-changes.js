import * as util from './util/util.js';


let sendDiv = util.doc.getById('sendFiles_div');
let mainDiv = util.doc.getById('main_div');

export let toggleSendScreen = () => util.doc.toggleClasses(['hidden'], [sendDiv, mainDiv]);

export default function () {

  let sendFilesBtn = util.doc.getById('sendFiles_btn');
  let closeSendFilesBtn = util.doc.getById('closeSendFiles_btn');

  util.doc.addListener(sendFilesBtn, 'click', toggleSendScreen);
  util.doc.addListener(closeSendFilesBtn, 'click', toggleSendScreen);

}