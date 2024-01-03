import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";
import { Recommeded } from "./recommeded";
import { getRecommended } from "@/lib/recommended-list";

export const Sidebar = async () => {
  const users = await getRecommended();

  return (
    <Wrapper>
      <Toggle />

      <div className="m-y-4 pt-4 lg:pt-0">
        <Recommeded data={users} />
      </div>
    </Wrapper>
  );
};

//this wrapper is a client side component here while sidebae=r will be server side and hence side has the access of server based components like userdata fetch etc..
//with the help of wrapper we can wrap a server side component into a client side compoent (next js )
//and hence we can use react hooks for zustand or redux toolkit indside the wrapper

// <wrapper> <serverCompoent/> <wrappewr />
