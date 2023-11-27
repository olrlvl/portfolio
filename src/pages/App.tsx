import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "tailwind-styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import SwiperCore from "swiper";
import "swiper/css";

// asset dummy img
import dummy1 from "@src/assets/img/Slide1.jpg";
import dummy2 from "@src/assets/img/Slide2.jpg";
import dummy3 from "@src/assets/img/Slide3.jpg";
import bottomArrow from "@src/assets/img/ic_arrow.svg";

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
                            <section className="section bg-white w-full flex flex-col relative">
                                {/* Intro Section */}
                                <section className="bg-white flex flex-col items-center" data-achor="slide1">
                                    {/* 슬라이퍼 인덱스에 따라서 제목 변경 */}
                                    <h2 className="text-4xl">프로젝트 제목 소개</h2>
                                    {/* 설명도 마찬가지 */}
                                    <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
                                    <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
                                    <p className="mt-4">기여도 및 부연설명 부분 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>

                                    <div className="flex h-[650px] items-center gap-4 mt-3">
                                        {/* Prev Button */}
                                        {/* <div className="icon-xl bg-red-200 cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}></div> */}
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
                                            autoplay={{ delay: 3000 }}
                                            pagination={{ clickable: true }}
                                        >
                                            <SwiperSlide className="flex shadow-select-box rounded-xl overflow-hidden">
                                                <img className="w-full" src={dummy1} alt="first project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex shadow-select-box rounded-xl overflow-hidden">
                                                <img className="w-full" src={dummy2} alt="second project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex shadow-select-box rounded-xl overflow-hidden">
                                                <img className="w-full" src={dummy3} alt="third project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex shadow-select-box">
                                                <img className="w-full rounded-xl" src={dummy1} alt="first project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex shadow-select-box rounded-xl overflow-hidden">
                                                <img className="w-full" src={dummy2} alt="second project" />
                                            </SwiperSlide>
                                            <SwiperSlide className="flex shadow-select-box rounded-xl overflow-hidden">
                                                <img className="w-full" src={dummy3} alt="third project" />
                                            </SwiperSlide>
                                        </Swiper>
                                        {/* Next Button */}
                                        {/* <div className="icon-xl bg-red-200 cursor-pointer" onClick={() => swiperRef.current?.slideNext()}></div> */}
                                    </div>

                                    <div className="flex icon-lg cursor-pointer absolute bottom-8 bounce" onClick={() => fullpageApi.moveSectionDown()}>
                                        <img className="w-full rotate-180" src={bottomArrow} alt="bottom_arrow" />
                                    </div>
                                </section>
                            </section>

                            {/* 프로젝트 소개 부문 */}
                            {/* 프로젝트에 따라서 테마 변경 */}
                            <section className="section bg-slate-400 flex overflow-hidden " data-achor="slide2">
                                <div className="flex flex-col bg-white w-fit mx-auto rounded-lg p-8 shadow-modal-default relative items-center">
                                    {/* 프로젝트 타이틀 */}
                                    <div>프로젝트 제목</div>
                                    {/* 부연 설명 */}
                                    <div className="my-4">부연 설명</div>

                                    {/* 컨텐츠 */}
                                    <div className="flex gap-12">
                                        {/* 이미지, 숫자페이지네이션, 클릭했을때 넓은 크기의 이미지 팝업 */}
                                        <div className="flex bg-red-300 w-[650px] h-[600px]"></div>

                                        {/* 텍스트 설명 */}
                                        <div className="flex bg-black w-[650px] h-[800px]"></div>
                                    </div>
                                    {/* 이전 프로젝트 */}
                                    <div className="w-[80px] h-[80px] bg-yellow-400 absolute -left-28 top-[50%] -translate-y-2/4"></div>
                                    {/* 다음 프로젝트 */}
                                    <div className="w-[80px] h-[80px] bg-yellow-400 absolute -right-28 top-[50%] -translate-y-2/4"></div>
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
