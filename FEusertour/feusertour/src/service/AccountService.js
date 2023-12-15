import http from "../config";
const URL_ACCOUNT = "account";

class AccountService{
    getAll(params){
        return http.get(URL_ACCOUNT,{
            params:params,
        })
    }
    save(body){
        return http.post(URL_ACCOUNT,body)
    }
    saverole(){
        return http.post(URL_ACCOUNT+"role")

    }
    detail(id){
        return http.get(URL_ACCOUNT+"/"+id)
    }
    edit(id,body){
        return http.put(URL_ACCOUNT+"/"+id,body)
    }
    delete(id,status){
        return http.delete(URL_ACCOUNT+"/"+id+"/"+status)
    }
}
export default new AccountService();