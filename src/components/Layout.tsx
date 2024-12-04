import React, { ReactNode } from "react";
import Header from "./ui/Header";
import PageTransition from "./ui/PageTransition";
import StairEffect from "./ui/StairEffect";

// Định nghĩa props type cho Layout
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <StairEffect />
      <PageTransition>
        <Header />
        {children}
      </PageTransition>
    </div>
  );
};

export default Layout;
