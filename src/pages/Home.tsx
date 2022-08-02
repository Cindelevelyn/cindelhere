import Typical from "react-typical";
import { Header } from "../components/Header";

export function Home() {
  return (
    <body className="bg-bege min-h-[637px] h-full font-mono">
    
      <main className="flex flex-1 flex-col">
        <div className="h-[150px]"></div>
        <div className="flex flex-row justify-between m-9">
          <div className="flex flex-col">
            <p className="text-gray opacity-20">&lsaquo;h1&rsaquo;</p>
            <div className="flex flex-row">
               <h1 className="text-8xl text-rosa mb-2">
                <Typical
                  steps={["hi, i'm cindel;", 1000]}
                  loop={Infinity}
                />
              </h1>
            </div>
            <p className="text-gray opacity-20">&lsaquo;h1/&rsaquo;</p>
            <p className="text-gray opacity-20">&lsaquo;p&rsaquo;</p>
            <p className="m-1 text-3xl text-darkBlue">
              Half of me is art and the other half too;
            </p>
            <div className="flex flex-row items-end">
              <p className="m-1 text-2xl text-darkBlue">
                I’m a computer engineering based in Brazil.<br></br> I have
                interest in web development and UI/UX design
              </p>
              <p className="m-1 text-gray opacity-20">&lsaquo;p/&rsaquo;</p>
            </div>
          </div>
        </div>
        <p className="text-rosa flex justify-end mr-9 font-sans text-3xl">
          /&rsaquo;
        </p>
      </main>
    </body>
  );
}
