import { basePath } from "./base/base.path";

const identifiers = "user"

export const userPath = {
    login: `${basePath}/${identifiers}/login`,
    register: `${basePath}/${identifiers}/register`
}