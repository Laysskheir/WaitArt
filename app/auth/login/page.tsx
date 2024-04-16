import { auth } from "@/auth";
import LoginForm from "@/components/auth/login-form";
import { redirect } from "next/navigation";

async function getSession() {
  const session = await auth();

  return {
    session,
  };
}

const LoginPage = async () => {
  const { session } = await getSession();

  // The user is already logged in, redirect to homepage.
  if (session) return redirect("/");
  return <LoginForm />;
};

export default LoginPage;
