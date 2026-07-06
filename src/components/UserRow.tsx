import type {JSX} from 'react';
import type {User} from "../types/loginTypes.ts";
import {IoMdFemale} from "react-icons/io";
import {IoMaleSharp} from "react-icons/io5";
import GenderIcon from "./GenderIcon.tsx";

interface UserProps {
    // Props here
    userData: User;
    userNumber: number;
}


function UserRow({userData, userNumber}: UserProps): JSX.Element {
    const {
        username,
        firstName,
        lastName,
        gender,
        birthDate,
        image,
    } = userData;

    const genderConfig = {
        female: {
            className: "bg-pink-200 text-pink-800",
            label: "Female",
            icon: IoMdFemale,
        },
        male: {
            className: "bg-blue-200 text-blue-800",
            label: "Male",
            icon: IoMaleSharp,
        },
        "Rather not to say": {
            className: "bg-gray-200 text-gray-800",
            label: "Unknown",
            icon: null,
        }

    }

    const config = genderConfig[gender as keyof typeof genderConfig] ?? {
        className: "bg-gray-200 text-gray-800",
        label: "Unknown",
    };

    const date = new Date(birthDate);
    const formattedBirthDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        day: "numeric",
        month: "long",

    });

    return (
        <tbody className="text-[8px] md:text-[10px] text-gray-900">
        <tr className="border-b border-gray-200 h-16">
            <td className="p-1">{userNumber}</td>
            <td className="p-1">
                <img src={image} alt={username} className="w-10 rounded-full"/>
            </td>
            <td className="p-1">{username}</td>
            <td className="p-1">{`${firstName} ${lastName}`}</td>
            <td className="p-1">
                <button
                    className={`${config.className} rounded-lg p-1`}>
                    <GenderIcon icon={config.icon} text={config.label}/>
                </button>
            </td>
            <td className="p-1">{formattedBirthDate}</td>
        </tr>
        </tbody>
    );
}

export default UserRow;