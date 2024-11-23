export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                WorldPopStats.com collects non-personal information to improve our services and user experience. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and navigation patterns</li>
                <li>Time and date of visits</li>
                <li>Referring websites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Improve our website functionality</li>
                <li>Analyze user behavior and preferences</li>
                <li>Enhance user experience</li>
                <li>Monitor website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-gray-600">
                We may use third-party services that collect, monitor, and analyze user data. These services have their own privacy policies regarding data collection and handling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact us at support@worldpopstats.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}