import { motion } from "framer-motion";
import { DollarSign, Clock, Shield, Car, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const perks = [
  { icon: DollarSign, title: "Competitive Earnings", desc: "Earn more with competitive fares and keep a larger share of every trip." },
  { icon: Clock, title: "Flexible Schedule", desc: "Drive when you want. Set your own hours and be your own boss." },
  { icon: Shield, title: "Insurance Coverage", desc: "Comprehensive insurance coverage while you're on a trip." },
  { icon: Car, title: "Vehicle Support", desc: "Access to maintenance discounts and vehicle financing programs." },
  { icon: Users, title: "Driver Community", desc: "Join a supportive community of thousands of OZO drivers." },
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Earn bonuses, incentives, and unlock premium ride tiers." },
];

const requirements = [
  "Valid driver's license (minimum 1 year)",
  "Clean driving record",
  "Pass background check",
  "Vehicle inspection clearance",
  "Smartphone with data plan",
  "Minimum age of 21 years",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const DriverPage = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Drive with <span className="text-secondary">OZO Cab</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Earn on your own terms. Join thousands of drivers who choose OZO Cab for better pay, flexible hours, and a supportive community.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8">
              Apply to Drive
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-3xl font-heading font-bold text-center mb-16">
            Driver Perks
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.08 }} className="p-8 rounded-2xl bg-card border hover:border-secondary/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeInUp} className="text-3xl font-heading font-bold text-center mb-12">
            Requirements
          </motion.h2>
          <motion.div {...fadeInUp} className="bg-card rounded-2xl border p-8">
            <ul className="space-y-4">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DriverPage;
