import Layout from "@/components/Layout";

const PrivacyPage = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-heading font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: March 6, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                OZO Cab collects information you provide directly, such as your name, email address, phone number, payment information, and location data when you use our services. We also automatically collect usage data, device information, and trip details to improve our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use collected information to provide and improve our transportation services, process payments, communicate with you about rides and promotions, ensure safety and security, comply with legal obligations, and personalize your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We share your information with drivers to facilitate rides, payment processors to handle transactions, law enforcement when required by law, and service providers who assist in our operations. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or delete your personal information. You can manage your privacy settings in the app or contact us at privacy@ozocab.com for assistance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at privacy@ozocab.com or write to us at OZO Cab Privacy Team, 123 Transport Ave, City.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
