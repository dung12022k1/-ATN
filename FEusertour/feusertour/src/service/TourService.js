import http from "../config";
const URL_TOURS = "tour";

class TourService{
    getAll(params){
        return http.get(URL_TOURS,{
            params:params,
        })
    }
    save(body){
        return http.post(URL_TOURS,body)
    }
    detail(id){
        return http.get(URL_TOURS+"/"+id)
    }
    edit(id,body){
        return http.put(URL_TOURS+"/"+id,body)
    }
    delete(id,status){
        return http.delete(URL_TOURS+"/"+id+"/"+status)
    }
}
export default new TourService();