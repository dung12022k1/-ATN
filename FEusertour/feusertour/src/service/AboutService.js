import http from "../config";
const URL_ABOUT = "about";

class AboutService{
    getAll(params){
        return http.get(URL_ABOUT,{
            params:params,
        })
    }
    save(body){
        return http.post(URL_ABOUT,body)
    }
    detail(id){
        return http.get(URL_ABOUT+"/"+id)
    }
    edit(id,body){
        return http.put(URL_ABOUT+"/"+id,body)
    }
    delete(id,status){
        return http.delete(URL_ABOUT+"/"+id+"/"+status)
    }
}
export default new AboutService();