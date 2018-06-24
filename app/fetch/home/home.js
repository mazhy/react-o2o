import { get } from '../get'


export function getAdDataStep1(result) {
    console.log(result)
    let returnData=[]
    result.then(res =>{
        return res.json()
    }).then(json => {
        const data = json
        console.log('data',data)

        if(data.length) {
            //随机取三个
            let dataArr = []
            let indexArr= []
            while(dataArr.length < 3 ){
                var index = Math.floor((Math.random() * data.length));
                if(indexArr.indexOf(index) < 0){
                    dataArr.push(data[index])
                    indexArr.push(index)
                }else{
                    continue
                }
            }
            returnData = dataArr
            console.log('returnData',returnData)
            return returnData
        }
    })
}

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}