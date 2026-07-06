import type {JSX} from 'react';
import {ImSpinner2} from "react-icons/im";


function SearchSpinner(): JSX.Element {
    return (
        <div className="flex items-center justify-center">
            <ImSpinner2 className="animate-spin text-3xl text-blue-500"/>
        </div>
    );
}

export default SearchSpinner;