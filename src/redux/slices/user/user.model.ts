export interface UserLoginResponse  {
    result: string,
    statusCode: string,
    error: string[]
}
export interface UserLoginModel{
    username: string,
    password: string
}