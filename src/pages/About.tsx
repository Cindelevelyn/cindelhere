import { Social } from "../components/Social";
import { Header } from "./../components/Header";

export function About() {
  return (
    <body className="bg-darkBlue min-h-[637px] h-full font-mono">
      <main className="flex flex-1 flex-col">
        <div className="flex flex-row justify-between m-9">
          <div className="flex flex-col">
            <p className="text-gray opacity-20">&lsaquo;h2&rsaquo;</p>
            <h2 className="text-brown flex text-4xl font-semibold font-mono">
              about me
            </h2>
            <p className="text-gray opacity-20">&lsaquo;h2/&rsaquo;</p>
            <p className="text-gray text-[22px]">
              I’m a computer engineering based in Brazil. <br></br>I have
              interest in <b>web development</b> and <b>UI/UX design</b>;
              <br></br>
              <br></br>
            </p>
            <p className="text-gray text-[18px] font-mono font-semibold">
              Here are some technologies I have been working before:
            </p>
            <p className="text-gray opacity-20">&lsaquo;ul&rsaquo;</p>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-brown">&lsaquo;li&rsaquo;</p>
                  <p className="text-gray ml-3">HTML;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-brown">&lsaquo;li&rsaquo;</p>
                  <p className="text-gray ml-3">CSS;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-brown">&lsaquo;li&rsaquo;</p>
                  <p className="text-gray ml-3">JavaScript;</p>
                </div>
              </div>

              <div className="flex flex-col ml-6">
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-brown">&lsaquo;li&rsaquo;</p>
                  <p className="text-gray ml-3">React.js;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-brown">&lsaquo;li&rsaquo;</p>
                  <p className="text-gray ml-3">TypeScript;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-brown">&lsaquo;li&rsaquo;</p>
                  <p className="text-gray ml-3">Python;</p>
                </div>
              </div>
            </div>
            <p className="text-gray opacity-20">&lsaquo;ul/&rsaquo;</p>
          </div>
          <img src="/src/assets/fotinho.png" alt="" />
        </div>
        <p className="text-brown flex justify-end mr-9 font-sans text-3xl">
          /&rsaquo;
        </p>
      </main>
      <footer className="bg-darkBlue text-gray opacity-30 text-center">
        @Cindel Evelyn
      </footer>
    </body>
  );
}
