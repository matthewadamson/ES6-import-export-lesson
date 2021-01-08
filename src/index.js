import React from "react";
import ReactDOM from "react-dom";

import pi, { doublePi, triplePi } from "./math.js";
// or the "wildcard" import:
// import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

// and
// ReactDOM.render(
//   <ul>
//     <li>{pi.default}</li>
//     <li>{pi.doublePi()}</li>
//     <li>{pi.triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );