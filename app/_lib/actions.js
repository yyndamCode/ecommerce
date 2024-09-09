"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
    await signIn("google", { redirectTo: "/users" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}
