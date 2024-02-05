import * as util from './util.js';


showReceive_btn.onclick = function () {
  switch_sendReceive(this);
}

showSend_btn.onclick = function () {
  switch_sendReceive(this);
}


function switch_sendReceive(buttonElem) {
  if (util.containClass('no-active', buttonElem)) {
    util.toggleClasses(['hidden'], [send_div, receive_div]);
    util.toggleClasses(['active', 'no-active'], [showSend_btn, showReceive_btn]);
  }
}