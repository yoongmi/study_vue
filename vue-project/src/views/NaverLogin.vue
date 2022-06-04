<template>
    <div>
        <div id="naverIdLogin"></div>
        <button type="button" @click="logout">로그아웃</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
            naverLogin:null,
        };
    },
    mounted(){
        this.naverLogin = new window.naver.LoginWithNaverId({
            clientId:"ZaKOYDRgdteWW_nb7Xoa",
            callbackUrl:"http://localhost:8080/NaverLogin",
            isPopup:true,
            loginButton:{
                color:"green",type:3,height:60
            }
        });

        this.naverLogin.init();

        this.naverLogin.getLoginStatus((status)=>{
            if(status){
                console.log(status);
                console.log(this.naverLogin.user);

                var email = this.naverLogin.user.getEmail();
                if(email == undefined || email == null){
                    alert("이메일은 필수 정보입니다. 정보제공을 동의해주세요.");
                    this.naverLogin.reprompt();
                    return;
                }
                console.log('로그인완료')
                
            }else{
                console.log("callback 처리에 실패하였습니다.");
            }
        })
    },
    methods:{
        logout(){
            const accessToken = this.naverLogin.accessToken.accessToken;
            const url=`/oauth2.0/token?grant_type=delete&client_id=ZaKOYDRgdteWW_nb7Xoa&client_secret=UNr9m9n40V&access_token=${accessToken}&service_provider=NAVER`
            console.log('로그아웃완료')
            axios.get(url).then((res)=>{
                res.data.access_token='';
                console.log(res.data.access_token)
            });
        }
    }
}
</script>