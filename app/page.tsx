import Image from "next/image";
import ScrollAnimations from "./ScrollAnimations";
export default function Home() {
  return (
    <main>
  <ScrollAnimations />
      {/* NAVBAR */}
      <nav>

  <a href="#" className="nav-brand">

    <Image
      src="/riverpark-logo.png"
      alt="River Park Nursing Foot Care logo"
      width={60}
      height={60}
      className="nav-logo"
    />

    <div className="brand-text">
      <strong>River Park</strong>
      <span>Nursing Foot Care</span>
    </div>

  </a>


  <div className="nav-links">
    <a href="#why-foot-care">Why Foot Care?</a>
<a href="#services">Services</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>

    <a
      href="tel:+12049987190"
      className="nav-call-button"
    >
      Call Us
    </a>
  </div>

</nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-text">

          <p className="small-heading">
            “Heel”ing with care
          </p>

          <h1>
             Professional foot care, right at your doorstep.
          </h1>

          <p className="hero-description">
             Safe, gentle, and professional mobile nursing foot care
              delivered in the comfort of your home.
          </p>


          <div className="hero-features">

  <span>✓ Registered Nurse</span>

  <span>✓ Certified Foot Care Nurse</span>


  <span>✓ Mobile Home Visits</span>

</div>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="primary-button"
            >
              Book an Appointment
            </a>

            <a
              href="tel:+12049987190"
              className="secondary-button"
            >
              Call Now
            </a>

          </div>

        </div>


        <div className="hero-animation">

  <div className="floating-circle circle-one"></div>

  <div className="floating-circle circle-two"></div>

  <div className="floating-circle circle-three"></div>

  <div className="hero-ring"></div>

  <div className="animation-message">
    <span>RIVER PARK</span>
    <h3>Care that moves with you.</h3>
    <p>Comfort • Mobility • Wellness</p>
  </div>

</div>

      </section>

{/* WHY FOOT CARE */}
<section id="why-foot-care" className="why-foot-care">

  <div className="why-heading">

    <p className="small-heading">
      Why Foot Care?
    </p>

    <h2>
      Healthy feet help keep you moving.
    </h2>

    <p className="why-intro">
      Regular foot care can support comfort, mobility, and
      awareness of changes in your feet — especially when
      caring for them yourself becomes difficult.
    </p>

  </div>

<div className="why-image">
  <Image
    src="/walking.avif"
    alt="Walking outdoors and staying active"
    width={1200}
    height={650}
    className="why-photo"
  />
</div>
  <div className="why-grid">

    <div className="why-card">

      <span className="why-number">01</span>

      <h3>Maintain Comfort</h3>

      <p>
        Routine care for nails, dry skin, corns, and calluses
        can help keep your feet feeling more comfortable.
      </p>

    </div>


    <div className="why-card">

      <span className="why-number">02</span>

      <h3>Support Mobility</h3>

      <p>
        Comfortable feet can make everyday movement and
        activities easier to manage.
      </p>

    </div>


    <div className="why-card">

      <span className="why-number">03</span>

      <h3>Professional Attention</h3>

      <p>
        Nursing foot care provides an opportunity for your feet
        to be regularly observed and cared for by a trained
        professional.
      </p>

    </div>

  </div>

</section>
      
      {/* SERVICES */}
<section id="services">

  <p className="small-heading">
    Our Services
  </p>

  <h2>
    Professional foot care in the comfort of your home.
  </h2>

  <p>
    Personalized nursing foot care designed to support comfort,
    mobility, and ongoing foot health.
  </p>


  
<div className="services-grid">

  <div className="service-card">
    <span>01</span>
    <h3>Foot Health Assessment</h3>
    <p>
      Comprehensive foot and lower-leg assessments,
      footwear evaluation, and foot-risk screening
      to understand your individual care needs.
    </p>
  </div>

  <div className="service-card">
    <span>02</span>
    <h3>Diabetic Foot Care</h3>
    <p>
      Professional nursing foot care for clients
      living with diabetes, with attention to
      foot health, prevention, and comfort.
    </p>
  </div>

  <div className="service-card">
    <span>03</span>
    <h3>Ingrown Toenail Care</h3>
    <p>
      Professional assessment and nursing care
      for ingrown toenails, with guidance on
      appropriate follow-up when needed.
    </p>
  </div>

  <div className="service-card">
    <span>04</span>
    <h3>Fungal Nail Care</h3>
    <p>
      Assessment and care for nails affected by
      fungal concerns, along with practical
      foot hygiene and aftercare guidance.
    </p>
  </div>

  <div className="service-card">
    <span>05</span>
    <h3>Toenail Trimming &amp; Reduction</h3>
    <p>
      Professional toenail trimming and thickened
      nail reduction to support comfort and
      everyday foot care.
    </p>
  </div>

  <div className="service-card">
    <span>06</span>
    <h3>Corn, Callus &amp; Heel Care</h3>
    <p>
      Corn and callus reduction, along with
      care for cracked heels and dry skin
      to help maintain comfortable feet.
    </p>
  </div>

  <div className="service-card">
    <span>07</span>
    <h3>Arthritis Foot Care</h3>
    <p>
      Gentle nursing foot care for clients
      living with arthritis and related
      foot-care challenges.
    </p>
  </div>

  <div className="service-card">
    <span>08</span>
    <h3>Education &amp; Aftercare</h3>
    <p>
      Preventative foot-health education,
      aftercare guidance, and referrals
      to other foot-care professionals when needed.
    </p>
  </div>

  <div className="service-card">
    <span>09</span>
    <h3>Mobile Nursing Foot Care</h3>
    <p>
      Professional foot-care services delivered
      directly to you in the comfort and
      convenience of your home.
    </p>
  </div>

</div>

<div className="services-gallery">

  <div className="gallery-photo">
    <Image
      src="/foot-treatment.avif"
      alt="Professional foot care treatment"
      width={700}
      height={500}
      className="gallery-image"
    />
    <span>Gentle, professional care</span>
  </div>

  <div className="gallery-photo">
    <Image
      src="/foot-wellness.avif"
      alt="Relaxing foot wellness"
      width={700}
      height={500}
      className="gallery-image"
    />
    <span>Comfort in every step</span>
  </div>

</div>

  <a href="#contact" className="services-book-button">
    Book an Appointment
  </a>

</section>


      {/* ABOUT */}
      <section id="about">

       <div className="about-photo about-visual">
  <div className="about-visual-content">
    <span>PERSONALIZED NURSING FOOT CARE</span>
    <h3>Compassionate care. Every step of the way.</h3>
    <p>Registered Nurse • Certified Foot Care Nurse</p>
  </div>
</div>


        <div className="about-text">

          <p className="small-heading">
            Meet Your Foot Care Nurse
          </p>

          <h2>
             Meet Beant Kaur Ranouta, RN, FCN.
          </h2>

          <p>
           Beant Kaur Ranouta is a dedicated Registered Nurse (RN)
  and Certified Foot Care Nurse (FCN). With a background
  in healthcare and senior care, along with advanced
  training in medical foot care, she provides gentle,
  professional nursing foot care in the comfort of your home.
          </p>

          <p>
             Her practice focuses on supporting mobility, preventative foot
    care, and helping clients feel confident and comfortable in
    their daily lives.
          </p>

          <div className="qualification-box">

            <h3>
              Qualifications
            </h3>

           <ul className="qualification-list">
      <li>Registered Nurse (RN)</li>
      <li>Certified Foot Care Nurse (FCN)</li>
      
      <li>
        Skilled in diabetic foot care, nail and skin conditions,
        and preventative education
      </li>
      <li>
        Mobile provider offering home-based foot care services
      </li>
    </ul>

          </div>

        </div>

      </section>


{/* DIRECT BILLING */}
<section id="insurance" className="insurance-section">

  <div className="insurance-content">

    <p className="small-heading">
      Insurance &amp; Payment
    </p>

    <h2>
      Direct billing made simple.
    </h2>

    <p>
      We offer direct billing to most major insurance
      providers, making your foot care experience
      easier and more convenient.
    </p>

    <p>
      If your plan is eligible, we submit your claim
      electronically at the end of your visit.
      You only pay the portion your insurance
      plan does not cover.
    </p>

    <p className="insurance-note">
      Coverage and eligibility depend on your
      individual insurance plan.
    </p>

    <a href="#contact" className="primary-button">
      Ask About Direct Billing
    </a>

  </div>

  <div className="insurance-visual">
    <div className="insurance-icon">✓</div>
    <h3>Less paperwork. More peace of mind.</h3>
    <p>Convenient insurance claim submission for eligible plans.</p>
  </div>

</section>

      {/* CONTACT */}
    {/* CONTACT */}
<section id="contact" className="contact-section">

  <div className="contact-info">

    <p className="small-heading contact-small-heading">
      Book an Appointment
    </p>

    <h2>
      Ready to give your feet the care they deserve?
    </h2>

    <p className="contact-description">
      River Park Nursing Foot Care provides professional
      mobile foot care in the comfort of your home.
      Get in touch to ask a question or book an appointment.
    </p>


    <div className="contact-details">

      <div className="contact-item">
        <span>Phone</span>

        <a href="tel:+12049987190">
          (204) 998-7190
        </a>
      </div>


      <div className="contact-item">
        <span>Email</span>

        <a href="mailto:riverparknfootcare@outlook.com">
          riverparknfootcare@outlook.com
        </a>
      </div>


      <div className="contact-item">
        <span>Service</span>

        <p>Mobile / Home-Based Foot Care</p>
      </div>


      <div className="contact-item">
        <span>Payment</span>

        <p>Cash • Credit • E-Transfer • Direct Insurance Billing</p>

        <p className="payment-note">
  Direct billing available with most major insurance providers,
  subject to plan eligibility and coverage.
</p>
      </div>

    </div>


    <div className="contact-buttons">

      <a
        href="tel:+12049987190"
        className="contact-button"
      >
        Call to Book
      </a>

      <a
        href="mailto:riverparknfootcare@outlook.com"
        className="email-button"
      >
        Send an Email
      </a>

    </div>

  </div>


  <div className="contact-side-card">

    <p className="contact-card-label">
      MOBILE FOOT CARE
    </p>

    <h3>
      Care that comes to you.
    </h3>

    <p>
      Receive professional nursing foot care without having
      to leave the comfort of your home.
    </p>

    <div className="contact-divider"></div>

    <p className="contact-card-note">
      Call or email River Park Nursing Foot Care to discuss
      your needs and arrange an appointment.
    </p>

  </div>

</section>
 


      {/* FOOTER */}
      <footer className="site-footer">

  <div className="footer-brand">

    <strong>
      River Park Nursing Foot Care
    </strong>

    <p>
      Professional mobile nursing foot care.
    </p>

  </div>


  <div className="footer-contact">

    <a href="tel:+12049987190">
      (204) 998-7190
    </a>

    <a href="mailto:riverparknfootcare@outlook.com">
      riverparknfootcare@outlook.com
    </a>

  </div>


  <div className="footer-copyright">

    <p>
      © 2026 River Park Nursing Foot Care
    </p>

  </div>

</footer>


    </main>
  );
}