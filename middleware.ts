import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request: NextRequest) {
    const pathname = request.url.split(":3000")[1];
    const { isAuthenticated } = getKindeServerSession();
    const isAuthed = await isAuthenticated();
    if (!isAuthed) {
        return NextResponse.redirect(
            `${process.env.KINDE_SITE_URL}api/auth/login?`
        );
    }
}
export const config = {
    matcher: ["/profile"],
};
