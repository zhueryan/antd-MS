import JsonP from 'jsonp'

export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response != undefined){
                    if(response.status == "success"){
                        resolve(response)
                    }else{
                        reject(response.message)
                    }
                }else{
                    reject('请求失败!')
                }
               
            })
        })
    }
}