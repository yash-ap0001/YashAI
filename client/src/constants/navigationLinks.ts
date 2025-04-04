export type NavLink = {
  label: string;
  href: string;
  isButton?: boolean;
};

export const navigationLinks: NavLink[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Get Started",
    href: "#contact",
    isButton: true,
  },
];
