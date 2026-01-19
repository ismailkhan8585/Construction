export default function AboutPage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Building reliable, sustainable, and modern construction solutions
            that strengthen communities and inspire growth.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a professional construction company committed to delivering
              high-quality infrastructure and building solutions. Our expertise
              spans residential, commercial, and public sector projects, where
              we apply modern engineering practices and efficient project
              management.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From planning to execution, we focus on transparency, safety, and
              long-term value, ensuring every project meets the highest
              standards of quality and performance.
            </p>
          </div>

          {/* Right Content */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Core Focus
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Residential & Commercial Construction</li>
              <li>✔ Infrastructure Development</li>
              <li>✔ Project Planning & Management</li>
              <li>✔ Renovation & Modernization</li>
              <li>✔ Safety & Quality Assurance</li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver reliable, innovative, and sustainable construction
              solutions that exceed client expectations while contributing
              positively to community development.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted leader in the construction industry by setting
              benchmarks in quality, safety, and modern engineering excellence.
            </p>
          </div>
        </div>

       

      </div>
    </section>
  );
}
