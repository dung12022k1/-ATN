import http from "../config";
const URL_TOURS = "tourschedule";

class TourService{
    getAll(params){
        return http.get(URL_TOURS,{
            params:params,
        })
    }
    detail(id){
        return http.get( URL_TOURS+ "/"+ id)
    }
    save(body){
        return http.post(URL_TOURS,body)
    }
    edit(id,body){
        return http.put(URL_TOURS+"/"+id,body)
    }
}
export default new TourService();