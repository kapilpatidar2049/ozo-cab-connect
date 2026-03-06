import Layout from "@/components/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-heading font-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-12">Last updated: March 6, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using OZO Cab services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services. These terms apply to all users, including riders and drivers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Use of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                OZO Cab provides a platform connecting riders with independent drivers. We are not a transportation provider. You must be at least 18 years old to use our services. You are responsible for maintaining the confidentiality of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Payments & Pricing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fares are calculated based on distance, time, and demand. You agree to pay all charges incurred through your account. Cancellation fees may apply. We reserve the right to adjust pricing with prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users must treat drivers and other passengers with respect. Any form of harassment, discrimination, or illegal activity will result in immediate account suspension. You must comply with all applicable laws during your ride.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                OZO Cab is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms. We will notify users of significant changes via email or in-app notification.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
