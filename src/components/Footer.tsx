import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import ozoLogo from "@/assets/ozo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={ozoLogo} alt="OZO Cab" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-80 leading-relaxed">
              Always there for you. Your trusted ride partner for safe, reliable, and affordable transportation.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "For Riders", path: "/rider" },
                { label: "For Drivers", path: "/driver" },
                { label: "DMV", path: "/dmv" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms & Conditions", path: "/terms" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" /> +1 (234) 567-890
              </a>
              <a href="mailto:info@ozocab.com" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" /> info@ozocab.com
              </a>
              <span className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="w-4 h-4 shrink-0" /> 123 Transport Ave, City
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-60">
          © {new Date().getFullYear()} OZO Cab. All rights reserved. Always there for you.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
