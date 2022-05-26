<template>
  <h2>BASIC</h2>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/DBHtml">v-html</router-link> |
    <router-link to="/DBinputtext">input v-model</router-link> |
    <router-link to="/DBinputnum">input v-model.number</router-link> |
    <router-link to="/DBtextarea">v-model</router-link> |
    <router-link to="/DBselect">v-model value</router-link> |
    <router-link to="/DBcheckbox">v-model checked</router-link> |
    <router-link to="/DBradio">v-bind:value</router-link> |
    <router-link to="/DBattribue">img bind</router-link> |
    <router-link to="/DBbutton">button disabled</router-link> |
    <router-link to="/DBclass">bind class</router-link> |
    <router-link to="/DBstyle">bind style</router-link> |
    <router-link to="/DBlist">v-for</router-link> |
    <router-link to="/RenderingVif">v-if</router-link> |
    <router-link to="/RenderingVshow">v-show</router-link> |
    <router-link to="/EventClick">v-on:click</router-link> |
    <router-link to="/EventChange">v-on:change</router-link> |
    <router-link to="/EventKeyup">keyup</router-link> |
    <router-link to="/ComputedTest">Computed</router-link> |
    <router-link to="/WatchTest">watch</router-link> |
    <router-link to="/DBlistMoc">api 데이터가져오기</router-link> |
  </nav>
  <hr>
  <h2>COMPONENTS</h2>
  <nav>
    <router-link to="/NestComp">컴포넌트 안에 컴포넌트</router-link> |
    <router-link to="/ParentComp">부모컴포넌트에서 자식컴포넌트 이벤트 발생</router-link> |
    <router-link to="/ParentComp2">자식컴포넌트의 함수 직접호출</router-link> |
    <router-link to="/ParentComp3">자식컴포넌트의 데이터 옵션값 직접변경</router-link> |
    <router-link to="/ParentComp4">자식에서 부모로 이벤트/데이터 전달</router-link> |
    <router-link to="/ParentComp5">부모에서 자식 데이터 옵션값 동기화</router-link> |
  </nav>
  <hr>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
