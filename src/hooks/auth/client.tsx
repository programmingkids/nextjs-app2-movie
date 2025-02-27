"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

export function useAuth() {
  const [user, setUser] = useState<User | null>();
  // Client Side Client
  const supabase = createClient();

  useEffect(() => {
    (async () => {
      // get User
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    })();
  }, [supabase.auth]);

  const userName = user?.user_metadata.full_name ?? "";
  const email = user?.email ?? user?.user_metadata.email;
  const avatarUrl = user?.user_metadata.avatar_url ?? "";

  return {
    user,
    userName,
    email,
    avatarUrl,
  };
}
