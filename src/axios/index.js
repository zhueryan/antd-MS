import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
import Utils from '../utils/utils'
export default class Axios{
    static requestList(_this,url,params,isMock){
        let data = {
            params:params,
            isMock
        }
        this.ajax({
            url:url,
            data
        }).then((data)=>{
            if(data && data.result){
                let list = data.result.item_list.map((item, index) => {
                    item.key = index
                    return item;
                })
                _this.setState({
                    list,
                    pagination: Utils.pagination(data, (current) => {
                        _this.params.page = current
                        _this.requestList()
                    })
                })
            }
        })
    }

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

    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById("ajaxLoading");
            loading.style.display="block"
        }
        
        let baseApi = ''
        if(options.isMock){  //是否为mock数据
            baseApi = 'http://106.14.123.235:7300/mock/5ef4a2b38639740b090c8ef7/mockapi'
        }else{
            baseApi = 'http://106.14.123.235:7300/mock/5ef4a2b38639740b090c8ef7/mockapi'
        }
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || '',
                
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById("ajaxLoading");
                    loading.style.display="none"
                }
                if(response.status == '200'){
                    let res = response.data
                    if(res.code == '0'){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.msg,
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}