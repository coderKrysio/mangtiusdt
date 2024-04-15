import { ForwardIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const Explore = () => {
    return (
        <div className="w-full px-10">
            <div className="bg-[#ccdde8] rounded-2xl p-4 flex flex-col gap-2">
                <div className="w-full text-2xl font-semibold flex gap-1 items-center">
                    <ForwardIcon width={24} height={24} />
                    Explore
                </div>
                <div className="text-sm font-medium">
                    Unlock the potential of cryptocurrency. Explore our secure
                    platform and start your crypto journey today.
                </div>
                <Link href={"/"} className="font-medium">
                    Learn More
                </Link>
            </div>
        </div>
    );
};
