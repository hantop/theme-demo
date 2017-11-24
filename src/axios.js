import axios from 'axios'
import Qs from 'qs'

// axios默认配置
axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

function http(type,url,param) {
    let paramUse = Qs.stringify(param)
    if (type == 'get') {
        return new Promise((reolve, reject) => {
            axios({
                method: 'get',
                url: url,
                params: param
            }).then(res => {
                resolve(res.data)
            })
        })
    }else{
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: paramUse
            }).then(res => {
                resolve(res.data)
            })
        })
    }
}

export default http;
