import {
    HomeIcon,
    RectangleStackIcon,
    BanknotesIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

export const Filled = {
    FilledHome: ({ className }: { className: string }) => (
        <HomeIcon width={20} height={20} className={className} />
    ),
    FilledTasks: ({ className }: { className: string }) => (
        <RectangleStackIcon width={20} height={20} className={className} />
    ),
    FilledTransactions: ({ className }: { className: string }) => (
        <BanknotesIcon width={20} height={20} className={className} />
    ),
    FilledUser: ({ className }: { className: string }) => (
        <UserCircleIcon width={20} height={20} className={className} />
    ),
};
