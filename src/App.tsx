import Header from "./components/Header.tsx";
import UserForm from "./components/UserForm.tsx";
import UserList from "./components/UserList.tsx";
import {useState} from "react";
import {useLoginContext} from "./store/useLoginContext.ts";
import ErrorMessage from "./components/ErrorMessage.tsx";

function App() {
    const {loginsData} = useLoginContext();
    const [key, setKey] = useState<number>(1);


    function handleResetForm() {
        setKey((k) => k + 1)
    }

    return (
        <div className="p-7 flex flex-col gap-5">
            <Header/>
            <UserForm onReset={handleResetForm} key={key}/>
            {loginsData.error ? <ErrorMessage errorMessage={loginsData.error}/> : <UserList/>}
        </div>
    )
}

export default App
