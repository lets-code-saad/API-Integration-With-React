import axios from "axios";

const axiosInterceptors = axios.create({
    baseURL:"https://fakestoreapi.com"
})

axiosInterceptors.interceptors.request.use((req)=>{
    const token = localStorage.getItem("token");
    req.headers["Authorization"] = `Bearer ${token}`;
    return req;
},
(error)=>{
    return Promise.reject(error)
}
);

axiosInterceptors.interceptors.response.use((response)=>{
    return response;
},
(error)=>{
    if( error?.response?.status === 401 && error?.response?.status === 400){
      window.location.href = "/wrong"
      }
    
        return Promise.reject(error)
}
)

export default axiosInterceptors;