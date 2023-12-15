import http from "../config";

const URL_ORDER = "order";

class OrderService {

    getAll(params){
        return http.get(URL_ORDER, {
            params: params,
        });
    }
    updateStatus(id,status){
        return http.delete(URL_ORDER+"/"+id+"/"+status)
    }
}

export default new OrderService();