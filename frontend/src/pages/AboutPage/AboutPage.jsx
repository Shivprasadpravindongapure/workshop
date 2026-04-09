import React from 'react';

const AboutPage = () => {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-20 pb-10">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">About FOSSEE Workshops</h1>
      </div>

      <section className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2 pb-1 border-b border-gray-100">
          What is FOSSEE?
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          FOSSEE (Free/Libre and Open Source Software for Education) is a project funded by the
          National Mission on Education through ICT, Ministry of Education, Government of India.
          It promotes the use of open-source tools in science and engineering education.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-base font-semibold text-gray-700 mb-2 pb-1 border-b border-gray-100">
          Workshop Goals
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
          <li>Provide free, hands-on technical training to students across India.</li>
          <li>Build skills in tools like Python, Scilab, OpenFOAM, and more.</li>
          <li>Connect learners with FOSSEE's broader open-source community.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-gray-700 mb-2 pb-1 border-b border-gray-100">
          Contact
        </h2>
        <p className="text-sm text-gray-500">
          For queries, email us at{' '}
          <a href="mailto:workshops@fossee.in" className="text-blue-600 font-medium">
            workshops@fossee.in
          </a>.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
