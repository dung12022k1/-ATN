import http from "../config";
const URL_LOGIN ="/login";
class LoginService{
    authenticate(data){
        return http.post(URL_LOGIN,data)
    }
}
export default new LoginService();