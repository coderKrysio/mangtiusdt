import {
    CreditCardIcon,
    LightBulbIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export const Actions = () => {
    return (
        <div className="flex items-center justify-between w-full px-10">
            <div className="w-[200px] h-[180px] rounded-2xl bg-[#ccdde8] flex flex-col items-center justify-between gap-2 p-2">
                <div className="relative w-full h-20 mb-8">
                    <img
                        className="w-full h-full object-cover object-center rounded-lg"
                        src="https://cdn.pixabay.com/photo/2016/10/23/20/14/checkout-1764413_960_720.jpg"
                        alt="Register"
                    />
                    <div className="w-14 h-14 border-2 border-black bg-[#fff] rounded-full absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
                        <PencilSquareIcon width={26} height={26} />
                    </div>
                </div>
                <Link
                    href={`${process.env.KINDE_SITE_URL}api/auth/login?`}
                    className="border-2 border-[#fff] bg-white rounded-lg w-full h-[44px] py-2 text-center font-semibold transition-colors hover:bg-[#178fd6] hover:text-white hover:border-[#178fd6] hover:font-bold"
                >
                    Register
                </Link>
            </div>

            <div className="w-[200px] h-[180px] rounded-2xl bg-[#ccdde8] flex flex-col items-center justify-between gap-2 p-2">
                <div className="relative w-full h-20 mb-8">
                    <img
                        className="w-full h-full object-cover object-center rounded-lg"
                        src="https://cdn.pixabay.com/photo/2018/05/02/16/53/bitcoin-3369039_640.jpg"
                        alt="Register"
                    />
                    <div className="w-14 h-14 border-2 border-black bg-[#fff] rounded-full absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
                        <CreditCardIcon width={26} height={26} />
                    </div>
                </div>
                <Link
                    href={`${process.env.KINDE_SITE_URL}api/auth/login?`}
                    className="border-2 border-[#fff] bg-white rounded-lg w-full h-[44px] py-2 text-center font-semibold transition-colors hover:bg-[#178fd6] hover:text-white hover:border-[#178fd6] hover:font-bold"
                >
                    Buy / Sell
                </Link>
            </div>

            <div className="w-[200px] h-[180px] rounded-2xl bg-[#ccdde8] flex flex-col items-center justify-between gap-2 p-2">
                <div className="relative w-full h-20 mb-8">
                    <img
                        className="w-full h-full object-cover object-center rounded-lg"
                        src="https://cdn.pixabay.com/photo/2017/09/08/19/11/bitcoin-2729806_640.jpg"
                        alt="Register"
                    />
                    <div className="w-14 h-14 border-2 border-black bg-[#fff] rounded-full absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
                        <LightBulbIcon width={26} height={26} />
                    </div>
                </div>
                <Link
                    href={`${process.env.KINDE_SITE_URL}api/auth/login?`}
                    className="border-2 border-[#fff] bg-white rounded-lg w-full h-[44px] py-2 text-center font-semibold transition-colors hover:bg-[#178fd6] hover:text-white hover:border-[#178fd6] hover:font-bold"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};
