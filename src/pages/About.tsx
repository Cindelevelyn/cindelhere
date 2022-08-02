import { Header } from "../components/Header";

export function About() {
  return (
    <body className="bg-bege min-h-[637px] h-full font-mono">

      <main className="flex flex-1 flex-col">
      <div className="bg-bege sticky top-0">
        <Header
          title="&lsaquo;home&rsaquo;"
          title2="&lsaquo;about"
          title3="&lsaquo;projects&rsaquo;"
          title4="&lsaquo;experience&rsaquo;"
          flag="2"
        />
      </div>
        <div className="flex flex-row justify-between m-9">
          <div className="flex flex-col">
            <p className="text-gray opacity-20">&lsaquo;h2&rsaquo;</p>
            <h2 className="text-rosa flex text-4xl font-semibold font-mono">
              about me
            </h2>
            <p className="text-gray opacity-20">&lsaquo;h2/&rsaquo;</p>
            <p className="text-darkBlue text-[22px]">
              I’m a computer engineering based in Brazil. <br></br>I have
              interest in <b className="text-rosa">web development</b> and <b className="text-rosa">UI/UX design</b>;
              <br></br>
              <br></br>
            </p>
            <p className="text-darkBlue text-[18px] font-mono font-semibold">
              Here are some technologies I have been working before:
            </p>
            <p className="text-gray opacity-20">&lsaquo;ul&rsaquo;</p>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-rosa">&lsaquo;li&rsaquo;</p>
                  <p className="text-darkBlue ml-3">HTML;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-rosa">&lsaquo;li&rsaquo;</p>
                  <p className="text-darkBlue ml-3">CSS;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-rosa">&lsaquo;li&rsaquo;</p>
                  <p className="text-darkBlue ml-3">JavaScript;</p>
                </div>
              </div>

              <div className="flex flex-col ml-6">
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-rosa">&lsaquo;li&rsaquo;</p>
                  <p className="text-darkBlue ml-3">React.js;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-rosa">&lsaquo;li&rsaquo;</p>
                  <p className="text-darkBlue ml-3">TypeScript;</p>
                </div>
                <div className="flex flex-row mt-2 mb-2 ml-6">
                  <p className="text-rosa">&lsaquo;li&rsaquo;</p>
                  <p className="text-darkBlue ml-3">Python;</p>
                </div>
              </div>
            </div>
            <p className="text-gray opacity-20">&lsaquo;ul/&rsaquo;</p>
          </div>
          <img src="/src/assets/fotinho.png" width="450" alt="" />
        </div>
        <p className="text-rosa flex justify-end mr-9 font-sans text-3xl">
          /&rsaquo;
        </p>
      </main>
    </body>
  );
}
