import { PropsWithChildren } from "react";
import { Breadcrumb } from "../breadcrumb";
import { Menu } from "../menu";
import { ToolBar } from "../toolBar";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      <ToolBar />
      <Menu />
      <div className="p-4 bg-zinc-100 h-svh">
        <Breadcrumb />
        <div>{children}</div>
      </div>
    </div>
  );
};
