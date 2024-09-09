import { auth } from "@/app/_lib/auth";

  async function getSession() {
    const session = await auth();
    return session;
}
export default getSession