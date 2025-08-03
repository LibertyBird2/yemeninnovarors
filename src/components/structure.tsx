"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import Image from "next/image";
import FooterItem from "./FooterItem";
import Link from "next/link";

const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Events", link: "/events"},
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

interface HeaderProps {
  logo: string;
  title: string
}
interface FooterProps {
  title: string;
  description: string;
  services: object;
  contacts: object;
}

export const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src={`/images/logo/${logo}`}
          alt={`${title} logo`}
          width={35}
          height={35}
          className="h-17 w-8"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="" >
        {pages.map((page, i) => (
          <NavbarLink as={Link} key={i} href={page.link} className={`md:py-2 ${page.label === "Contact" && "bg-brand-orange hover:bg-brand-orange-light text-white btn-hover md:px-2 rounded"}`}>
            {page.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export const Footer: React.FC<FooterProps> = ({
  title,
  description,
  services,
  contacts,
}) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterItem head={title} text={description} />
          <FooterItem head="Quick Links" items={pages} />
          <FooterItem head="Services" items={services} />
          <FooterItem head="Contact Us" items={contacts} />
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear() + " " + title}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
