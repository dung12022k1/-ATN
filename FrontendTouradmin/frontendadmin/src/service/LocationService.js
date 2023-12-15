import http from "../config";
const URL_TOURS = "location";


class LocationService{
    getAll(params){
        return http.get(URL_TOURS+"/1",{
            params:params,
        })
    }
}
export default new LocationService();