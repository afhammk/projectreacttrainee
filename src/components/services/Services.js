import axios from 'axios'
import qs from 'qs'
// export api funcations constant
export const userServices = {
    services,
    getReq,
    postReq,
    deleteReq
   };
   
   const Prefix = "http://95.111.193.87/PerpApi/public"
   // login call function
   async function services(data,endpoint) {
     const { data: response } = await axios.post(
       `${Prefix}${endpoint}`, qs.stringify({
        ...data
       }));
     return response;
   }

   // brands call function
   async function getReq(endpoint) {
     const options = {
       headers:{
         'token':'relsqdoe5dhyymtc1i9ikaoerrc7fnzfdiyq12jh'
       }
     }
    const { data: response } = await axios.get(
      `${Prefix}${endpoint}`,options);
    return response;
  }

  // post request call Back function
  async function postReq(data,endpoint,onUploadProgress) {
    const options = {
      headers:{
        'token':'relsqdoe5dhyymtc1i9ikaoerrc7fnzfdiyq12jh'
      },
      onUploadProgress
    }
   const { data: response } = await axios.post(
     `${Prefix}${endpoint}`,
       data
     ,options);
   return response;
 }

//  delete request function
 async function deleteReq(endpoint) {
  const options = {
    headers:{
      'token':'relsqdoe5dhyymtc1i9ikaoerrc7fnzfdiyq12jh'
    }
  }
 const { data: response } = await axios.delete(
   `${Prefix}${endpoint}`
   ,options);
 return response;
}

  

  