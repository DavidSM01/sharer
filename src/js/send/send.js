import setSendSettings from './settings.js';
import addToQueue from './add-to-queue.js';

export default function () {

  setSendSettings();

  send_btn.onclick = () => addToQueue();

}