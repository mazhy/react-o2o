import { get } from '../get'

export function getHotCity() {
    const result = get('/api/city/hotCity')
    return result
}

export function getCityList(){
    const result = get('/api/city/cityList')
    return result
}