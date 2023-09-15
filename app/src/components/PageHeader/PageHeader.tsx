import React from "react";
import "./PageHeader.css";
// import Logo from "../Logo";

interface PageHeaderProps extends React.PropsWithChildren {}

const PageHeader = (props: PageHeaderProps) => {
  return (
    //  {/* Total height == 104px == 54px == 3.375rem */}
    <header className="page-header">
      <div className="container">
        {/* 287x42 == 143.5x21 ==  1.3125rem */}
        {/* margin-bottom = 33 = 16.5 */}
        {/* margin-top = 29 = 14.5 = 1.8125 */}

        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
