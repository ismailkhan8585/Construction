export default function IntroductionPage() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building Strong Foundations for a Better Tomorrow
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We deliver high-quality construction and infrastructure solutions
            through modern engineering, reliable planning, and a commitment to
            excellence. From concept to completion, we build with trust,
            precision, and purpose.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-3xl font-bold text-gray-900">10+</h3>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-3xl font-bold text-gray-900">120+</h3>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-3xl font-bold text-gray-900">50+</h3>
            <p className="mt-2 text-gray-600">Skilled Professionals</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="mt-2 text-gray-600">Client Satisfaction</p>
          </div>

        </div>

        {/* Intro Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a professional construction company specializing in
              residential, commercial, and infrastructure projects. Our team
              applies innovative techniques, industry best practices, and
              strict safety standards to deliver projects that last.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every project we undertake reflects our dedication to quality,
              efficiency, and long-term value for our clients and communities.
            </p>
          </div>

          {/* Right Box */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Proven expertise in construction management</li>
              <li>✔ Commitment to quality, safety, and sustainability</li>
              <li>✔ Transparent processes and timely delivery</li>
              <li>✔ Client-focused and results-driven approach</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/projects"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
          >
            Start Your Project With Us
          </a>
        </div>

      </div>
    </section>
  );
}
