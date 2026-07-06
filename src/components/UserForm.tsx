import {type ChangeEvent, type JSX, useActionState, useState} from 'react';
import Input from "./Input.tsx";
import {GrPowerReset} from "react-icons/gr";
import {IoSearchSharp} from "react-icons/io5";
import BirthDate from "./BirthDate.tsx";
import FileInput from "./FileInput.tsx";
import {parseFormData} from "../utils/parseFormData.ts";
import {validateUser} from "../utils/ValidateUser.ts";
import type {FormState, UserError, UserFormState} from "../types/user.ts";
import ErrorMessage from "./ErrorMessage.tsx";
import {useLoginContext} from "../store/useLoginContext.ts";


interface UserFormProps {
    onReset: () => void;
}

const initialFormState: FormState = {
    error: null,
    user: null,
}

function UserForm({onReset}: UserFormProps): JSX.Element {
    const [file, setFile] = useState<File | null>(null);
    const {loginsData} = useLoginContext();

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }

    async function userFormAction(_: FormState, formData: FormData) {
        const user: UserFormState = parseFormData(formData, file);
        const error: UserError = validateUser(user);

        if (Object.keys(error).length > 0) {
            return {user, error};
        }


        if (user.image) {
            const imageUrl = URL.createObjectURL(user.image);
            const newUser = {...user, image: imageUrl};
            await loginsData.addUser(newUser);
        }

        onReset();


        return {error: null, user};
    }

    const [userFormState, formAction, pending] = useActionState(userFormAction, initialFormState);


    return (
        <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
            <form noValidate action={formAction} className="grid grid-cols-2 gap-x-5 gap-y-3 md:gap-x-8 md:gap-y-4">
                <Input defaultValue={userFormState.user?.firstName} errorMessage={userFormState.error?.firstName}
                       type="text" id="firstName" label="First Name"
                       placeholder="Enter first name..."
                       name="firstName"/>
                <Input defaultValue={userFormState.user?.lastName} errorMessage={userFormState.error?.lastName}
                       type="text" id="lastName" label="Last Name"
                       placeholder="Enter last name..." name="lastName"/>
                <Input defaultValue={userFormState.user?.username} errorMessage={userFormState.error?.username}
                       label="Username" id="userName"
                       placeholder="Enter username..." name="username" type="text"/>
                <Input defaultValue={userFormState.user?.email} errorMessage={userFormState.error?.email} label="Email"
                       id="email" placeholder="Enter email..."
                       name="email" type="email"/>
                <div className="flex flex-col gap-1">
                    <label className="text-xs md:text-sm font-semibold text-gray-700">Gender</label>
                    <select
                        key={userFormState.user?.gender}
                        defaultValue={userFormState.user?.gender}
                        name="gender"
                        className="outline-none px-2 py-[7px] text-[8px] md:text-[10px] border-2 border-gray-200 focus:border-gray-400 rounded-lg">
                        <option value="">All</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="Rather not to say">Rather not to say</option>
                    </select>
                    {userFormState.error && <ErrorMessage errorMessage={userFormState.error?.gender}/>}
                </div>
                <BirthDate errorMessage={userFormState.error?.birthDate}/>
                <FileInput errorMessage={userFormState.error?.image} selectedFile={file}
                           onChangeInput={onChange}/>
                <div className="flex gap-3 justify-self-end col-span-2 mt-2">
                    <button
                        onClick={onReset}
                        disabled={pending}
                        type="reset"
                        className="cursor-pointer flex gap-1.5 items-center text-gray-700 justify-center px-4 py-2 rounded-lg text-[0.6rem] md:text-[0.8rem] hover:bg-gray-50 border border-gray-200">
                        <IoSearchSharp size={10}/>
                        Reset
                    </button>
                    <button
                        disabled={pending}
                        type="submit"
                        className="cursor-pointer flex gap-1.5 items-center text-white justify-center px-4 py-2 rounded-lg text-[0.6rem] md:text-[0.8rem] bg-blue-600 hover:bg-blue-800">
                        <GrPowerReset size={10}/>
                        Fetch User
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;