import getRGB from "consistent-color-generation";

export let toColor = string => getRGB(string).toString();