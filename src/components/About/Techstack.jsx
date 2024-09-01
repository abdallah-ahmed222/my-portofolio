// import { Col, Row } from "react-bootstrap";
import { techStackData } from "../../helpers/data";
import { useEffect, useState } from "react";
import { MyVerticallyCenteredModal } from "../ModalComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Techstack() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  let slidesNumber = 5
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  switch (true) {
    case windowDimensions.width > 992:
      slidesNumber = 5;
      break
    case windowDimensions.width < 992 && windowDimensions.width > 775:
      slidesNumber = 3;
      break
    case windowDimensions.width < 775:
      slidesNumber = 1
      break
  }
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  return (
    <>
      <Swiper
        style={{ height: "40vh" }}
        loop={true}

        rewind={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={slidesNumber}
        // spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {techStackData.map((link) => (
          <SwiperSlide key={link.label} className="tech-icons_container">
            <div className="tech-icons p-0 py-3  w-100">
              <div className="tech-icons_overlay p-0 w-100"></div>
              <button
                className="p-0 pb-2 m-auto"
                onClick={() => {
                  setData(link);
                  setModalShow(true);
                }}
                aria-labelledby={`${link.label}`}
              >
                {link.element}
              </button>
            </div>
            <h4 className="pt-3">{link.label}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        eldata={data}
      />
    </>
  );
}

export default Techstack;
