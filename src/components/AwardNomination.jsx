const AwardNomination = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/assets/logo.png" 
                alt="CIO Horizon Logo" 
                className="h-12 w-auto"
              />
            </div>
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Award Nominations
            </h1>
            <div className="w-24 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognize excellence in technology leadership and innovation. 
              Submit your nominations for the CIO Horizon Awards.
            </p>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8">
                The award nomination process will be available soon. 
                Stay tuned for more details about our prestigious awards program.
              </p>
            </div>

            {/* Award Categories Preview */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Award Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl mb-4">🏆</div>
                  <h4 className="font-semibold text-gray-800 mb-2">CIO of the Year</h4>
                  <p className="text-sm text-gray-600">Outstanding technology leadership</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl mb-4">🚀</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Innovation Award</h4>
                  <p className="text-sm text-gray-600">Breakthrough technology solutions</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl mb-4">🌟</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Digital Transformation</h4>
                  <p className="text-sm text-gray-600">Excellence in organizational change</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl mb-4">🔒</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cybersecurity Excellence</h4>
                  <p className="text-sm text-gray-600">Outstanding security initiatives</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl mb-4">📊</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Data Analytics Impact</h4>
                  <p className="text-sm text-gray-600">Data-driven business outcomes</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-3xl mb-4">👥</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Team Leadership</h4>
                  <p className="text-sm text-gray-600">Exceptional team development</p>
                </div>
              </div>
            </div>

            {/* Notification Signup */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get Notified</h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when nominations open. 
                Enter your email to receive updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your.email@company.com"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Have questions about the awards program? 
              <a href="mailto:awards@ciohorizon.com" className="text-blue-600 hover:text-blue-800 ml-1">
                Contact our awards team
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AwardNomination;