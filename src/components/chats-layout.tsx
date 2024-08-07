"use client";

import { FC, ReactNode } from "react";
import SharedLayout from "./shared-layout";
import { ChatsSidebar } from "./chats-sidebar";

type ChatsLayoutProps = {
  children: ReactNode;
};

export const ChatsLayout: FC<ChatsLayoutProps> = ({ children }) => {
  return (
    <SharedLayout SidebarComponent={() => <ChatsSidebar />}>
      {children}
    </SharedLayout>
  );
};
