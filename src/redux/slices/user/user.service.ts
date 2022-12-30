import { AxiosResponse } from "axios";
import { userPath } from "../../../api/path/user.path";
import { httpClient } from "../../../utils/http-client";
import { UserLoginModel, UserLoginResponse } from "./user.model";

export const _login = async (user: UserLoginModel) : Promise<AxiosResponse<UserLoginResponse>> => {
    return await httpClient.post(`${userPath.login}`, user);
}