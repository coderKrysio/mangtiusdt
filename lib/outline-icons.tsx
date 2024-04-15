import {
    HomeIcon,
    RectangleStackIcon,
    BanknotesIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";

export const Outline = {
    OutlineHome: ({ className }: { className: string }) => (
        <HomeIcon width={20} height={20} className={className} />
    ),
    OutlineTasks: ({ className }: { className: string }) => (
        <RectangleStackIcon width={20} height={20} className={className} />
    ),
    OutlineTransactions: ({ className }: { className: string }) => (
        <BanknotesIcon width={20} height={20} className={className} />
    ),
    OutlineUser: ({ className }: { className: string }) => (
        <UserCircleIcon width={20} height={20} className={className} />
    ),
};
