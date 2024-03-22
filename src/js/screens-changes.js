import * as util from "./util/util.js";

let sendDiv = document.getElementById("sendFiles_div");
let mainDiv = document.getElementById("main_div");

export let toggleSendScreen = () =>
  util.doc.toggleClasses(["hidden"], [sendDiv, mainDiv]);

export default function () {
  let sendFilesBtn = document.getElementById("sendFiles_btn");
  let closeSendFilesBtn = document.getElementById("closeSendFiles_btn");

  sendFilesBtn.addEventListener("click", toggleSendScreen);
  closeSendFilesBtn.addEventListener("click", toggleSendScreen);
}
