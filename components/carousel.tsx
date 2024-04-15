"use client";
import { Carousel } from "@mantine/carousel";
export const CarouselBanner = () => {
    return (
        <div className="w-full px-10">
            <Carousel
                withIndicators
                height={200}
                loop
                withControls={false}
                color="white"
            >
                <Carousel.Slide className="rounded-xl overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1000"
                        className="object-contain object-center w-full"
                    />
                </Carousel.Slide>
                <Carousel.Slide className="rounded-xl overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1000"
                        className="object-contain object-center w-full"
                    />
                </Carousel.Slide>
                <Carousel.Slide className="rounded-xl overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/8369588/pexels-photo-8369588.jpeg?auto=compress&cs=tinysrgb&w=1000"
                        className="object-contain object-center w-full"
                    />
                </Carousel.Slide>
                <Carousel.Slide className="rounded-xl overflow-hidden">
                    <img
                        src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1000"
                        className="object-contain object-center w-full"
                    />
                </Carousel.Slide>
            </Carousel>
        </div>
    );
};
