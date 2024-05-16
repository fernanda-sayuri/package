import { ArrowRightIcon } from "@heroicons/react/24/outline";

type CardProps = {
  title: string;
  linkName: string;
  href: string;
};

export const Card = ({
  title,
  linkName,
  href
}: CardProps) => {
   return (
    <div
      className="stat my-2 py-4 flex-1 bg-zinc-50 border-l-4 rounded min-w-64 max-h-32"
      >
      <div className="font-bold text-xl">{title}</div>
      <div className="stat-desc my-4">
        <a href={href} className="btn btn-ghost mx-2 w-full" >
        {linkName}
        <ArrowRightIcon className="w-4 h-4 ml-4"/>
        </a>
      </div>
    </div>
  );
};
