import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { ResizableSidebar } from "@/components/common/resizableSidePanel";
import { ChatList } from "react-chat-elements";
import { Chat } from "@/components/chat/main";

const metadata = {
  title: "User Messages",
  description: "User message center",
};

const data = [
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to".charAt(10),
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to".charAt(10),
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
    alt: "kursat_avatar",
    title: "Kursat",
    subtitle: "Why don't we go to",
    date: new Date(),
    unread: 3,
  },
];

export default function UserMessages() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div>
        <Chat data={data} />
      </div>
      {/* End .col-12 */}
    </>
  );
}
