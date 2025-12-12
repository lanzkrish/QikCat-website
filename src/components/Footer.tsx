import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const links = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' }
    ],
    partners: [
      { name: 'Become a Partner', href: '#' },
      { name: 'Partner Dashboard', href: '#' },
      { name: 'Partner Resources', href: '#' },
      { name: 'Support', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' }
    ]
  };

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#ededec] to-[#fdfefc] border-t border-[#582e50]/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSd7goqTjDpE1XduFp0A8t6l3e2SR4KZGIyzVso" 
                alt="QikCat Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#582e50]/70 leading-relaxed mb-6 max-w-sm">
              The future of hyperlocal shopping. Connecting customers with local stores for instant delivery and discovery.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#582e50]/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@qikcat.com" className="hover:text-[#432758] transition-colors">
                  hello@qikcat.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#582e50]/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+911234567890" className="hover:text-[#432758] transition-colors">
                  +91 6372669269
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#582e50]/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bhubaneswar, Odisha, India</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#432758] mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[#582e50]/70 hover:text-[#432758] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-[#432758] mb-4">Partners</h3>
            <ul className="space-y-3">
              {links.partners.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[#582e50]/70 hover:text-[#432758] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#432758] mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[#582e50]/70 hover:text-[#432758] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#582e50]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-[#582e50]/5 hover:bg-[#582e50] text-[#582e50] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-[#582e50]/70">
            © 2025 QikCat
          </div>
        </div>
      </div>
    </footer>
  );
}