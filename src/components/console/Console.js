import { Terminal } from "@xterm/xterm";
import { useEffect } from "react";

const Console = () => {
  useEffect(() => {
    const term = new Terminal();
    term.open(document.getElementById("xterm-container"));
    term.write("I'm self-conscious.");
  }, []);
  return <div id="xterm-container"></div>;
};

export default Console;
