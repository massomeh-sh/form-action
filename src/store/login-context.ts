import {createContext} from "react";
import type {LoginContextType} from "../types/loginTypes.ts";

export const LoginContext = createContext<LoginContextType | null>(null);
