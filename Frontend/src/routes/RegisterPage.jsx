import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};
export default RegisterPage;
