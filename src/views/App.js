import React from "react";
import hypereact from "../services/hypereact";
import Dashboard from "./Dashboard";
import Login from "./Login";

export function render({ accessToken }) {
  // if (accessToken !== "hui") return <Login />;
  // // if (accessToken) {
  return <Dashboard />;
  // }
}

export default hypereact({
  state: ({ accessToken }) => ({ accessToken }),
  render
});
