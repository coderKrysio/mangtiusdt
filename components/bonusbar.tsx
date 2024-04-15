import { LockClosedIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const BonusBar = () => {
    return (
        <div className="w-full flex flex-col gap-6 items-center px-10">
            <div className="w-full text-3xl font-semibold">Bonuses</div>
            {[1, 2, 3, 4].map((value, id) => (
                <Link
                    key={id}
                    href={"/api/auth/login?"}
                    className="w-full h-[120px] bg-[#ccdde8] rounded-xl p-2 z-0 flex gap-3"
                >
                    <div className="w-[104px] h-[104px] relative font-semibold flex flex-col items-center justify-center">
                        <img
                            className="absolute object-cover w-full h-full object-center rounded-md opacity-90 -z-10 bg-black"
                            src="https://cdn.pixabay.com/photo/2018/08/05/12/23/blockchain-3585506_960_720.jpg"
                            alt="cryptocurrency"
                        />
                        <LockClosedIcon width={24} height={24} />
                        Locked
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-xl font-semibold">
                            Unlock Bonus
                        </div>
                        <div className="font-medium text-sm text-gray-700">
                            Level {value}
                        </div>
                        <div className="font-medium text-sm">
                            Crypto Price: $ 0
                        </div>
                        <div>Click to level up now!</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};
