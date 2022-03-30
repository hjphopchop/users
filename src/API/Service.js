import axios from "axios";

export default class Service{
    static async getUsers(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
    static async getUsersById(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        return response.data;
    }

    static async getImg(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
        return response.data;
    }
    static async getImgById(id){
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos/" + id)
        return response.data;
    }
}