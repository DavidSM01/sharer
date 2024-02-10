import * as util from './util/util.js';


export default function () {

  sendFiles_btn.onclick = () => toggleSendFilesScreen();
  closeSendFiles_btn.onclick = () => toggleSendFilesScreen();

  function toggleSendFilesScreen() {
    util.toggleClasses(['hidden'], [sendFiles_div, main_div]);
  }

}