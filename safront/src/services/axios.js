import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3334"
});

api.interceptors.request.use(async (config) => {
try{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InBlZHJvcm9jaGEiLCJpZF91c3VhcmlvIjozLCJpYXQiOjE2MjE3MjgyOTd9.ZB5E4V4hADixaz-muAeGdn1g15J5Ba7y_whnNw2_oJA"
    config.headers.Authorization = `Bearer ${token}`
    return config;

}catch(err){
    console.log(err);
}
})

export default api;