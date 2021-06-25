import axios from "axios";

// export const BaseURL = "http://35ef82d08f1e.ngrok.io/DocAnalyzerApi";
export const BaseURL = "http://localhost:3010";
export const AuthURL = "http://localhost:8081";

export const keyBlob = "35oiYj9BMx99zwV+Wk4nAlnIUlTWLOENmnfGYp7Gij/QrTc4lXjTEPYjdEZsK49HUmVceLSdEiDcWl8sEJoEyA=="
export const nameContainer = "documents"
export const nameBlob = "documentanalyzer2"

// export const checkToken =  async () => {
//     const savedToken = localStorage.getItem("token");
//     if (savedToken) {
//       const response = await axios.get(BaseURL + "/Api/Employee/Employees",);
//       if (response.data) {
//         console.log();
//         return savedToken
//       }
//     }
//     return ""
//   };
