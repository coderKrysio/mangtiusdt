"use client";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/16/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
export const Navbar = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <nav className="fixed top-0 w-[800px] h-[42px] bg-[#178fd6] text-white z-30 px-4 flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <div className="font-bold text-2xl">Mangtiusdt</div>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={open}
                        className="rounded-full w-6 h-6 flex items-center justify-center"
                    >
                        <ChatBubbleOvalLeftIcon
                            width={20}
                            height={20}
                            color="#fff"
                        />
                    </button>
                    <button className="rounded-md border-2 border-[#fff] text-sm font-semibold p-1 flex gap-1">
                        <GlobeAltIcon width={20} height={20} color="#fff" />
                        English
                    </button>
                </div>
            </nav>
            <Modal opened={opened} onClose={close} title="Chat" centered>
                <div>Online chatting option will be enabled soon.</div>
            </Modal>
        </>
    );
};
