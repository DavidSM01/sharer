import * as util from "./util/util.js";

let xdcAddr = util.xdc.selfAddr;
let xdcName = util.xdc.selfName;

function getName(name, addr) {
  if (name == addr) name = "Anonymous";
  return name;
}

function getId(name) {
  let id = localStorage.getItem("self-id");

  if (!id) {
    id = `${name}/${Date.now()}`;
    localStorage.setItem("self-id", id);
  }

  return id;
}

export let name = getName(xdcName, xdcAddr);
export let id = getId(name);
export let color = util.toColor(xdcAddr);
