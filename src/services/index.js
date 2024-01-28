import { api } from "src/http"

const BASE_PATH = '/users'

export const forgotPasswordRequest = async (email) => {
    try {
        const response = await api.post(`${BASE_PATH}/passsword-recovery`, { email: email });

        const { data } = response
        return data
    } catch (error) {

        const { data } = error.response

        return data
    }
}


export const createUser = async (createData, type) => {
    try {
        const response = await api.post(`${BASE_PATH}/create`, {
            name: createData.name,
            email: createData.email,
            password: createData.password,
            whatsapp: createData.whatsapp,
            type: type
        })

        const { data } = response

        return data
    }
    catch (error) {
        const { data } = error.response
        return data
    }
}

export const createWorker = async (createData, type, owner) => {
    try {
        const response = await api.post(`${BASE_PATH}/create`, {
            name: createData.name,
            email: createData.email,
            owner: owner,
            whatsapp: createData.whatsapp,
            type: type
        })

        const { data } = response

        return data
    }
    catch (error) {
        const { data } = error.response
        return data
    }
}