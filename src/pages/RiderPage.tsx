import { motion } from "framer-motion";
import { MapPin, CreditCard, Star, Shield, Clock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const steps = [
  { icon: Smartphone, title: "Open the App", desc: "Download OZO Cab from App Store or Google Play and create your account." },
  { icon: MapPin, title: "Set Your Destination", desc: "Enter your pickup and drop-off locations to get instant fare estimates." },
  { icon: CreditCard, title: "Confirm & Pay", desc: "Choose your ride type, confirm booking, and pay securely in-app or with cash." },
];

const benefits = [
  { icon: Shield, title: "Verified Drivers", desc: "All drivers undergo thorough background checks and training." },
  { icon: Clock, title: "Real-Time Tracking", desc: "Track your ride in real-time and share trip details with loved ones." },
  { icon: Star, title: "Rate Your Experience", desc: "Help us maintain quality by rating your driver after each trip." },
  { icon: CreditCard, title: "Transparent Pricing", desc: "No hidden fees. See your fare before you book." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const RiderPage = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ride with <span className="text-primary">OZO Cab</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Safe, comfortable, and affordable rides at your fingertips. Whether it's a daily commute or a special occasion, we've got you covered.
            </p>
            <Button size="lg" className="bg-primary text-lg px-8">Download the App</Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-3xl font-heading font-bold text-center mb-16">
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-sm font-medium text-secondary mb-2">Step {i + 1}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-3xl font-heading font-bold text-center mb-16">
            Rider Benefits
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.08 }} className="flex gap-4 p-6 rounded-xl bg-card border">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RiderPage;
