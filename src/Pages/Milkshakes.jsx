import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import milkshakeData from '../Assets/data.json'; // Import JSON
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function ilkshakes() {
  return (
    <div className=" py-5 ">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark">TOP MILK SHAKES</h2>
          <p className="text-muted fw-bold">Explore The Recent Most Bought Shakes This Week</p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[FreeMode]}
          spaceBetween={16}
          slidesPerView="auto"
          freeMode={true}
          grabCursor={true}
          className="pb-4"
        >
          {milkshakeData.MilkShakes.map((shake) => (
            <SwiperSlide key={shake.id} style={{ width: 'auto' }}>
              <Card className="shadow-sm rounded-3 p-3" style={{ width: '280px', backgroundColor: '#f8d7bd' }}>
                <div className="position-relative">
                  {/* Likes Badge */}
                  <span className="position-absolute top-0 start-0 bg-white px-2 py-1 rounded-pill shadow-sm">
                    ❤️ {shake.likes} likes
                  </span>
                  <Card.Img variant="top" src={shake.image} alt={shake.name} className="img-fluid mx-auto" style={{ height: '180px', objectFit: 'contain' }} />
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold">{shake.name}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-muted">${shake.price.toFixed(2)}</span>
                    <Button variant="dark" size="sm">BUY NOW</Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default Milkshakes;
