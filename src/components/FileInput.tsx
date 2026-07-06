import {type ChangeEvent, type JSX, useRef} from 'react';
import {FaRegFileImage} from "react-icons/fa";
import ErrorMessage from "./ErrorMessage.tsx";


interface FileInputProps {
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
    selectedFile: File | null;
    errorMessage: string | undefined;
}


function FileInput({onChangeInput, selectedFile, errorMessage}: FileInputProps): JSX.Element {
    const fileInput = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col gap-2 text-xs md:text-sm text-gray-700">
            <label htmlFor="image" className="font-semibold">Image</label>
            <input accept="image/*" ref={fileInput} type="file" onChange={(e) => onChangeInput(e)}
                   id="image"
                   name="image"
                   className="hidden"/>
            <button type="button" onClick={() => fileInput.current?.click()}
                    className="relative px-2 py-1.5 text-[8px] md:text-[10px] border-2 border-gray-200 focus:border-gray-400 rounded-lg">Choose
                file
                <FaRegFileImage size={15} className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500"/>
            </button>
            {selectedFile && (<p className="text-[8px] md:text-[10px] text-gray-400">{selectedFile?.name}</p>)}
            {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
        </div>
    );
}

export default FileInput;