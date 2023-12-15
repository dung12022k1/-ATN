import http from "../config";
const URL_HOTELS = "hotel";

class HotelService{
    getAll(params){
        return http.get(URL_HOTELS,{
            params:params,
        })
    }
    save(body){
        return http.post(URL_HOTELS,body)
    }
    detail(id){
        return http.get(URL_HOTELS+"/"+id)
    }
    edit(id,body){
        return http.put(URL_HOTELS+"/"+id,body)
    }
    delete(id,status){
        return http.delete(URL_HOTELS+"/"+id+"/"+status)
    }
}
export default new HotelService();