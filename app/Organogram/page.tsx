export default function OrganogramPage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Organogram
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our organizational structure ensures clear leadership, effective
            coordination, and efficient project execution across all levels.
          </p>
        </div>

        {/* Top Level */}
        <div className="mt-20 flex flex-col items-center">
          <div className="bg-gray-900 text-white px-8 py-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Managing Director</h2>
          </div>

          {/* Vertical Line */}
          <div className="w-px h-10 bg-gray-300"></div>

          {/* Second Level */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gray-50 border rounded-xl px-6 py-4 text-center">
              <h3 className="font-semibold text-gray-900">
                Director Operations
              </h3>
            </div>

            <div className="bg-gray-50 border rounded-xl px-6 py-4 text-center">
              <h3 className="font-semibold text-gray-900">
                Director Engineering
              </h3>
            </div>

            <div className="bg-gray-50 border rounded-xl px-6 py-4 text-center">
              <h3 className="font-semibold text-gray-900">
                Director Finance
              </h3>
            </div>

          </div>
        </div>

        {/* Connectors */}
        <div className="hidden md:flex justify-center mt-4">
          <div className="w-2/3 h-px bg-gray-300"></div>
        </div>

        {/* Third Level */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">
              Project Managers
            </h4>
            <p className="text-gray-600 text-sm">
              Planning, coordination, and execution of projects
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">
              Senior Engineers
            </h4>
            <p className="text-gray-600 text-sm">
              Technical supervision and quality assurance
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6 text-center shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">
              Accounts & Admin
            </h4>
            <p className="text-gray-600 text-sm">
              Financial management and administrative support
            </p>
          </div>

        </div>

        {/* Fourth Level */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-gray-50 border rounded-xl p-4 text-center">
            <h5 className="font-medium text-gray-900">
              Site Engineers
            </h5>
          </div>

          <div className="bg-gray-50 border rounded-xl p-4 text-center">
            <h5 className="font-medium text-gray-900">
              Supervisors
            </h5>
          </div>

          <div className="bg-gray-50 border rounded-xl p-4 text-center">
            <h5 className="font-medium text-gray-900">
              Safety Officers
            </h5>
          </div>

          <div className="bg-gray-50 border rounded-xl p-4 text-center">
            <h5 className="font-medium text-gray-900">
              Technical Staff
            </h5>
          </div>

        </div>

        {/* Description */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            This structured hierarchy enables effective communication,
            accountability, and timely decision-making, ensuring smooth project
            execution and high-quality outcomes across all operations.
          </p>
        </div>

      </div>
    </section>
  );
}
