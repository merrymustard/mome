import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "here should be your production endpoint")
  : (baseURL = "http://localhost:3000");

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get("/");
  },
  signup: async user => {
    return await service.post("/signup", user);
  },
  login: async user => {
    return await service.post("/login", user);
  },
  logout: async () => {
    return await service.post("/logout");
  },
  loggedIn: async () => {
    return await service.get("/loggedin");
  },
  edit: async () => {
    return await service.post("/edit");
  },
  addproduct: async(product)=>{
    return await service.post("/addproduct", product)
  }
};

export default MY_SERVICE;
