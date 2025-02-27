"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  SigninFormSchema,
  SignupFormSchema,
  UpdatePasswordFormSchema,
  ProfileFormSchema,
  type SigninFormType,
  type SignupFormType,
  type UpdatePasswordFormType,
  type ProfileFormType,
} from "@/types/auth";
import {
  type SignInActionReturnType,
  type SignUpActionReturnType,
  type PasswordUpteActionReturnType,
  type ProfileUpteActionReturnType,
} from "@/types/index";
import { PAGE_AFTER_LOGIN } from "@/config/data";
import { getAuth, getAuthSign } from "@/hooks/auth/server";

const signInErrorMessage: { [key: string]: string } = {
  invalid_credentials: "認証情報に誤りがあります",
  unknown: "不明なエラーです",
};

const signUpErrorMessage: { [key: string]: string } = {
  user_already_exists: "登録済みのユーザです",
  anonymous_provider_disabled: "メールアドレスに誤りがあります",
  validation_failed: "メールアドレスに誤りがあります",
  weak_password: "パスワードの桁数が足りません",
  unknown: "不明なエラーです",
};

const passwordUpdateErrorMessage: { [key: string]: string } = {
  weak_password: "パスワードの桁数が足りません",
  same_password: "同じパスワードに更新できません",
  unknown: "不明なエラーです",
};

const profileUpdateErrorMessage: { [key: string]: string } = {
  unknown: "不明なエラーです",
};

// ログイン用サーバーアクション
export async function signInAction(
  data: SigninFormType,
): Promise<SignInActionReturnType> {
  // zod validate
  const result = SigninFormSchema.safeParse(data);
  if (!result.success) {
    // validate error
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // sigin
  const { signIn } = await getAuthSign();
  const { error } = await signIn(data);

  if (error) {
    const errorInfo: { email?: [string]; password?: [string] } = {};
    const errorCode = error.code ?? "unknown";
    const message = signInErrorMessage[errorCode];

    if (error.code?.includes("password")) {
      errorInfo["password"] = [message];
    } else {
      errorInfo["email"] = [message];
      errorInfo["password"] = [message];
    }
    return {
      success: false,
      error: errorInfo,
    };
  }

  revalidatePath(PAGE_AFTER_LOGIN, "layout");
  redirect(PAGE_AFTER_LOGIN);
}

// ユーザ登録用サーバーアクション
export async function signUpAction(
  data: SignupFormType,
): Promise<SignUpActionReturnType> {
  // zod validate
  const result = SignupFormSchema.safeParse(data);
  if (!result.success) {
    // validate error
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // signup
  const { signUp } = await getAuthSign();
  const { error } = await signUp(data);

  // failed to singup
  if (error) {
    const errorInfo: { email?: [string]; password?: [string] } = {};
    const errorCode = error.code ?? "unknown";
    const message = signUpErrorMessage[errorCode];

    if (error.code?.includes("password")) {
      errorInfo["password"] = [message];
    } else {
      errorInfo["email"] = [message];
    }
    return {
      success: false,
      error: errorInfo,
    };
  }
  // succeeded to signup
  revalidatePath(PAGE_AFTER_LOGIN, "layout");
  redirect(PAGE_AFTER_LOGIN);
  // if confirmation mail is sent
  // return {
  //   success: true,
  // };
}

// ログアウト用サーバーアクション
export async function SignoutAction() {
  // signout
  const { signOut } = await getAuth();
  await signOut();
}

// Google認証用サーバーアクション
export async function SignInWithOAuthAction() {
  // signin by google auth
  const { signInWithOAuth } = await getAuthSign();
  await signInWithOAuth();
}

// パスワード更新用アクション
export async function updatePasswordAction(
  data: UpdatePasswordFormType,
): Promise<PasswordUpteActionReturnType> {
  // zod validate
  const result = UpdatePasswordFormSchema.safeParse(data);
  if (!result.success) {
    // validate error
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }
  // update
  const { updatePassword } = await getAuthSign();
  const { error } = await updatePassword(data.password);

  if (error) {
    const errorInfo: { password?: [string] } = {};
    const errorCode = error.code ?? "unknown";
    const message = passwordUpdateErrorMessage[errorCode];

    return {
      success: false,
      error: {
        password: [message],
      },
    };
  }
  return {
    success: true,
  };
}

export async function updateProfileAction(
  data: ProfileFormType,
): Promise<ProfileUpteActionReturnType> {
  // zod validate
  const result = ProfileFormSchema.safeParse(data);
  if (!result.success) {
    // validate error
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  // update
  const { updateUserName } = await getAuthSign();
  const { error } = await updateUserName(data.fullname);

  if (error) {
    const errorInfo: { fullname?: [string] } = {};
    const errorCode = error.code ?? "unknown";
    const message = profileUpdateErrorMessage[errorCode];

    return {
      success: false,
      error: {
        fullname: [message],
      },
    };
  }
  return {
    success: true,
  };
}
