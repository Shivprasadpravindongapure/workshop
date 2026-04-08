import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="about-page page-content">
      <div className="container">
        <header className="about-page__header">
          <h1 className="about-page__title">About FOSSEE Workshops</h1>
        </header>

        <section className="about-section">
          <h2 className="about-section__heading">What is FOSSEE?</h2>
          <p className="about-section__text">
            FOSSEE (Free/Libre and Open Source Software for Education) is a project funded by the
            National Mission on Education through ICT, Ministry of Education, Government of India.
            It promotes the use of open-source tools in science and engineering education.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section__heading">Workshop Goals</h2>
          <ul className="about-section__list">
            <li>Provide free, hands-on technical training to students across India.</li>
            <li>Build skills in tools like Python, Scilab, OpenFOAM, and more.</li>
            <li>Connect learners with FOSSEE's broader open-source community.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2 className="about-section__heading">Contact</h2>
          <p className="about-section__text">
            For queries, email us at{' '}
            <a href="mailto:workshops@fossee.in" className="about-link">
              workshops@fossee.in
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
