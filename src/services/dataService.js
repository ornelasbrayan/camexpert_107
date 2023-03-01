import axios from "axios";

var catalog = [
    {
        "title": "EOS Rebel T8i",
        "category": "Camera",
        "price": 349.99,
        "image": "EOS_Rebel_T8i.jpg",
        "_id": "00001"
    },
    {
        "title": "EOS 1DX Mark III",
        "category": "Camera",
        "price": 199.99,
        "image": "EOS_1DX_Mark3.png",
        "_id": "00002"
    },
    {
        "title": "EOS M50",
        "category": "Camera",
        "price": 299.99,
        "image": "EOS_M50.jpg",
        "_id": "00003"
    },
    {
        "title": "EOS R3",
        "category": "Camera",
        "price": 149.99,
        "image": "EOS_R3.jpg",
        "_id": "00004"
    },
    {
        "title": "Powershot G5 Mark II",
        "category": "Camera",
        "price": 189.99,
        "image": "Powershot_G5_Mark2.jpg",
        "_id": "00005"
    },
    {
        "title": "Powershot G7 Mark II",
        "category": "Camera",
        "price": 229.99,
        "image": "Powershot_G7_Mark2.png",
        "_id": "00006"
    },
    {
        "title": "Powershot Pick",
        "category": "Camera",
        "price": 139.99,
        "image": "Powershot_Pick.jpg",
        "_id": "00007"
    },
    {
        "title": "Powershot SX70 HS",
        "category": "Camera",
        "price": 329.99,
        "image": "Powershot_SX70_HS.png",
        "_id": "00008"
    },
    {
        "title": "VIXIA HF W11",
        "category": "Video Camera",
        "price": 109.99,
        "image": "VIXIA_HF_W11.png",
        "_id": "00009"
    },
    {
        "title": "Speedlite EL-1",
        "category": "Flash",
        "price": 89.99,
        "image": "Speedlite_EL-1.jpg",
        "_id": "00010"
    }

];

class DataService {

    async getProducts() {
        let response = await axios.get("http://127.0.0.1:5000/api/catalog");   
        return response.data;
        // use the line below to test w/o server
        // return catalog;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }



}


export default DataService;