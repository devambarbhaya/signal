"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useSidebarWidth } from "@/hooks/use-sidebar-width";

type SharedLayoutProps = {
  children: ReactNode;
  SidebarComponent: FC<any>;
  SidebarProps?: any;
};

const SharedLayout: FC<SharedLayoutProps> = ({
  children,
  SidebarComponent,
  SidebarProps,
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const { sidebarWidth, setSidebarWidth } = useSidebarWidth();

  useEffect(() => {
    setIsRendered(true);
  }, []);
  if (!isRendered) return null;

  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          onResize={(width) => setSidebarWidth(width)}
          defaultSize={sidebarWidth}
          maxSize={30}
          minSize={20}
        >
          <SidebarComponent {...SidebarProps} />
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="border-r border-r-gray-400 dark:border-r-gray-800"
        />
        <ResizablePanel className="!overflow-y-auto my-20">
          <div className="h-full hidden md:block">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="md:hidden">{children}</div>
    </>
  );
};

export default SharedLayout;
