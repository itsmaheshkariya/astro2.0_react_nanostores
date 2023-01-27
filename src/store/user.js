import { atom } from "nanostores"

export const user = atom({
    _id: "",
    name: "",
    email: "",
    password: ""
})

export const users = atom([])