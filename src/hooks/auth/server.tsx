import { redirect } from "next/navigation";
import type { AuthSignData } from "@/types/auth";
import {
  PAGE_AFTER_LOGIN,
  PAGE_SIGNIN,
  PAGE_ERROR,
  PAGE_AFTER_LOGOUT,
} from "@/config/data";
import { createClient } from "@/utils/supabase/server";

const HOST = process.env.HOST;

export async function getAuth() {
  // Server Side Client
  const supabase = await createClient();
  // get User
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // not auth, goto signin
  if (!user) {
    redirect(PAGE_SIGNIN);
  }

  // signout action
  const signOut = async () => {
    await supabase.auth.signOut();
    redirect(PAGE_AFTER_LOGOUT);
  };

  const userName = user?.user_metadata.full_name ?? "";
  const email = user?.email ?? user?.user_metadata.email;
  const avatarUrl = user?.user_metadata.avatar_url ?? "";

  return {
    user,
    userName,
    email,
    avatarUrl,
    signOut,
  };
}

export async function getAuthSign() {
  // Server Side Client
  const supabase = await createClient();

  // singup action
  const signUp = async (data: AuthSignData) => {
    const { error } = await supabase.auth.signUp(data);
    return { error };
  };

  // email&password singin action
  const signIn = async (data: AuthSignData) => {
    const { error } = await supabase.auth.signInWithPassword(data);
    return { error };
  };

  // google oauth signin action
  const signInWithOAuth = async () => {
    const {
      data: { url },
      error,
    } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `https://${HOST}/auth/callback?next=${PAGE_AFTER_LOGIN}`,
      },
    });
    if (error || !url) {
      redirect(PAGE_ERROR);
    }
    // ここはsupabaseのURLなので通常のリダイレクト
    redirect(url as string);
  };

  // update password action
  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({
      password: password,
    });
    return { error };
  };

  const updateUserName = async (fullName: string) => {
    const { error } = await supabase.auth.updateUser({
      data: { full_name: fullName },
    });
    return { error };
  };

  return {
    signUp,
    signIn,
    signInWithOAuth,
    updatePassword,
    updateUserName,
  };
}

export async function isAuth() {
  // Server Side Client
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? true : false;
}
