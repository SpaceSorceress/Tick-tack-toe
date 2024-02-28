import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* This is a part of React training course from official website that I followed and recreated.
This is a tic-tac-toe game that:
Lets you play tic-tac-toe,
Indicates when a player has won the game,
Stores a game’s history as a game progresses,
Allows players to review a game’s history and see previous versions of a game’s board. */