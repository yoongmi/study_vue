<template>
    <div>
        <!-- <pageTitle/> -->
        <page-title title="정적타이틀 부모컴포넌트에서 자식 컴포넌트로 데이터 전달" />
        <page-title :title="title" />

        <!-- <blogPost/> -->
        <blog-post likes="42" v-bind="post"/>
        <blog-post :likes="42" :likes2="post.likes" :comment-ids="[222,333,444]" :author="post.author" />

        <!-- <booLean/> -->
        <boo-lean :is-published="true"/>
        <boo-lean :is-published="isShow"/>
    </div>
</template>
<script>
import PageTitle from '@/components/pageTitle.vue';
import BlogPost from '@/components/blogPost.vue';
import BooLean from '@/components/booLean.vue';
export default {
    components: {
        PageTitle,
        BlogPost,
        BooLean
    },
    data(){
        return{
            title: '동적 페이지 타이틀',
            post:{
                likes: 5,
                commentIds:[234,266,256],
                author:"nayana"
            },
            isShow:false,
        };
    },
}
</script>
