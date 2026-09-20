import Link from "next/link";
import Button from "./Button";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flew-row w-full justify-between py-4 px-16 shadow-sm items-center">
      <div>Navbar</div>
      <div>
        <ul className="flex flex-row gap-20">
          <li>Home</li>
          <li>About Me</li>
          <li className="flex flex-row align-middle gap-1">
            Projects <ChevronDown className="text-neutral-1000"/>
          </li>
          <li>Footer</li>
        </ul>
      </div>
      <Link href={"/login"}>
        <Button children="Contact Me" />
      </Link>
    </nav>
  );
}
