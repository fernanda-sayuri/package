export type InputSearchProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputSearch = ({value, onChange, placeholder}: InputSearchProps) => {
    return(
        <input
            className="input input-bordered input-sm"
            type="search"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
};

export default InputSearch;
