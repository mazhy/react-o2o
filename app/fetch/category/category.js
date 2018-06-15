import { get } from '../get'

export function getCategory() {
    const result = get('/api/category/categoryList')
    return result
}