import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "tailwind-styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// asset text resource
import resource from "@src/assets/json/resource.json";

// asset dummy img
import dummy1 from "@src/assets/img/Slide1.jpg";
import dummy2 from "@src/assets/img/Slide2.jpg";
import dummy3 from "@src/assets/img/Slide3.jpg";
import bottomArrow from "@src/assets/img/ic_arrow.svg";
import rightArrow from "@src/assets/img/ic_right.svg";
import leftArrow from "@src/assets/img/ic_left.svg";

// Ex) Tailwind 스타일 컴포넌트 작성방법
// const Container = tw.div`
//     flex
//     items-center
//     justify-center
//     flex-col
//     w-full
//     h-13
//     bg-indigo-600
// `;

function App() {
    // with swiper
    const swiperRef = useRef<SwiperCore>();
    const [swiperIdx, setSwiperIdx] = useState<number>(0);

    // with fullpage
    const [pageIndex, setPageIndex] = useState<number>(0);

    // variable
    const [source] = useState([...resource, ...resource]);

    useEffect(() => {
        pageIndex > 0 ? swiperRef.current?.autoplay.pause() : swiperRef.current?.autoplay.resume();
    }, [pageIndex]);

    return (
        <div>
            <ReactFullpage
                // pluginWrapper={pluginWrapper}
                licenseKey="gplv3-license"
                credits={{ enabled: true }}
                // navigation={true}
                // navigationPosition="right"
                scrollOverflow={true}
                paddingTop="72px"
                scrollingSpeed={650}
                anchors={["slide1", "slide2", "slide3"]}
                // sectionsColor={["", `${source[swiperIdx].color ?? ""}`]}
                afterLoad={(_origin, destination, direction) => {
                    setPageIndex(() => destination.index);
                    console.log(`current slide : ${destination.index}`);
                    console.log(`current slide name : ${destination.anchor}`);
                    console.log(direction ?? "empty");
                }}
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <section className="relative flex flex-col w-full bg-white section z-1 h-full justify-start">
                                {/* Animation Background */}
                                <div className="area">
                                    <div className="air air1"></div>
                                    <div className="air air2"></div>
                                    <div className="air air3"></div>
                                    <div className="air air4"></div>
                                </div>
                                {/* Intro Section */}
                                <section className="flex flex-col items-center mt-[106px]" data-achor="slide1">
                                    <div className="z-1 text-center text-white">
                                        <p>현재 슬라이드 Index : {swiperIdx}</p>
                                        {/* 슬라이퍼 인덱스에 따라서 제목 변경 */}
                                        <h2 className="text-4xl">{source[swiperIdx].title}</h2>
                                        {/* 설명도 마찬가지 */}
                                        <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
                                        <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
                                        <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
                                    </div>

                                    <div className="flex h-[650px] items-center gap-4 mt-9 flex-shrink-0 ">
                                        {/* Prev Button */}
                                        {/* <div className="bg-red-200 cursor-pointer icon-xl" onClick={() => swiperRef.current?.slidePrev()}></div> */}
                                        {/* Slide */}
                                        <Swiper
                                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                                            onSlideChange={(swiper) => setSwiperIdx(() => swiper.realIndex)}
                                            className="w-[calc(100vw-0px)] h-full z-0 py-4"
                                            spaceBetween={32}
                                            centeredSlides={true}
                                            slidesPerView={2.5}
                                            navigation
                                            loop={true}
                                            loopAdditionalSlides={1}
                                            // roundLengths={true}
                                            modules={[Autoplay]}
                                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                                        >
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy1} alt="Aucshow 2.0" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy2} alt="Ad-Astra" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy3} alt="Platme" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy1} alt="Aucshow 2.0" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy2} alt="Ad-Astra" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy3} alt="Platme" />
                                            </SwiperSlide>
                                        </Swiper>
                                        {/* Next Button */}
                                        {/* <div className="bg-red-200 cursor-pointer icon-xl" onClick={() => swiperRef.current?.slideNext()}></div> */}
                                    </div>

                                    {/* 바텀 화살표 아이콘 */}
                                    <div className="absolute flex cursor-pointer icon-lg bottom-8 bounce" onClick={() => fullpageApi.moveSectionDown()}>
                                        <img className="w-full rotate-180" src={bottomArrow} alt="bottom_arrow" />
                                    </div>
                                </section>
                            </section>

                            {/* 프로젝트 소개 부문 */}
                            {/* 프로젝트에 따라서 테마 변경 */}
                            <section className="section overflow-hidden relative" data-achor="slide2">
                                <div className={`absolute w-full h-full top-0 ${source[swiperIdx].color} transition-all duration-300`}></div>
                                <div className="relative flex flex-col mx-auto p-8 my-4 bg-white rounded-lg w-fit shadow-modal-default items-center">
                                    {/* 프로젝트 타이틀 */}
                                    <div className="text-heading01">{source[swiperIdx].title}</div>
                                    {/* 부연 설명 */}
                                    <div className="my-4 text-paraTitle">부연 설명</div>

                                    <p>현재 Swiper Index : {swiperIdx}</p>
                                    <p>현재 Page Index : {pageIndex}</p>
                                    <p>Test 색상 : {source[swiperIdx].color ?? ""}</p>

                                    <div className={`flex w-10 h-10 z-1 ${source[swiperIdx].color ?? ""}`}></div>

                                    {/* 컨텐츠 */}
                                    <div className="flex gap-12">
                                        {/* 이미지, 숫자페이지네이션, 클릭했을때 넓은 크기의 이미지 팝업 */}
                                        <div className="flex bg-red-300 w-[650px] h-[400px]"></div>

                                        {/* 텍스트 설명 */}
                                        <div className="flex bg-black w-[650px] h-[600px]"></div>
                                    </div>
                                    {/* 이전 프로젝트 */}
                                    <div
                                        className="flex w-[80px] h-[80px] absolute -left-28 top-[50%] -translate-y-2/4 cursor-pointer z-1"
                                        onClick={() => swiperRef.current?.slidePrev()}
                                    >
                                        <img className="fill-rose-900" src={leftArrow} alt="left_arrow" />
                                    </div>
                                    {/* 다음 프로젝트 */}
                                    <div
                                        className="flex w-[80px] h-[80px] absolute -right-28 top-[50%] -translate-y-2/4 cursor-pointer z-1"
                                        onClick={() => swiperRef.current?.slideNext()}
                                    >
                                        <img className="fill-rose-900" src={rightArrow} alt="right_arrow" />
                                    </div>
                                </div>
                            </section>

                            {/* 나에 대해서 설명하는 부분  */}
                            <section id="test" className="flex bg-yellow-400 section" data-achor="slide3">
                                <div className="w-[500px] h-[3440px] bg-black">추가영역 테스트</div>
                            </section>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
}

export default App;
