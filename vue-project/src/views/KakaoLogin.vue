<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" with="222" alt="">
        </a><br>
        <a @click="kakaoLogout()">로그아웃</a>
    </div>
</template>
<script>
export default {
    methods:{
        kakaoLogin(){
            window.Kakao.Auth.login({
                scope:'profile_nickname, account_email, profile_image, gender',
                success: this.getKakaoAccount
            });
        },
        getKakaoAccount(){
            window.Kakao.API.request({
                url:'/v2/user/me',
                success:res =>{
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile.nickname;
                    const image = kakao_account.profile.thumbnail_image_url;
                    const email = kakao_account.email;
                    console.log('nickname',nickname);
                    console.log('email',email);
                    console.log('img',image);

                    alert('로그인 성공!!');
                },
                fail : error =>{
                    console.log(error);
                }
            })
        },
        kakaoLogout(){
            window.Kakao.Auth.logout((response)=>{
                console.log(response);
                alert('로그아웃했습니다.')
            })
        }
    }
}
</script>
