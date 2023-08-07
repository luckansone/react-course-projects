import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
    const storedExpirationDate = localStorage.getItem("expiration");
    const expiration = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expiration.getTime() - now.getTime();
    return duration;
};

export const getAuthToken = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
};

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();

    if(!token) {
        return redirect("/auth");
    }

    return null;
};