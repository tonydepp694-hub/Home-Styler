"use client"

import { useState, useEffect } from "react"
import "./Testimonials.css"

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?b=1&s=612x612&w=0&k=20&c=_VfWQI2t_aONL0FEFJ1Eki3QQkRwgxkAve0_z53oeKY=",
      text: "HomeStyler transformed our living space beyond our expectations. The design team was professional and creative.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/35226088/pexels-photo-35226088.jpeg",
      text: "The furniture quality is exceptional and the design consultation was invaluable. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Enthusiast",
      image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=612x612&w=0&k=20&c=jc27S9EzcqPWne91HrtCaveIe8qazVsGhDjYRdwNLoU=",
      text: "Amazing selection of products and the designers really understood our vision. Our home feels perfect now.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? "star-filled" : ""}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header text-center">
          <h2>What Our Clients Say</h2>
          <p>Real feedback from satisfied customers</p>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${index === currentTestimonial ? "testimonial-slide-active" : ""}`}
            >
              <div className="testimonial-content">
                <div className="testimonial-text">"{testimonial.text}"</div>
                <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
                <div className="testimonial-author">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-indicator ${index === currentTestimonial ? "testimonial-indicator-active" : ""}`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
