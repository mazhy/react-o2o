import { get } from '../get'
import axios from 'axios'


export function getAdData() {
    const result = axios.get('/api/homead')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}