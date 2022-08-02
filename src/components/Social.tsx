import { Git } from "./Icons/Git";
import { Insta } from "./Icons/Insta";
import { Linkedin } from "./Icons/Linkedin";
import { Mail } from "./Icons/Mail";
import {useStickyBox} from "react-sticky-box";

export function Social() {
  const stickyRef = useStickyBox({offsetTop: 20, offsetBottom: 10})
  return (
      <aside ref={stickyRef} className="flex flex-col justify-around pr-7 min-h-2 max-h-56">
        <a href="https://www.linkedin.com/in/cindelsousa/">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/cindel.exe/">
          <Insta />
        </a>
        <a href="https://github.com/Cindelevelyn">
          <Git />
        </a>
        <a href="">
          <Mail />
        </a>
      </aside>
  );
}
