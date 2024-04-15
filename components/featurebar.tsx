"use client";
import { Filled } from "@/lib/filled-icons";
import { Outline } from "@/lib/outline-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const FeatureBar = () => {
    const [activeState, setActiveState] = useState({
        isHome: true,
        isTasks: false,
        isTransaction: false,
        isProfile: false,
    });

    const router = usePathname();

    useEffect(() => {
        if (router === "/") {
            setActiveState({
                isHome: true,
                isTasks: false,
                isTransaction: false,
                isProfile: false,
            });
        } else if (router == "/profile") {
            setActiveState({
                isHome: false,
                isTasks: false,
                isTransaction: false,
                isProfile: true,
            });
        }
    }, [router]);

    return (
        <div className="fixed bottom-0 bg-[#178fd6] text-white w-[800px] flex items-center justify-between px-10 py-2">
            <Link
                href={"/"}
                className="flex flex-col items-center group hover:cursor-pointer"
            >
                <Filled.FilledHome
                    className={`hidden group-hover:block ${
                        activeState.isHome && "!block"
                    }`}
                />
                <Outline.OutlineHome
                    className={`block group-hover:hidden ${
                        activeState.isHome && "!hidden"
                    }`}
                />
                <span className="font-medium">Home</span>
            </Link>

            <Link
                href={`${process.env.KINDE_SITE_LOGIN_URL}`}
                className="flex flex-col items-center group hover:cursor-pointer"
            >
                <Filled.FilledTasks
                    className={`hidden group-hover:block ${
                        activeState.isTasks && "!block"
                    }`}
                />
                <Outline.OutlineTasks
                    className={`block group-hover:hidden ${
                        activeState.isTasks && "!hidden"
                    }`}
                />

                <span>Tasks</span>
            </Link>

            <Link
                href={`${process.env.KINDE_SITE_LOGIN_URL}`}
                className="flex flex-col items-center group hover:cursor-pointer"
            >
                <Filled.FilledTransactions
                    className={`hidden group-hover:block ${
                        activeState.isTransaction && "!block"
                    }`}
                />
                <Outline.OutlineTransactions
                    className={`block group-hover:hidden ${
                        activeState.isTransaction && "!hidden"
                    }`}
                />
                <span>Transactions</span>
            </Link>

            <Link
                href={`${process.env.KINDE_SITE_LOGIN_URL}`}
                className="flex flex-col items-center group hover:cursor-pointer"
            >
                <Filled.FilledUser
                    className={`hidden group-hover:block ${
                        activeState.isProfile && "!block"
                    }`}
                />
                <Outline.OutlineUser
                    className={`block group-hover:hidden ${
                        activeState.isProfile && "!hidden"
                    }`}
                />
                <span>Profile</span>
            </Link>
        </div>
    );
};
