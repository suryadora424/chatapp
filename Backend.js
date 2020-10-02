import firebase from "firebase";

class Backend {
  uid = "";
  messageRef = null;
  constructor() {
    firebase.initalizeApp({
      apiKey: "AIzaSyAiuvZgc9iLMezprc5zYLBw9PsrgRkXjrE",
      authDomain: "meetupchat-dbce1.firebaseapp.com",
      databaseURL: "https://meetupchat-dbce1,firebaseio.com",
      storageBacket: "meetupchat-dbce1.appspot.com",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            alert(error.massage);
          });
      }
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
  //retrive the messages from the Backend
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref("messages");
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createAt: new Date(message.createAt),
        user: {
          _id: message.User._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on("child_added", onReceive);
  }
  //send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new Backend();
