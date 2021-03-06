import firebase from "@firebase/app";
import "@firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAoz-kwFMzG9P1Aor4UEavpzo_UuIQhqu0",
  authDomain: "base-3497f.firebaseapp.com",
  projectId: "base-3497f"
});

const hui = "hui";
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

export function addTodo(collection, id, data) {
  return db.collection(hui).doc(id).set(data);
}

export function getTodos(collection) {
  return db.collection(hui).get();
}

export function updateTodo(collection, id, data) {
  return db.collection(hui).doc(id).update(data);
}

export function deleteTodo(collection, id) {
  return db.collection(hui).doc(id).delete();
}
