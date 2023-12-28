import React from "react";
import Navbar from "./_component/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {

 
  return (
    <>
    <Navbar/>
  <div>{children}</div>
  </>
  );
 
};

export default BrowseLayout ;
