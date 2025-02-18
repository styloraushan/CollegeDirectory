import React from "react";
import styles from "./Home.module.css"; // Import the CSS module

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Navigation Bar */}
      <nav className={styles.homeNavbar}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/8074/8074794.png"
          alt="College Logo"
          className={styles.homeLogo}
        />
        <ul>
          <li>
            <a href="#departments">Departments</a>
          </li>
          <li>
            <a href="#faculty">Faculty</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#campus">Campus</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <section id="get-started" className={styles.getStartedContainer}>
        <div className={styles.getStartedText}>
          <h1 className={styles.getStartedTitle}>Start Your Journey with Us</h1>
          <p className={styles.getStartedSlogan}>
            Discover the endless possibilities at our college. Your future
            begins here!
          </p>
          <a href="/login" className={styles.getStartedButton}>
            Get Started
          </a>
        </div>
        <div className={styles.getStartedImageContainer}>
          <img
            src="data:image/jpeg;base64,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"
            alt="Get Started"
            className={styles.getStartedImage}
          />
        </div>
      </section>
      {/* Section: Departments */}
      <section id="departments" className={styles.homeSectionContainer}>
        <h1 className={styles.homeSectionTitle}>Departments</h1>
        <p className={styles.homeSectionDescription}>
          Explore different departments in the college, ranging from Computer
          Science to Humanities.
        </p>

        {/* Department List */}
        <div className={styles.departmentList}>
          <div className={styles.departmentItem}>
            <img
              src="../images/b.png"
              alt="Biomedical Engineering"
              className={styles.departmentLogo}
            />
            <h2 className={styles.departmentName}>
              Biomedical Engineering (BME)
            </h2>
            <p className={styles.departmentDescription}>
              Integrating engineering principles with medical sciences to
              develop healthcare technologies.
            </p>
            <a href="/departments/bme" className={styles.departmentLink}>
              Learn More
            </a>
          </div>

          <div className={styles.departmentItem}>
            <img
              src="../images/c.png"
              alt="Computer Science Engineering"
              className={styles.departmentLogo}
            />
            <h2 className={styles.departmentName}>
              Computer Science Engineering (CSE)
            </h2>
            <p className={styles.departmentDescription}>
              Focus on software development, algorithms, and data structures.
              Prepare for a career in tech.
            </p>
            <a href="/departments/cse" className={styles.departmentLink}>
              Learn More
            </a>
          </div>

          <div className={styles.departmentItem}>
            <img
              src="../images/a.png"
              alt="Artificial Intelligence and Machine Learning"
              className={styles.departmentLogo}
            />
            <h2 className={styles.departmentName}>
              Artificial Intelligence and Machine Learning (AIML)
            </h2>
            <p className={styles.departmentDescription}>
              Specializing in the development of intelligent systems and
              algorithms to analyze data.
            </p>
            <a href="/departments/aiml" className={styles.departmentLink}>
              Learn More
            </a>
          </div>

          <div className={styles.departmentItem}>
            <img
              src="../images/m.png"
              alt="Mechanical Engineering"
              className={styles.departmentLogo}
            />
            <h2 className={styles.departmentName}>
              Mechanical Engineering (ME)
            </h2>
            <p className={styles.departmentDescription}>
              Focus on design, analysis, and manufacturing processes. Get
              hands-on experience in the lab.
            </p>
            <a href="/departments/me" className={styles.departmentLink}>
              Learn More
            </a>
          </div>

          <div className={styles.departmentItem}>
            <img
              src="../images/e.png"
              alt="Electrical and Electronics Engineering"
              className={styles.departmentLogo}
            />
            <h2 className={styles.departmentName}>
              Electrical and Electronics Engineering (EEE)
            </h2>
            <p className={styles.departmentDescription}>
              Study the principles of electricity, electronics, and
              electromagnetism for technological innovations.
            </p>
            <a href="/departments/eee" className={styles.departmentLink}>
              Learn More
            </a>
          </div>

          <div className={styles.departmentItem}>
            <img
              src="../images/civil.png"
              alt="Civil Engineering"
              className={styles.departmentLogo}
            />
            <h2 className={styles.departmentName}>Civil Engineering (CE)</h2>
            <p className={styles.departmentDescription}>
              Focus on the design, construction, and maintenance of
              infrastructure projects and systems.
            </p>
            <a href="/departments/civil" className={styles.departmentLink}>
              Learn More
            </a>
          </div>

          {/* Add more departments as needed */}
        </div>
      </section>

      {/* Section: Faculty */}
      <section id="faculty" className={styles.homeSectionContainer}>
        <h1 className={styles.homeSectionTitle}>Faculty</h1>
        <p className={styles.homeSectionDescription}>
          Meet our experienced faculty members who are experts in their fields.
        </p>

        {/* Faculty Member Profiles */}
        <div className={styles.facultyProfiles}>
          <div className={styles.facultyMember}>
            <img
              src="../images/t1.png"
              alt="Faculty Member 1"
              className={styles.facultyImage}
            />
            <h2 className={styles.facultyName}>Dr. John Doe</h2>
            <p className={styles.facultyTitle}>Professor of Computer Science</p>
            <p className={styles.facultyDescription}>
              An expert in artificial intelligence and machine learning with
              over 15 years of teaching experience.
            </p>
          </div>

          <div className={styles.facultyMember}>
            <img
              src="../images/t1.png"
              alt="Faculty Member 2"
              className={styles.facultyImage}
            />
            <h2 className={styles.facultyName}>Dr. Jane Smith</h2>
            <p className={styles.facultyTitle}>
              Associate Professor of Mathematics
            </p>
            <p className={styles.facultyDescription}>
              Specializes in applied mathematics and has published numerous
              research papers in top journals.
            </p>
          </div>

          <div className={styles.facultyMember}>
            <img
              src="../images/t1.png"
              alt="Faculty Member 3"
              className={styles.facultyImage}
            />
            <h2 className={styles.facultyName}>Dr. Emily Johnson</h2>
            <p className={styles.facultyTitle}>Senior Lecturer in Physics</p>
            <p className={styles.facultyDescription}>
              Passionate about teaching quantum mechanics and mentoring students
              in research projects.
            </p>
          </div>

          {/* Add more faculty members as needed */}
        </div>

        {/* Quotes or Testimonials */}
        <div className={styles.facultyQuotes}>
          <h2 className={styles.quotesTitle}>Words from Our Faculty</h2>
          <blockquote className={styles.quote}>
            "Teaching is the greatest act of optimism." -{" "}
            <strong>Dr. John Doe</strong>
          </blockquote>
          <blockquote className={styles.quote}>
            "Our mission is to inspire students to achieve their best." -{" "}
            <strong>Dr. Jane Smith</strong>
          </blockquote>
        </div>
      </section>

      {/* Section: Courses */}
      <section id="courses" className={styles.homeSectionContainer}>
        <h1 className={styles.homeSectionTitle}>Courses</h1>
        <p className={styles.homeSectionDescription}>
          Browse through a wide variety of courses that we offer across multiple
          disciplines.
        </p>

        {/* List of Sample Courses */}
        <div className={styles.coursesList}>
          <div className={styles.courseItem}>
            <h2 className={styles.courseTitle}>Computer Science</h2>
            <p className={styles.courseDescription}>
              Dive into programming, data structures, algorithms, and software
              development.
            </p>
            <button className={styles.courseButton}>View Details</button>
          </div>
          <div className={styles.courseItem}>
            <h2 className={styles.courseTitle}>Business Administration</h2>
            <p className={styles.courseDescription}>
              Learn about management, marketing, finance, and entrepreneurship.
            </p>
            <button className={styles.courseButton}>View Details</button>
          </div>
          <div className={styles.courseItem}>
            <h2 className={styles.courseTitle}>Mechanical Engineering</h2>
            <p className={styles.courseDescription}>
              Explore mechanics, thermodynamics, materials science, and design.
            </p>
            <button className={styles.courseButton}>View Details</button>
          </div>
          <div className={styles.courseItem}>
            <h2 className={styles.courseTitle}>Electrical Engineering</h2>
            <p className={styles.courseDescription}>
              Understand circuits, electronics, control systems, and
              electromagnetism.
            </p>
            <button className={styles.courseButton}>View Details</button>
          </div>
        </div>
      </section>

      {/* Section: Campus */}
      <section id="campus" className={styles.homeSectionContainer}>
        <h1 className={styles.homeSectionTitle}>Campus</h1>
        <p className={styles.homeSectionDescription}>
          Discover our beautiful campus with state-of-the-art facilities and
          infrastructure.
        </p>

        {/* Image Gallery */}
        <div className={styles.imageGallery}>
          <img
            src="../images/c1.png"
            alt="Campus View 1"
            className={styles.galleryImage}
          />
          <img
            src="../images/c2.png"
            alt="Campus View 2"
            className={styles.galleryImage}
          />
          <img
            src="../images/c3.png"
            alt="Campus View 3"
            className={styles.galleryImage}
          />
        </div>

        {/* Campus Facilities */}
        <div className={styles.facilitiesList}>
          <div className={styles.facilityItem}>
            <h2 className={styles.facilityTitle}>Library</h2>
            <p className={styles.facilityDescription}>
              A spacious library equipped with modern resources and study areas.
            </p>
          </div>
          <div className={styles.facilityItem}>
            <h2 className={styles.facilityTitle}>Sports Complex</h2>
            <p className={styles.facilityDescription}>
              State-of-the-art facilities for various sports and recreational
              activities.
            </p>
          </div>
          <div className={styles.facilityItem}>
            <h2 className={styles.facilityTitle}>Laboratories</h2>
            <p className={styles.facilityDescription}>
              Advanced laboratories for practical learning and research.
            </p>
          </div>
          <div className={styles.facilityItem}>
            <h2 className={styles.facilityTitle}>Cafeteria</h2>
            <p className={styles.facilityDescription}>
              A cozy cafeteria offering a variety of food options for students.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className={styles.testimonials}>
          <h2 className={styles.testimonialsTitle}>What Our Students Say</h2>
          <blockquote className={styles.testimonial}>
            "The campus is beautiful and has all the resources I need to
            succeed!" - <strong>John Doe</strong>
          </blockquote>
          <blockquote className={styles.testimonial}>
            "I love studying here! The facilities are top-notch." -{" "}
            <strong>Jane Smith</strong>
          </blockquote>
        </div>
      </section>

      <section id="contact" className={styles.homeSectionContainer}>
        <h1 className={styles.homeSectionTitle}>Contact Us</h1>
        <p className={styles.homeSectionDescription}>
          Get in touch with us for more information or inquiries regarding
          admissions.
        </p>

        {/* Contact Form */}
        <div className={styles.contactFormContainer}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.formInput}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className={styles.formInput}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMediaLinks}>
          <h2 className={styles.socialMediaTitle}>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="./images/f.png" alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="./images/t.png" alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="./images/i.png" alt="Instagram" />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
