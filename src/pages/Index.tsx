import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Clock, MapPin, Star, Car, Users, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Shield, title: "Safe & Secure", desc: "Verified drivers, real-time tracking, and 24/7 support for your peace of mind." },
  { icon: Clock, title: "Always On Time", desc: "Punctual pickups with real-time ETAs. Your time matters to us." },
  { icon: MapPin, title: "City-Wide Coverage", desc: "From downtown to suburbs, OZO Cab covers every corner of the city." },
  { icon: Star, title: "Top-Rated Drivers", desc: "Professional, courteous drivers with consistently high ratings." },
  { icon: Car, title: "Premium Fleet", desc: "Clean, well-maintained vehicles ranging from economy to luxury." },
  { icon: Users, title: "For Everyone", desc: "Accessible rides for individuals, families, and corporate clients." },
];

const stats = [
  { value: "50K+", label: "Happy Riders" },
  { value: "5K+", label: "Active Drivers" },
  { value: "100+", label: "Cities Covered" },
  { value: "4.9", label: "Average Rating" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-brown/90 via-brand-brown/70 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 border border-secondary/30 backdrop-blur-sm">
              🚖 Always There For You
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Your Ride,{" "}
              <span className="text-secondary">Your Way</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              Book a safe, reliable, and affordable ride in seconds. OZO Cab connects you with trusted drivers across the city.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" asChild>
                <Link to="/rider">
                  Book a Ride <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/driver">Drive with Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose <span className="text-primary">OZO Cab</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We're committed to providing the best ride experience with safety, reliability, and comfort.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="group p-8 rounded-2xl bg-card border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-brand-brown">
        <div className="container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Ride?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Download the OZO Cab app or book online. Your next ride is just a tap away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8">
                <Phone className="w-5 h-5 mr-2" /> Download App
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8" asChild>
                <Link to="/rider">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
