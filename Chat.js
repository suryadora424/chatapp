import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Backend from "../Backend";

class Chat extends React.component {
  state = {
    messages: [],
  };
  componentWillMount() {}
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {}}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
Chat.defaultProps = {
  name: "surya",
};
Chat.PropTypes = {
  name: React.PropTypes.string,
};

export default Chat;
