import { Logo } from "./_component/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="h-full flex flex-col justify-center items-center">
     <Logo/>
      {children}
    </div>
  );
};

export default AuthLayout;
