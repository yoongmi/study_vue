// 믹스인 파일생성
import axios from 'axios';

export default {
    methods:{
        async $callAPI(url,method,data){
            return (await axios({
                method:method,
                url,
                data
            }).catch(e=>{
                console.log(e)
            })).data;
        }
    }
}