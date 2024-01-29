import axios from "axios";
// import { getSessionToken } from "./session";


const conectionParams = {
    baseURL: "http://localhost:8080"
}


export const api = axios.create(conectionParams)

// export const apiAuth = async () => {

//     const sessionToken = getSessionToken();

//     return axios.create({
//         ...conectionParams,
//         headers: {
//             Authorization: `Bearer ${sessionToken}`
//         }
//     })
// }

