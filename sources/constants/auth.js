import { get, post } from "./requestStructure";
import { URL } from "./url";

export async function createNewDoc(data) {
  const endpoint = URL + '/regDoc';
  const res = await post(endpoint, data);
  return res;
}
export async function loginDocApi(data) {
    const endpoint = URL + '/username/password/'+data.email+'/'+data.password;
    const res = await get(endpoint);
    return res;
  }

  export async function createNewPat(data) {
    const endpoint = URL + '/patient';
    const res = await post(endpoint, data);
    return res;
  }
  export async function loginPatApi(data) {
      const endpoint = URL + '/email/verify/'+data.email+'/'+data.password;
      const res = await get(endpoint);
      return res;
    }