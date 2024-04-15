import { FeatureBar } from "@/components/featurebar";
import { Navbar } from "@/components/navbar";
import {
    getKindeServerSession,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <main className="relative flex min-h-screen max-w-[800px] bg-[#fffcf6] mx-auto flex-col items-center gap-8 pt-[50px] pb-[70px]">
            <Navbar />
            <div className="w-full px-10 py-2 flex flex-col gap-4">
                <div className="w-full text-3xl font-semibold">
                    User Profile
                </div>
                <div className="flex gap-6 items-center">
                    <div className="w-[80px] h-[80px] rounded-full bg-[#178fd6]">
                        <img
                            className="w-full h-full object-cover object-center"
                            src={user?.picture || ""}
                            alt={user?.given_name || "user"}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-2xl font-semibold capitalize">
                            {`${user?.given_name?.toLowerCase()} ${user?.family_name?.toLowerCase()}`}
                        </div>
                        <div className="font-medium">Email: {user?.email}</div>
                        <div className="text-sm font-medium">User</div>
                    </div>
                </div>

                <LogoutLink className="bg-[#178fd6] w-fit px-4 py-2 rounded-lg font-semibold text-white transition-colors hover:bg-red-500">
                    Log out
                </LogoutLink>
            </div>
            <FeatureBar />
        </main>
    );
}
