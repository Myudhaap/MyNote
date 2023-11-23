import React from "react";
import { createRoot } from "react-dom/client";
import Catatan from "./Catatan";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Catatan />
  </React.StrictMode>
);
