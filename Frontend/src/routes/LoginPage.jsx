import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <SignIn signUpUrl="/register" />
      </div>
    </div>
  );
};
export default LoginPage;
