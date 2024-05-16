import { FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";

export type ButtonProps = {
    iconName: 'PlusIcon' | 'FunnelIcon' ;
    children: string;
    onClick: () => void;
    type?: 'primary' | 'secondary';
}

const Button = ({ iconName, children, onClick, type }: ButtonProps) => {
    const setClass = type == 'secondary' ? 'btn btn-outline btn-primary btn-sm normal-case font-light' : 'btn btn-sm btn-primary normal-case font-normal text-zinc-50'
    return(
        <button
          className={setClass}
          onClick={onClick}
        >
          {iconName == 'PlusIcon' && <PlusIcon className="h-5 w-5" />}
          {iconName == 'FunnelIcon' && <FunnelIcon className="h-5 w-5" />}
          {children}
        </button>
    )
};

export default Button;