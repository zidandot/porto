import Link from "next/link";
import Button from "./Button";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flew-row w-full justify-between py-4 px-16 shadow-sm items-center fixed z-50 bg-neutral-100">
      <div>Navbar</div>
      <div>
        <ul className="flex flex-row gap-20">
          <li><Link href={'/login'}>Home</Link></li>
          <li><Link href={'/login'}>About Me</Link></li>
          <li>
            <Link className="flex flex-row align-middle gap-1" href={'/login'}>Projects <ChevronDown className="text-neutral-1000"/></Link>
          </li>
          <li><Link href={'/login'}>Footer</Link></li>
        </ul>
      </div>
      <Link href={'/login'}>
        <Button children="Contact Me" />
      </Link>
    </nav>
  );
}
