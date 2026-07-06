import {use} from "react";
import {LoginContext} from "./login-context.ts";

export function useLoginContext() {
    const loginsData = use(LoginContext);
    if (!loginsData) {
        throw new Error("useLoginContext must be used within useLoginContext");
    }

    return {loginsData};
}