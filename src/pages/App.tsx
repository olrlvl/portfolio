import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore from "swiper";

import "swiper/css"; //basic

function App() {
    const swiperRef = useRef<SwiperCore>();
    return (
        <main className="bg-gray-300 w-full pt-[72px] flex flex-col relative">
            <section className="bg-green-200 py-8 flex flex-col items-center justify-center gap-3">
                <h2 className="text-4xl">프로젝트 제목 소개</h2>
                <p>기여도 및 부연설명 부분</p>

                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="w-[1000px] h-[600px]"
                    spaceBetween={50}
                    slidesPerView={"auto"}
                    scrollbar={{ draggable: true }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="bg-black">Slide 1</SwiperSlide>
                    <SwiperSlide className="bg-red-500">Slide 2</SwiperSlide>
                    <SwiperSlide className="bg-green-500">Slide 3</SwiperSlide>
                    <SwiperSlide className="bg-yellow-500">Slide 4</SwiperSlide>
                </Swiper>
            </section>
            <section className="bg-gray-500 h-96 flex flex-col items-center">스크롤을 내렸을때</section>
        </main>
    );
}

export default App;
