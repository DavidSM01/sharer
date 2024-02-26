import * as util from './util/util.js'


let xdcAddr = util.xdc.selfAddr;
let xdcName = util.xdc.selfName;


function getName(name, addr) {

  if (name == addr) name = "Anonymous";

  return name;
}


function getId(name) {

  let id = util.LSgetItem("selfId");

  if (!id) {
    id = `${name}/${util.time()}`;
    util.LSsetItem("selfId", id);
  }

  return id;
}


export let name = getName(xdcName, xdcAddr);
export let color = util.toColor(xdcAddr);
export let id = getId(name);