import Link from "next/link";
import { NavWrp, NavLink } from "./style";

const links = [
  {
    href: "/",
    title: "Notes App",
  },
  {
    href: "/add-notes",
    title: "Add Notes",
  },
];

const Navbar = () => {
  return (
    <NavWrp>
      {links.map((link) => {
        const { href, title } = link;
        return (
          <Link href={href} key={href}>
            <NavLink>{title}</NavLink>
          </Link>
        );
      })}
    </NavWrp>
  );
};

export default Navbar;
