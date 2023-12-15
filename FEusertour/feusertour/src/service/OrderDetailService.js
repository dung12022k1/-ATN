import http from "../config";
const URL_ORDERDETAIL = "orderdetail";

class OrderDetailService{
    save(tourdetailid,body){
        return http.post(URL_ORDERDETAIL+"/"+tourdetailid,body)
    }
}
export default new OrderDetailService()