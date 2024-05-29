
 import Quote from "../../assets/block.png";
import { reviews  } from "../review/reviewData";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; 



import "./Testimonial.css"
const Testimonial = () => {
  return (
    <>
       <section className="testimonial-container">
          <div className="title">
            <h2>Testimonial</h2>
            <p>What members are saying.</p>
          </div>

           <div className="slider-container">
              <blockquote>
                 <img className="top-quote quote" src={Quote} alt="quote" />
                 <img className="bottom-quote quote" src={Quote} alt="quote" />
              </blockquote>

              <Splide options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        > 
             {
              reviews.map((review) => {
                return <SplideSlide key={review.id}>
                    <img className="review-img" src={review.image} alt="" />

                  <div className="content">
                    <p className="text">{review.text}</p>

                    <div className="info">
                        <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                      </div>
                      <p className="user">{review.name}</p> 
                    </div>
                  </div>
                </SplideSlide>
              })
             }
         </Splide>
       </div>
         


      </section>
    </>
  )
}

export default Testimonial




