// import { Col, Row } from "react-bootstrap";
import { techStackData } from "../../helpers/data";
import { useState } from "react";
import { MyVerticallyCenteredModal } from "../ModalComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Techstack() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  return (
    <>
      <Swiper
        style={{ height: "40vh" }}
        rewind={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={5}
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
