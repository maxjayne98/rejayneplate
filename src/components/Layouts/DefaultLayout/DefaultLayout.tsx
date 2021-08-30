import React from "react";
import { DefaultLayoutContainer } from "./Elements";

const DefaultLayout: React.FC = ({ children }) => {
  return <DefaultLayoutContainer>{children}</DefaultLayoutContainer>;
};

export default DefaultLayout;
