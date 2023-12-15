import http from "../config";
const URL_FLIGHTS = "flight";

class FlightService{
    getAll(params){
        return http.get(URL_FLIGHTS,{
            params:params,
        })
    }

    save(body){
        return http.post(URL_FLIGHTS,body)
    }
    detail(id){
        return http.get(URL_FLIGHTS+"/"+id)
    }
    edit(id,body){
        return http.put(URL_FLIGHTS+"/"+id,body)
    }
    delete(id,status){
        return http.delete(URL_FLIGHTS+"/"+id+"/"+status)
    }
}
export default new FlightService();