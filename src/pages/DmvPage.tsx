import { motion } from "framer-motion";
import { FileCheck, AlertTriangle, CheckCircle, Info } from "lucide-react";
import Layout from "@/components/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const dmvItems = [
  {
    icon: FileCheck,
    title: "Vehicle Registration",
    desc: "All vehicles must be registered with the local DMV and carry valid registration documents at all times during service.",
  },
  {
    icon: CheckCircle,
    title: "Driver License Verification",
    desc: "OZO Cab verifies all driver licenses through the DMV database to ensure validity and clean driving records.",
  },
  {
    icon: AlertTriangle,
    title: "Vehicle Inspection",
    desc: "Annual vehicle inspections as per DMV requirements are mandatory. Vehicles must pass safety and emissions tests.",
  },
  {
    icon: Info,
    title: "Insurance Requirements",
    desc: "All vehicles must carry minimum insurance coverage as mandated by DMV regulations and state law.",
  },
];

const DmvPage = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-muted">
        <div className="container">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">DMV Compliance</h1>
            <p className="text-lg text-muted-foreground">
              OZO Cab is committed to full compliance with all DMV regulations and requirements. Safety and legality are our top priorities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {dmvItems.map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="flex gap-5 p-8 rounded-2xl bg-card border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-16 p-8 rounded-2xl bg-secondary/10 border border-secondary/20">
            <h2 className="text-2xl font-heading font-semibold mb-4">Need DMV Assistance?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you're a driver partner and need help with DMV-related documentation, our support team is here to assist. Contact us at <a href="mailto:dmv@ozocab.com" className="text-primary font-medium hover:underline">dmv@ozocab.com</a> or visit your nearest OZO Cab hub for in-person assistance.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DmvPage;
