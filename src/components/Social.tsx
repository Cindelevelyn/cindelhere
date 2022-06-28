import { Git } from "./Icons/Git";
import { Insta } from "./Icons/Insta";
import { Linkedin } from "./Icons/Linkedin";
import { Mail } from "./Icons/Mail";

export function Social() {
  return (
      <div className="flex flex-col justify-around">
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
      </div>
  );
}
