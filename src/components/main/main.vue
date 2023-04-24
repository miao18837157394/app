<template>
  <div class="wrapper">
    <el-container>
      <el-header class="page-header">
        <a href="">
          <img src="../../assets/logo.png" alt="" class="img-style">
        </a>
        <div class="page-style">
          <i class="iconfont icon-zhuye"></i>
          <span>天融信官网首页</span>
        </div>
      </el-header>
      <el-main class="page-content">
        <router-view v-slot="props">
          <transition name="miao">
            <keep-alive>
              <component :is="props.Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
      <el-footer class="page-footer">
        <ul class="icon_list">
          <li @mouseenter="oAndroid" class="and">
            <div class="android"><i class="iconfont icon-android"></i>
              <span>Android</span>
            </div>
          </li>
          <li @mouseenter="oLinux" class="li">
            <div class="linux"><i class="iconfont icon-linux"></i>
              <span>Linux</span>
            </div>
          </li>
          <li @mouseenter="oWindows" class="win">
            <div class="windows"><i class="iconfont icon-windows"></i>
              <span>Windows</span>
            </div>
          </li>
          <li @mouseenter="oIos" class="io">
            <div class="ios"><i class="iconfont icon-ios"></i>
              <span>IOS</span>
            </div>
          </li>
          <li @mouseenter="oMacos" class="mac">
            <div class="macos"><i class="iconfont icon-macos"></i>
              <span>macOS</span>
            </div>
          </li>
        </ul>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {  useRouter  } from 'vue-router'

export default {
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"),{
      click:true,
      observeDOM:true
    })
    var android = document.querySelector('.android');
    var lAndroid = document.querySelector('.icon_list .and');
    var linux = document.querySelector('.linux');
    var oLinux = document.querySelector('.icon_list .li');
    var ios = document.querySelector('.ios');
    var oIos = document.querySelector('.icon_list .io');
    var windows = document.querySelector('.windows');
    var oWindows = document.querySelector('.icon_list .win');
    var macos = document.querySelector('.macos');
    var oMacos = document.querySelector('.icon_list .mac');
    android.style.color = '#9f9999';
    lAndroid.style.backgroundColor = 'rgba(0,0,0,0)';
    linux.style.color = '#9f9999';
    oLinux.style.backgroundColor = 'rgba(0,0,0,0)';
    ios.style.color = '#9f9999';
    oIos.style.backgroundColor = 'rgba(0,0,0,0)';
    windows.style.color = 'white';
    oWindows.style.backgroundColor = '#7d4c4c';
    macos.style.color = '#9f9999';
    oMacos.style.backgroundColor = 'rgba(0,0,0,0)';
  },
  setup() {
    const router = useRouter();
    const oAndroid = () => {
      router.push('/android');
      var android = document.querySelector('.android');
      var lAndroid = document.querySelector('.icon_list .and');
      var linux = document.querySelector('.linux');
      var oLinux = document.querySelector('.icon_list .li');
      var ios = document.querySelector('.ios');
      var oIos = document.querySelector('.icon_list .io');
      var windows = document.querySelector('.windows');
      var oWindows = document.querySelector('.icon_list .win');
      var macos = document.querySelector('.macos');
      var oMacos = document.querySelector('.icon_list .mac');
      android.style.color = 'white';
      lAndroid.style.backgroundColor = '#7d4c4c';
      linux.style.color = '#9f9999';
      oLinux.style.backgroundColor = 'rgba(0,0,0,0)';
      ios.style.color = '#9f9999';
      oIos.style.backgroundColor = 'rgba(0,0,0,0)';
      windows.style.color = '#9f9999';
      oWindows.style.backgroundColor = 'rgba(0,0,0,0)';
      macos.style.color = '#9f9999';
      oMacos.style.backgroundColor = 'rgba(0,0,0,0)';
    };
    const oLinux = () => {
      router.push('/linux');
      var android = document.querySelector('.android');
      var lAndroid = document.querySelector('.icon_list .and');
      var linux = document.querySelector('.linux');
      var oLinux = document.querySelector('.icon_list .li');
      var ios = document.querySelector('.ios');
      var oIos = document.querySelector('.icon_list .io');
      var windows = document.querySelector('.windows');
      var oWindows = document.querySelector('.icon_list .win');
      var macos = document.querySelector('.macos');
      var oMacos = document.querySelector('.icon_list .mac');
      android.style.color = '#9f9999';
      lAndroid.style.backgroundColor = 'rgba(0,0,0,0)';
      linux.style.color = 'white';
      oLinux.style.backgroundColor = '#7d4c4c';
      ios.style.color = '#9f9999';
      oIos.style.backgroundColor = 'rgba(0,0,0,0)';
      windows.style.color = '#9f9999';
      oWindows.style.backgroundColor = 'rgba(0,0,0,0)';
      macos.style.color = '#9f9999';
      oMacos.style.backgroundColor = 'rgba(0,0,0,0)';
    };
    const oWindows = () => {
      router.push('/windows');
      var android = document.querySelector('.android');
      var lAndroid = document.querySelector('.icon_list .and');
      var linux = document.querySelector('.linux');
      var oLinux = document.querySelector('.icon_list .li');
      var ios = document.querySelector('.ios');
      var oIos = document.querySelector('.icon_list .io');
      var windows = document.querySelector('.windows');
      var oWindows = document.querySelector('.icon_list .win');
      var macos = document.querySelector('.macos');
      var oMacos = document.querySelector('.icon_list .mac');
      android.style.color = '#9f9999';
      lAndroid.style.backgroundColor = 'rgba(0,0,0,0)';
      linux.style.color = '#9f9999';
      oLinux.style.backgroundColor = 'rgba(0,0,0,0)';
      ios.style.color = '#9f9999';
      oIos.style.backgroundColor = 'rgba(0,0,0,0)';
      windows.style.color = 'white';
      oWindows.style.backgroundColor = '#7d4c4c';
      macos.style.color = '#9f9999';
      oMacos.style.backgroundColor = 'rgba(0,0,0,0)';
    };
    const oIos = () => {
      router.push('/ios');
      var android = document.querySelector('.android');
      var lAndroid = document.querySelector('.icon_list .and');
      var linux = document.querySelector('.linux');
      var oLinux = document.querySelector('.icon_list .li');
      var ios = document.querySelector('.ios');
      var oIos = document.querySelector('.icon_list .io');
      var windows = document.querySelector('.windows');
      var oWindows = document.querySelector('.icon_list .win');
      var macos = document.querySelector('.macos');
      var oMacos = document.querySelector('.icon_list .mac');
      android.style.color = '#9f9999';
      lAndroid.style.backgroundColor = 'rgba(0,0,0,0)';
      linux.style.color = '#9f9999';
      oLinux.style.backgroundColor = 'rgba(0,0,0,0)';
      ios.style.color = 'white';
      oIos.style.backgroundColor = '#7d4c4c';
      windows.style.color = '#9f9999';
      oWindows.style.backgroundColor = 'rgba(0,0,0,0)';
      macos.style.color = '#9f9999';
      oMacos.style.backgroundColor = 'rgba(0,0,0,0)';
    };
    const oMacos = () => {
      router.push('/macos');
      var android = document.querySelector('.android');
      var lAndroid = document.querySelector('.icon_list .and');
      var linux = document.querySelector('.linux');
      var oLinux = document.querySelector('.icon_list .li');
      var ios = document.querySelector('.ios');
      var oIos = document.querySelector('.icon_list .io');
      var windows = document.querySelector('.windows');
      var oWindows = document.querySelector('.icon_list .win');
      var macos = document.querySelector('.macos');
      var oMacos = document.querySelector('.icon_list .mac');
      android.style.color = '#9f9999';
      lAndroid.style.backgroundColor = 'rgba(0,0,0,0)';
      linux.style.color = '#9f9999';
      oLinux.style.backgroundColor = 'rgba(0,0,0,0)';
      ios.style.color = '#9f9999';
      oIos.style.backgroundColor = 'rgba(0,0,0,0)';
      windows.style.color = '#9f9999';
      oWindows.style.backgroundColor = 'rgba(0,0,0,0)';
      macos.style.color = 'white';
      oMacos.style.backgroundColor = '#7d4c4c';
    };

    return {
      oLinux,
      router,
      oAndroid,
      oWindows,
      oIos,
      oMacos
    }
  }
}
</script>

