import axios from "axios"

export const api = axios.create({
  withCredentials: true,
  baseURL: "https://localhost:7234/api"
})

// // defining a custom error handler for all APIs
// const errorHandler = (error: { response: { status: any } }) => {
//   const statusCode = error.response?.status
//   // const { logout } = useAuth();
//   // logging only errors that are not 401
//   if (statusCode && statusCode !== 401) {
//     // console.error(error)
//     // toast(`Error: ${error}`);
//   }
//   else{
//     // logout();
//   }

//   return Promise.reject(error)
// }

// api.interceptors.response.use(undefined, (error) => {
//   return errorHandler(error)
// })