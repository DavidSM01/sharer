import * as util from './util/util.js';


export default function () {
  
  let toggleSendFilesScreen = () => util.doc.toggleClasses(['hidden'], [sendFiles_div, main_div]);


  sendFiles_btn.onclick = () => toggleSendFilesScreen();
  closeSendFiles_btn.onclick = () => toggleSendFilesScreen();

}
