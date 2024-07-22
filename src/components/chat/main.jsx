import React from "react";
import { ResizableSidebar } from "../common/resizableSidePanel";
import { ChatList } from "react-chat-elements";
import { ChatBody } from "./components/ChatBody";
import { useState } from "react";

export const Chat = ({ data }) => {
  const [conversation, setConversation] = useState();

  const handleClick = (chat) => {
    console.log(chat);
    setConversation(chat);
  };
  return (
    <div className="tw-bg-gray-100 tw-h-[calc(100vh-265px)] tw-flex tw-flex-col">
      <div className=" tw-h-full">
        <ResizableSidebar
          sideBar={
            <ChatList
              onClick={handleClick}
              className="chat-list"
              dataSource={data}
            />
          }
          content={<ChatBody conversation={conversation} />}
        />
      </div>
    </div>
  );
};
