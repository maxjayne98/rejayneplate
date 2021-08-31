import React from "react";
import { DefaultLayoutContainer } from "./Elements";
import Header from "../../Header";
import Footer from "../../Footer";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
      <Footer />
    </>
  );
};

export default DefaultLayout;
