import {type ReactNode, useEffect, useState} from "react";
import type {JSX} from 'react';
import type {LoginApiType, User} from "../types/loginTypes.ts";
import {LoginContext} from "./login-context.ts";
import {toast} from "sonner";

interface LoginProviderProps {
    children: ReactNode;
}

function LoginProvider({children}: LoginProviderProps): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getLogins() {
            setError("");
            setLoading(true);
            try {
                if (!navigator.onLine) {
                    throw new Error("Please checkout your network!");
                }

                const res = await fetch('https://dummyjson.com/users');

                if (!res.ok) {
                    throw new Error("Failed to fetch data.");
                }

                const loginsData = await res.json();
                const users: User[] = loginsData.users.map((user: LoginApiType) => ({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender: user.gender,
                    birthDate: user.birthDate,
                    image: user.gender === "female"
                        ? `https://randomuser.me/api/portraits/women/${Number(user.id) % 100}.jpg`
                        : `https://randomuser.me/api/portraits/men/${Number(user.id) % 100}.jpg`,
                }))
                setUsers(users);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                    setError(error.message);
                } else {
                    toast.error("An error occurred while fetching data.");
                }
            }
        }

        getLogins();
    }, [])


    async function addUser(newUser: User) {
        try {
            if (!navigator.onLine) {
                throw new Error("Please checkout your network!");
            }

            const res: Response = await fetch("https://dummyjson.com/users/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            })

            if (!res.ok) {
                throw new Error("Failed to add data.");
            }

            const newUserData: User = await res.json();
            console.log(newUserData.username);

            setUsers((preUsers: User[]) => ([{...newUser}, ...preUsers]))

        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
                setError(error.message);
            } else {
                toast.error("something went wrong on adding a new user");
            }
        }
    }


    return (
        <LoginContext.Provider value={{users, isLoading, error, addUser}}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;