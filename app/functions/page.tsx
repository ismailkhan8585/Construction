export default function FunctionsPage() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Functions
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We perform a wide range of construction and development functions
            with a focus on quality, transparency, and sustainable growth.
          </p>
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Project Planning & Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Preparing detailed project plans, technical designs, cost
              estimates, and timelines to ensure smooth execution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Construction & Execution
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Executing construction works according to approved designs,
              specifications, and safety standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Infrastructure Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Development of roads, buildings, public facilities, and essential
              infrastructure projects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Quality Control & Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ensuring high-quality workmanship through inspections, testing,
              and compliance with industry standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Safety Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Implementing strict safety policies and procedures to protect
              workers, stakeholders, and the public.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Maintenance & Rehabilitation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Maintenance, repair, and rehabilitation of existing structures to
              extend service life and performance.
            </p>
          </div>

        </div>

        {/* Additional Responsibilities */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Additional Responsibilities
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Alongside construction activities, we are responsible for
              coordinating with stakeholders, managing resources efficiently,
              and ensuring compliance with legal and environmental regulations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our structured processes allow us to deliver projects on time
              while maintaining transparency and accountability.
            </p>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Key Focus Areas
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Efficient project delivery</li>
              <li>✔ Sustainable construction practices</li>
              <li>✔ Cost and time management</li>
              <li>✔ Regulatory compliance</li>
              <li>✔ Community development</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
