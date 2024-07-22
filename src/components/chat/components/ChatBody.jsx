import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Avatar, Input, MessageBox, MessageList } from "react-chat-elements";

const ChatRow = ({ onChange, chatRef, showButton }) => {
  console.log(showButton);
  return (
    <div>
      {<ChatHeader />}

      <div
        className="tw-fixed tw-overflow-auto tw-w-full "
        style={{ top: "60px", bottom: "55px" }}
      >
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
        <MessageBox
          position="left"
          title="Burhan"
          type="text"
          text="Hi there !"
          date={new Date()}
          replyButton={true}
        />

        <MessageBox
          position="right"
          title="Emre"
          type="meetingLink"
          text="Click to join the meeting"
          date={new Date()}
        />
      </div>
      <div
        className="tw-absolute tw-bottom-0 tw-w-full tw-px-2 tw-pb-2 "
        // style={{ padding: "inherit" }}
      >
        <Input
          referance={chatRef}
          placeholder="Type here..."
          className="tw-w-full"
          multiline={true}
          onChange={onChange}
          rightButtons={showButton && <SendBtn />}
          inputStyle={{
            backgroundColor: "#f8f5f5",
          }}
        />
      </div>
    </div>
  );
};

const ChatHeader = () => {
  return (
    <div className="tw-absolute tw-top-0 tw-w-full tw-h tw-bg-[#f8f5f5] tw-p-1">
      <Avatar
        src="https://avatars.githubusercontent.com/u/80540635?v=4"
        alt="avatar"
        size="large"
        type="circle"
      />
    </div>
  );
};

const NoChat = () => {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-h-full">
      <img
        className="tw-h-full "
        src="/img/chat/undraw_Begin_chat_re_v0lw.png"
        alt="chat empty"
      />
    </div>
  );
};

const SendBtn = () => {
  return (
    <button className="tw-bg-[#007AFF] tw-py-1.5 tw-px-4 tw-rounded-lg tw-text-white">
      send
    </button>
  );
};

export const ChatBody = ({ conversation }) => {
  const [message, setMessage] = useState("");
  const [showButton, setShowButton] = useState(false);
  const chat = useRef();

  const handOnChange = (text) => {
    setMessage(chat.current.value);

    //   setShowButton(true);
    // }
    // console.log(chat.current.value);
  };

  useEffect(() => {
    if (message.length > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [message]);

  console.log(showButton);

  return (
    <div className="tw-relative tw-h-full tw-py-4  tw-overflow-auto tw-bg-white tw-left-1/2 tw-transform tw--translate-x-1/2">
      {!conversation ? (
        <NoChat />
      ) : (
        <ChatRow
          chatRef={chat}
          onChange={handOnChange}
          showButton={showButton}
        />
      )}
    </div>
  );
};
