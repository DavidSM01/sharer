import * as util from '../util/util.js';
import setSendSettings from './settings.js';
import addToQueue from './add-to-queue.js';

export default function () {

  setSendSettings();

  let sendBtn = util.doc.getById('send_btn');
  sendBtn.onclick = () => addToQueue();

}