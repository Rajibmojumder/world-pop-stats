export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Accuracy</h2>
              <p className="text-gray-600">
                While we strive to provide accurate and up-to-date information, WorldPopStats.com makes no representations or warranties about the completeness, reliability, or accuracy of the data presented on this website. Any reliance you place on such information is strictly at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">External Links</h2>
              <p className="text-gray-600">
                Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Sources</h2>
              <p className="text-gray-600">
                The population statistics and related data presented on WorldPopStats.com are collected from various public sources, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>United Nations Population Division</li>
                <li>World Bank Open Data</li>
                <li>National Statistical Offices</li>
                <li>Other international organizations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">No Professional Advice</h2>
              <p className="text-gray-600">
                The information provided on this website is for general informational purposes only. It should not be construed as professional advice. Consult with appropriate experts before making any decisions based on this data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about this disclaimer, please contact us at support@worldpopstats.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}