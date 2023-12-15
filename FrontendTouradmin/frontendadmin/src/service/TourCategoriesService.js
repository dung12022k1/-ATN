import http from "../config";
const URL_category = "tourcategory";

class TourCategoriesService{
    getAll(params){
        return http.get(URL_category,{
            params:params,
        })
    }
}
export default new TourCategoriesService();