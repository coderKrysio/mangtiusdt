import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request: NextRequest) {
    const { isAuthenticated } = getKindeServerSession();
    const isAuthed = await isAuthenticated();
    if (!isAuthed) {
        return NextResponse.redirect(`${process.env.KINDE_SITE_LOGIN_URL}`);
    }
}
export const config = {
    matcher: ["/profile"],
};
