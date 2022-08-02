import { Header } from "../components/Header";
import { Social } from "../components/Social";
import { About } from "./About";
import { Home } from "./Home";

import { Projects } from "./Projects";

export function Index() {
  return (
    <div id="home" className="bg-bege flex flex-col">
      <div className="bg-bege sticky top-0">
        <Header
          title="&lsaquo;home"
          title2="&lsaquo;about&rsaquo;"
          title3="&lsaquo;projects&rsaquo;"
          title4="&lsaquo;experience&rsaquo;"
          flag="1"
        />
      </div>
      <div>
        <Home />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div className="flex right-0 h-full fixed mt-60">
          <Social />
        </div>
      </div>
      <footer className="bg-bege text-gray opacity-30 text-center">
        @Cindel Evelyn
      </footer>
    </div>
  );
}
