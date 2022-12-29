import http from "../http-common";

import axios from "axios";
class RestaurantDataService{
    getAll(page=0){
        return axios.get(`http://localhost:5000/api/v1/restaurants/?page=${page}`)
    }

    get(id){
        return http.get(`/id/${id}`);
    }

    find(query, by = "name" , page=0){
        return http.get(`?${by}=${query}&page=${page}`)
    }

    createReview(data){
        return http.post("/review" , data)
    }

    updateReview(data){
        return http.put("/review", data)
    }

    deleteReview(id){
        return http.delete(`/review?id=${id}`)
    }

    getCuisines(){
        return http.get("/cuisines")
    }
}

export default new RestaurantDataService()