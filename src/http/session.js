
const TOKEN_SESSION_KEY = "access-token";
const REFRESH_TOKEN_SESSION_KEY = "refresh-token";


export const getSessionToken = () => localStorage.getItem(TOKEN_SESSION_KEY);


export const setSessionToken = (value) =>
    localStorage.setItem(TOKEN_SESSION_KEY, value);


export const removeSessionToken = () =>
    localStorage.removeItem(TOKEN_SESSION_KEY);


export const getRefreshToken = () => {
    const refreshDataParsed = JSON.parse(localStorage.getItem(REFRESH_TOKEN_SESSION_KEY) || "{}");

    if (refreshDataParsed) {
        refreshDataParsed.expireIn = new Date(refreshDataParsed.expireIn);
        refreshDataParsed.useIn = new Date(refreshDataParsed.useIn);
    }

    return refreshDataParsed;
}

export const setRefreshToken = (token, expireIn, useIn) =>
    localStorage.setItem(REFRESH_TOKEN_SESSION_KEY, JSON.stringify({ token, expireIn, useIn }));


export const removeRefreshToken = () =>
    localStorage.removeItem(REFRESH_TOKEN_SESSION_KEY);

