import React from "react";

interface HeaderProps {
  title: string;
  title2: string;
  title3: string;
  title4: string;
  flag: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  title2,
  title3,
  title4,
  flag,
}) => {
  return (
      <div className="flex flex-row justify-center items-center text-white text-3xl bg-bege">
        <ul className="flex flex-row justify-evenly items-center w-full m-4 font-semibold leading-relaxed font-sans">
          <li className={`${flag == "1" ? "text-rosa" : "text-darkBlue"}`}>
            <a className="hover:text-rosa" href="#home">{title}</a>
          </li>
          <li className={`${flag == "2" ? "text-rosa" : "text-darkBlue"}`}>
            <a className="hover:text-rosa" href="#about">{title2}</a>
          </li>
          <li className={`${flag == "3" ? "text-rosa" : "text-darkBlue"}`}>
            <a className="hover:text-rosa" href="#projects">{title3}</a>
          </li>

          <li className={`${flag == "4" ? "text-rosa" : "text-darkBlue"}`}>
            <a className="hover:text-rosa" href="">{title4}</a>
          </li>
        </ul>
      </div>
  );
}
