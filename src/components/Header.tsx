export function Header() {
  return (
    <div className="flex flex-row justify-center items-center text-white text-3xl">
      <ul className="flex flex-row justify-evenly items-center w-full m-4 font-semibold leading-relaxed font-sans">
        <a href="">
          <li className="text-brown">&lsaquo;home</li>
        </a>
        <a href="/src/pages/About">
          <li>&lsaquo;about/&rsaquo;</li>
        </a>
        <a href="">
          <li>&lsaquo;projects/&rsaquo;</li>
        </a>
        <a href="">
          <li>&lsaquo;experience/&rsaquo;</li>
        </a>
      </ul>
    </div>
  );
}
