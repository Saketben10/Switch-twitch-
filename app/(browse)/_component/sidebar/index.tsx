import {Toggle} from './toggle'
import { Wrapper } from "./wrapper";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle/>
    </Wrapper>
  );
};

//this wrapper is a client side component here while sidebae=r will be server side and hence side has the access of server based components like userdata fetch etc..
//with the help of wrapper we can wrap a server side component into a client side compoent (next js )
//and hence we can use react hooks for zustand or redux toolkit indside the wrapper

// <wrapper> <serverCompoent/> <wrappewr />
