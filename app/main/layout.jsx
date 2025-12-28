import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function MainLayout({ children }) {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get("auth");

  if (!isLoggedIn) {
    redirect("/login");
  }

  return <>{children}</>;
}
