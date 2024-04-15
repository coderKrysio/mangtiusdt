import { Actions } from "@/components/actions";
import { BonusBar } from "@/components/bonusbar";
import { CarouselBanner } from "@/components/carousel";
import { Explore } from "@/components/explore";
import { FeatureBar } from "@/components/featurebar";
import { Navbar } from "@/components/navbar";
import { NotificationBar } from "@/components/notificationbar";
import { Recent } from "@/components/recent";
import Link from "next/link";
export default function Home() {
    return (
        <main className="relative flex min-h-screen max-w-[800px] bg-[#fffcf6] mx-auto flex-col items-center gap-8 pt-[50px] pb-[70px]">
            <Navbar />
            <NotificationBar />
            <CarouselBanner />
            <Actions />
            <Link href={"/"} className="w-[320px] h-[80px]">
                <img
                    className="w-[110%] h-full object-cover object-center rounded-xl"
                    src="https://w7.pngwing.com/pngs/867/239/png-transparent-google-play-logo-google-play-android-app-store-play-now-button-text-label-logo.png"
                    alt="Download on Google Play Store"
                />
            </Link>
            <BonusBar />
            <Recent />
            <Explore />
            <FeatureBar />
        </main>
    );
}
