import React from "react";
import "./PageHeader.css";

interface PageHeaderProps extends React.PropsWithChildren {}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="container">{props.children}</div>
    </header>
  );
};

export default PageHeader;
