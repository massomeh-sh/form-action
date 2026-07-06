import type {JSX} from 'react';

interface ErrorMessageProps {
    // Props here
    errorMessage: string | undefined;
}

function ErrorMessage({errorMessage}: ErrorMessageProps): JSX.Element {
    return (
        <>
            {errorMessage && <p className="text-red-400 text-[0.5rem] md:text-[0.6rem]">{errorMessage}</p>}
        </>

    );
}

export default ErrorMessage;