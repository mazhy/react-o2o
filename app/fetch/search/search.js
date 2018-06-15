import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : 'k'
    console.log('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)
    const result = get('/api/search/' + page + '/' + cityName + '/' + category +'/'+ keywordStr)
    return result
}