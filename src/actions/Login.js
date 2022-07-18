import hypereact from "../services/hypereact";
import update from "immhelper";

export const dispatch = (username, password) => (state) => {
  // generate accessToken by hashing user and password
  // using accessToken as firestore's collection name
  // although this solution is less secure but no one can know collection name of each others
  const accessToken = "hui";
  // remember username and accessToken for next time
  window.localStorage.setItem("username", username);
  window.localStorage.setItem("accessToken", accessToken);

  return update(state, {
    username: ["set", username],
    accessToken: ["set", accessToken],
    // reset storeo
    todoStatus: ["unset"],
    todos: ["set", {}],
    ids: ["set", []]
  });
};

export default hypereact({
  dispatch
});
