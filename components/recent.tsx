import { recent } from "@/lib/data";

export const Recent = () => {
    return (
        <div className="w-full flex flex-col gap-6 items-center px-10">
            <div className="w-full text-3xl font-semibold">
                Recent Transactions
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-3 gap-8 items-center">
                {recent.map(({ email, date }, id) => (
                    <div
                        key={id}
                        className="w-full h-[100px] bg-[#ccdde8] rounded-xl p-2 flex gap-2"
                    >
                        <div className="w-[84px] h-[84px]">
                            <img
                                className="object-cover w-full h-full rounded-md"
                                src="https://cdn.pixabay.com/photo/2020/03/08/16/03/bitcoin-4912863_960_720.jpg"
                                alt="Transaction"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="font-medium">
                                Transaction Completed
                            </div>
                            <div className="font-medium text-sm text-gray-700">
                                by: {email}
                            </div>
                            <div className="text-sm font-medium text-gray-700">
                                Completed on : {date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
