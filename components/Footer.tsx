import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "Cookie Policy", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "About", href: "#" },
        { label: "People", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Info", href: "#" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "Mobile app", href: "#" },
        { label: "Site map", href: "#" },
        { label: "Sign in", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      title: "Discover",
      links: [
        { label: "Cheap flights", href: "#" },
        { label: "Countries", href: "#" },
        { label: "Airports", href: "#" },
        { label: "Airlines", href: "#" },
      ],
    },
  ];

  return (
    <footer className="py-12 text-white bg-[#05203C]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-y-10 gap-x-6 grid-cols-2 md:grid-cols-4 mb-6 pb-6 border-b border-slate-300">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-sm text-center space-y-1">
          <p>Compare and book cheap flights with AirNexa</p>
          <p>© AirNexa Ltd 2005 – 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
