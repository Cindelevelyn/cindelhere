import { CardPproject } from "../components/CardProject";
import { Header } from "../components/Header";

export function Projects() {
  return (
    <body className="bg-bege min-h-[637px] h-full font-mono">
      <div className="bg-bege sticky top-0">
        <Header
          title="&lsaquo;home&rsaquo;"
          title2="&lsaquo;about&rsaquo;"
          title3="&lsaquo;projects"
          title4="&lsaquo;experience&rsaquo;"
          flag="3"
        />
      </div>
      <main className="flex flex-1 flex-col">
        <div className="flex flex-row justify-between mb-9 ml-9 mr-9">
          <div className="flex flex-col">
            <p className="text-gray opacity-20">&lsaquo;h2&rsaquo;</p>
            <h2 className="text-rosa flex text-4xl font-semibold font-mono">
              projects
            </h2>
            <p className="text-gray opacity-20">&lsaquo;h2/&rsaquo;</p>
          </div>
        </div>
        <div className="flex justify-evenly">
          <CardPproject
            link="https://mymita.vercel.app/"
            title="mymita"
            desc="design e frontend"
          />
          <CardPproject
            link="https://www.figma.com/file/3aPAiStReSpEOrgIiMKXqF/movie-on!?node-id=0%3A1"
            title="movieon!"
            desc="UX/UI design"
          />
          <CardPproject
            link="https://www.figma.com/file/AuYIJpD9IlQU2FQYdwg40G/redesign?node-id=0%3A1"
            title="instagram redesign"
            desc="UX/UI design"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <p className="text-rosa flex justify-end mr-9 font-sans text-3xl">
          /&rsaquo;
        </p>
      </main>
    </body>
  );
}
