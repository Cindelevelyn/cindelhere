
interface CardProps{
  link: string;
  title: string;
  desc: string;
}

export const CardPproject: React.FC<CardProps> = ({link, title, desc}) => {
  return (
    <a href={link}>
      <div className="bg-white w-[180px] h-60 rounded-[20px] p-3 text-center shadow-md hover:bg-zinc-200 ">
        <div className="bg-rosa w-full h-40 rounded-[20px]"></div>
        <div className="flex items-center justify-center font-sans h-20 w-full flex-col pb-3">
          <strong>{title}</strong>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </a>
  );
}
