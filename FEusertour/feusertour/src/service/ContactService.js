import http from "../config";
const URL_CONTACT = "contact";

class ContactService{
    getAll(params){
        return http.get(URL_CONTACT,{
            params:params,
        })
    }
    save(body){
        return http.post(URL_CONTACT,body)
    }
    detail(id){
        return http.get(URL_CONTACT+"/"+id)
    }
    edit(id,body){
        return http.put(URL_CONTACT+"/"+id,body)
    }
    delete(id,status){
        return http.delete(URL_CONTACT+"/"+id+"/"+status)
    }
}
export default new ContactService();