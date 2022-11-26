import { auth } from "../config/firebase";

export function isAuthenticated(sessionCookie: string) {
    let answer: undefined | Error = undefined;

    auth
        .verifySessionCookie(sessionCookie, true)
        .catch((err: Error) => answer = err);

    return answer;
}