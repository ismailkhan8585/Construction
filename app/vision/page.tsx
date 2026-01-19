export default function VisionPage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Vision
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Shaping the future of construction through innovation, sustainability,
            and excellence — building infrastructure that empowers communities
            and stands the test of time.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Vision Statement
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            To become a trusted and leading construction organization recognized
            for quality workmanship, modern engineering practices, and ethical
            standards, while delivering sustainable development for future
            generations.
          </p>
        </div>

        {/* Vision Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          
          <div className="border rounded-xl p-6 text-center hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Continuously raising industry standards through superior quality,
              precision, and professional execution.
            </p>
          </div>

          <div className="border rounded-xl p-6 text-center hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Embracing modern technologies, smart planning, and innovative
              solutions to improve efficiency and outcomes.
            </p>
          </div>

          <div className="border rounded-xl p-6 text-center hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sustainability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Building responsibly with environmentally conscious practices
              that support long-term growth and community well-being.
            </p>
          </div>

        </div>

        {/* Long-Term Focus */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Long-Term Focus
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We aim to strengthen our position in the construction industry by
              delivering projects that balance technical excellence, economic
              value, and social responsibility.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through continuous improvement and collaboration, we strive to
              create infrastructure that enhances quality of life and drives
              sustainable development.
            </p>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Our Promise
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>✔ Commitment to quality and safety</li>
              <li>✔ Ethical and transparent operations</li>
              <li>✔ Client-focused project delivery</li>
              <li>✔ Future-ready construction solutions</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
