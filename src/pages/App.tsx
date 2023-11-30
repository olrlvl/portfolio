import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "tailwind-styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// asset dummy img
import dummy1 from "@src/assets/img/Slide1.jpg";
import dummy2 from "@src/assets/img/Slide2.jpg";
import dummy3 from "@src/assets/img/Slide3.jpg";
import bottomArrow from "@src/assets/img/ic_arrow.svg";
import rightArrow from "@src/assets/img/ic_right.svg";
import leftArrow from "@src/assets/img/ic_left.svg";

// Ex) 테일윈드 스타일 컴포넌트 작성방법
// const Container = tw.div`
//     flex
//     items-center
//     justify-center
//     flex-col
//     w-full
//     h-13
//     bg-indigo-600
// `;

// const pluginWrapper = () => {
//     require("../../node_modules/fullpage.js/vendors/");
// };

function App() {
    const swiperRef = useRef<SwiperCore>();

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
                render={({ fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <section className="relative flex flex-col w-full bg-white section">
                                {/* Intro Section */}
                                <section className="flex flex-col items-center bg-white" data-achor="slide1">
                                    {/* 슬라이퍼 인덱스에 따라서 제목 변경 */}
                                    <h2 className="text-4xl">프로젝트 제목 소개</h2>
                                    {/* 설명도 마찬가지 */}
                                    <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
                                    <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
                                    <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>

                                    <div className="flex h-[650px] items-center gap-4 mt-3 flex-shrink-0">
                                        {/* Prev Button */}
                                        {/* <div className="bg-red-200 cursor-pointer icon-xl" onClick={() => swiperRef.current?.slidePrev()}></div> */}
                                        {/* Slide */}
                                        <Swiper
                                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                                            className="w-[calc(100vw-64px)] h-full z-0 py-4"
                                            spaceBetween={32}
                                            centeredSlides={true}
                                            slidesPerView={2.5}
                                            navigation
                                            loop={true}
                                            roundLengths={true}
                                            modules={[Autoplay]}
                                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                                            pagination={{ clickable: true }}
                                        >
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy1} alt="first project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy2} alt="second project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy3} alt="third project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy1} alt="first project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy2} alt="second project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex overflow-hidden shadow-select-box rounded-xl cursor-pointer">
                                                <img className="w-full" src={dummy3} alt="third project" />
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
                            <section className="flex overflow-hidden section bg-slate-400 " data-achor="slide2">
                                <div className="relative flex flex-col items-center p-8 mx-auto bg-white rounded-lg w-fit shadow-modal-default">
                                    {/* 프로젝트 타이틀 */}
                                    <div className="text-heading01">프로젝트 제목</div>
                                    {/* 부연 설명 */}
                                    <div className="my-4 text-paraTitle">부연 설명</div>

                                    {/* 컨텐츠 */}
                                    <div className="flex gap-12">
                                        {/* 이미지, 숫자페이지네이션, 클릭했을때 넓은 크기의 이미지 팝업 */}
                                        <div className="flex bg-red-300 w-[650px] h-[400px]"></div>

                                        {/* 텍스트 설명 */}
                                        <div className="flex bg-black w-[650px] h-[600px]"></div>
                                    </div>
                                    {/* 이전 프로젝트 */}
                                    <div className="flex w-[80px] h-[80px] absolute -left-28 top-[50%] -translate-y-2/4 cursor-pointer">
                                        <img className="fill-rose-900" src={leftArrow} alt="left_arrow" />
                                    </div>
                                    {/* 다음 프로젝트 */}
                                    <div className="flex w-[80px] h-[80px] absolute -right-28 top-[50%] -translate-y-2/4 cursor-pointer">
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
