import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "tailwind-styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import SwiperCore from "swiper";
import "swiper/css";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    h-13
    bg-indigo-600
`;

function App() {
    const swiperRef = useRef<SwiperCore>();
    return (
        <div>
            <ReactFullpage
                licenseKey="gplv3-license"
                credits={{ enabled: true }}
                // navigation={true}
                // navigationPosition="right"
                paddingTop="72px"
                scrollingSpeed={650}
                anchors={["slide1", "slide2", "slide3"]}
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <section className="section bg-white w-full flex flex-col relative pt-[72px]">
                                {/* Intro Section */}
                                <section className="bg-white py-8 flex flex-col items-center justify-center h-full" data-achor="slide1">
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
                            </section>

                            {/* 프로젝트 소개 부문 */}
                            {/* 프로젝트에 따라서 테마 변경 */}
                            <section className="section bg-gray-500 flex h-screen" data-achor="slide2">
                                <div className="flex justify-center items-center w-full gap-12">
                                    {/* 스와이퍼 자리? */}
                                    <div className="flex bg-red-300 w-[650px] h-[600px]"></div>

                                    {/* 텍스트 설명 */}
                                    <div className="flex bg-white w-[650px] h-[800px]"></div>
                                </div>
                            </section>

                            {/* 나에 대해서 설명하는 부분  */}
                            <section className="section flex bg-yellow-400" data-achor="slide3"></section>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
}

export default App;
