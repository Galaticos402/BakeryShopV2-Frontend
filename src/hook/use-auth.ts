import { SUCCESS_STATUS_CODE } from "../constants/http-status-code"
import { TOKEN } from "../constants/token"
import { UserLoginModel } from "../redux/slices/user/user.model"
import { _login } from "../redux/slices/user/user.service"

type UseAuth = {
    login : (username: string, password: string) => Promise<boolean>,
    logout : () => void
}
const useAuth = () : UseAuth => {
    const login = async (username: string, password: string): Promise<boolean> => {
        const user : UserLoginModel = {
            username : username,
            password: password
        }
        const userLogin = await _login(user);
        if(userLogin.status == SUCCESS_STATUS_CODE){
            const {result} = userLogin.data
            localStorage.setItem(TOKEN, result)
            return true
        }else{
            return false
        }
    }

    const logout = () => {
        localStorage.removeItem(TOKEN);
    }
    return {
        login, 
        logout
    }
}

export default useAuth