<style scoped>

/* .miao-enter-from,
.miao-enter-leave {
  opacity: 0;
}

.miao-enter-active,
.miao-leave-active {
  transition: opacity .5s ease;
} */
.wrapper {
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: fixed;
}



.page-content {
  height: calc(100vh - 60px - 10rem);
}


.page-style {
  display: flex;
  height: 60px;
  align-items: center;
  background: #ad1d21;
}

.page-header {
  display: flex;
  color: white;
  text-align: center;
  align-items: center;
  height: 60px;
  justify-content: end;
  margin: 0;
  padding: 0;
}

.page-header span {
  font-size: 13px;
  margin: 0 10px;
}

i.iconfont.icon-zhuye {
  margin-left: 10px;
}

.icon_list {
  display: flex;
  overflow: auto;
}

.icon_list li {
  margin-left: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-top: 23px;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .icon_list li {
    margin-left: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-top: 23px;
    flex-shrink: 0;
  }
}

.icon_list li {
  color: #9f9999;
  cursor: pointer;
}

.icon_list span {
  display: flex;
}

.page-footer {
  text-align: center;
  background-color:white;
  height: 10rem;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  background: url('../../assets/2.jpg');
  background-size: 100% 100%;
}

.el-main {
  color: #333;
  text-align: center;
  background: url('../../assets/1.jpg');
  background-size: 100% 100%;
}


.android i {
  font-size: 33px;
  display: -webkit-box;
  margin-left: 13px;
}


.linux i {
  font-size: 33px;
  display: -webkit-box;
  margin-left: 4px;
}

.windows i {
  font-size: 33px;
  display: -webkit-box;
  margin-left: 20px;
}

.macos i {
  font-size: 33px;
  display: -webkit-box;
  margin-left: 10px;
}

.ios i {
  font-size: 33px;
  display: -webkit-box;
  margin-left: -4px;
}

.img-style {
  position: fixed;
  left: 0;
  top: 10px;
}

</style>