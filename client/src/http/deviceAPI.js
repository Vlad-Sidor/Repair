import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const fetchBrands = async () => {
    const {data} = await $host.get('api/service', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $host.post('api/serviceinfo', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, /*limit= 5*/) => {
    const {data} = await $host.get('api/serviceinfo', {params: {
            typeId, brandId, page/*, limit*/
        }})
    return data
}

/*export const fetchDevices = async () => {
    const {data} = await $host.get('api/serviceinfo', )
    return data
}*/

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/serviceinfo/' + id)
    return data
}

export const updateOneDevice = async (id, device) => {
    const {data} = await $host.put('api/serviceinfo/'+ id,  device)
    return data
}



