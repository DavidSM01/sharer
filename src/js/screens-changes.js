import * as util from './util/util.js';


export default function () {

  showReceive_btn.onclick = function () {
    switchSendReceive(this);
  }

  showSend_btn.onclick = function () {
    switchSendReceive(this);
  }

  function switchSendReceive(buttonElem) {
    let btnNoActive = util.containClass('no-active', buttonElem);
    if (btnNoActive) {
      util.toggleClasses(['hidden'], [send_div, receive_div]);
      util.toggleClasses(['active', 'no-active'], [showSend_btn, showReceive_btn]);
    }
  }



  sendFiles_btn.onclick = () => toggleSendFilesScreen();
  closeSendFiles_btn.onclick = () => toggleSendFilesScreen();

  function toggleSendFilesScreen() {
    util.toggleClasses(['hidden'], [sendFiles_div, main_div]);
  }

}