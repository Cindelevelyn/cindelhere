import { Header } from "../components/Header";
import { Social } from "../components/Social";
import { About } from "./About";
import { Home } from "./Home";

import { Projects } from "./Projects";

export function Index() {
  return (
    <div className="h-[100vh] snap-y snap-mandatory overflow-y-scroll">
      <div id="home" className="bg-bege flex flex-col snap-start">
        <div className="bg-bege sticky top-0">
          <Header
            title="&lsaquo;home"
            title2="&lsaquo;about&rsaquo;"
            title3="&lsaquo;projects&rsaquo;"
            title4="&lsaquo;experience&rsaquo;"
            flag="1"
          />
        </div>
        <div className="snap-start">
          <Home />
          <div id="about" className="snap-start">
            <About />
          </div>
          <div id="projects" className="snap-start">
            <Projects />
          </div>

          <div className="flex right-0 h-full fixed mt-60">
            <Social />
          </div>
        </div>
      </div>
      <footer className="bg-bege text-gray opacity-30 text-center">
        @Cindel Evelyn
      </footer>
    </div>
  );
}
