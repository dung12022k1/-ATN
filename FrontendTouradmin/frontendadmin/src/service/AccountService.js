import http from "../config";
const URL_ACCOUNTS = "account";

class AccountService{
    getAll(params){
        return http.get(URL_ACCOUNTS,{
            params:params,
        })
    }
}
export default new AccountService();