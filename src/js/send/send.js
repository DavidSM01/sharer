import setSendSettings from "./settings.js";
import { checkValidPartSize, checkIfSelectedFiles } from "./settings.js";
import { toggleSendScreen } from "../screens-changes.js";
import addToQueue from "./add-to-queue.js";

export default function () {
  setSendSettings();

  let sendBtn = document.getElementById("send_btn");
  sendBtn.addEventListener("click", () => {
    let partSize = checkValidPartSize();
    let files = checkIfSelectedFiles();
    if (partSize && files) {
      let compression = document.getElementById("compress_checkbox").checked;
      let confirmRequired = document.getElementById("confirm_checkbox").checked;
      let note = document.getElementById("note_input").value;

      toggleSendScreen();
      addToQueue(files, partSize, compression, confirmRequired, note);
    }
  });
}

