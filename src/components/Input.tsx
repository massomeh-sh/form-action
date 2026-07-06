import type {JSX} from 'react';
import ErrorMessage from "./ErrorMessage.tsx";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label: string;
    placeholder: string;
    name: string;
    type: string;
    id: string;
    errorMessage: string | undefined;
}

function Input({label, id, errorMessage, ...props}: InputProps): JSX.Element {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={id} className="text-xs md:text-sm font-semibold text-gray-700">{label}</label>
            <input {...props} id={id}
                   className="w-full outline-none px-2 py-1.5 text-[8px] md:text-[10px] border-2 border-gray-200 focus:border-gray-400 rounded-lg"/>
            <ErrorMessage errorMessage={errorMessage}/>
        </div>
    );
}

export default Input;