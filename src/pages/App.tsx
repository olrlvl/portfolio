import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore from "swiper";

import "swiper/css"; //basic

function App() {
    const swiperRef = useRef<SwiperCore>();

    return (
        <main className="bg-gray-300 w-full h-screen pt-[72px] flex flex-col relative">
            {/* Intro Section */}
            <section className="bg-white py-8 flex flex-col items-center justify-center h-full">
                <h2 className="text-4xl">프로젝트 제목 소개</h2>
                <p className="mt-3">기여도 및 부연설명 부분</p>

                <div className="flex h-[650px] items-center gap-4 mt-3">
                    {/* Prev Button */}
                    {/* <div className="icon-xl bg-red-200 cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}></div> */}
                    {/* Slide */}
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="w-[calc(100vw-64px)] h-full z-0"
                        spaceBetween={32}
                        centeredSlides={true}
                        slidesPerView={2.5}
                        navigation
                        loop={true}
                        roundLengths={true}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
                        <SwiperSlide className="bg-red-500">Slide 2</SwiperSlide>
                        <SwiperSlide className="bg-green-500">Slide 3</SwiperSlide>
                        <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
                        <SwiperSlide className="bg-red-500">Slide 2</SwiperSlide>
                        <SwiperSlide className="bg-green-500">Slide 3</SwiperSlide>
                    </Swiper>
                    {/* Next Button */}
                    {/* <div className="icon-xl bg-red-200 cursor-pointer" onClick={() => swiperRef.current?.slideNext()}></div> */}
                </div>

                <div className="icon-xl bg-black cursor-pointer mt-8"></div>
            </section>

            <section className="bg-gray-500 flex flex-col items-center">스크롤을 내렸을때</section>
        </main>
    );
}

export default App;
