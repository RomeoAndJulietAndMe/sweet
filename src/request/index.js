import axios from 'axios'
export const get = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.get(url, {
            params: params,
        })
        .then(response=>{
            if(response.status === 200 && response.data.state === "SUCCESS"){
                resolve(response.data);
            }else{
                console.log('请求失败');
            }
        })
        .catch(error=>{
            console.log('请求失败');    
        })
    })
}

export const post = async (url, params = {})=>{
    try {
        let response = await axios.post(url, params);
        console.log(response)
        
         if(response.status === 200 && response.data.state === 'SUCCESS'){
            return response.data;
        }else{
            throw new Error();
        } 
    } catch (error) {
        console.log('请求失败');        
    }
}