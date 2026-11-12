import { FaGithub } from "react-icons/fa";
import Button from "./Button";

export default function ServiceBox({ children }: any) {
  return (
    <div>
      <div className="flex rounded-full border-neutral-200 border-2 h-13 w-13 items-center justify-center">
        <FaGithub className="h-8 w-8" />
      </div>
      <h3>{children}</h3>
      <p>Building responsive website</p>
      <Button children="Learn more" />
    </div>
  );
}
