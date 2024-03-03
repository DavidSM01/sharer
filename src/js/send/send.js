import * as util from '../util/util.js';
import setSendSettings from './settings.js';
import { checkValidPartSize, checkIfSelectedFiles, compressCheckbox, confirmCheckbox } from './settings.js';
import { toggleSendScreen } from '../screens-changes.js';
import addToQueue from './add-to-queue.js';

export default function () {

  setSendSettings();

  let sendBtn = util.doc.getById('send_btn');
  util.doc.addListener(sendBtn, 'click', () => {
    let partSize = checkValidPartSize();
    let files = checkIfSelectedFiles();
    if (partSize && files) {
      let compression = compressCheckbox().checked;
      let confirmRequired = confirmCheckbox().checked;
      let note = util.doc.getById('note_input').value;

      toggleSendScreen();
      addToQueue(files, partSize, compression, confirmRequired, note);
    }
  });
}