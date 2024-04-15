"use client";
import { BellIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const NotificationBar = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Notifications"
                centered
            >
                <div>All related notifications will go here</div>
            </Modal>
            <div onClick={open} className="w-full px-10 cursor-pointer">
                <div className="w-full p-1 border-2 border-[#034488] rounded-full flex gap-1">
                    <BellIcon width={20} height={20} color="#034488" />
                    <div className="w-full relative flex text-[#034488] overflow-x-hidden">
                        <div className="animate-marquee whitespace-nowrap">
                            All related notifications will go here. All related
                            notifications will go here.&nbsp;
                        </div>

                        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                            All related notifications will go here. All related
                            notifications will go here.&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
