<template>
  <!-- <el-affix position="top" :offset="60"> -->
    <el-button id="vpn_style" plain>下一代VPN客户端</el-button>
  <!-- </el-affix> -->
  <el-divider></el-divider>
  <el-button plain class="standard">标准版本</el-button>
  <el-table :data="standardRules" style="width: 100%">
    <el-table-column prop="name" label="名称" width="150"></el-table-column>
    <el-table-column prop="version" label="版本号" width="160"></el-table-column>
    <el-table-column prop="sha256" label="SHA256" width="320"></el-table-column>
    <el-table-column prop="date" label="发布日期" width="160"></el-table-column>
    <el-table-column fixed="right" prop="dowload" label="下载" width="55">
      <template #default="scope">
        <el-button link type="primary" size="small" @click.prevent="standardDowload(scope.$index)">
          <i class="iconfont icon-xiazai"></i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button plain class="standard">uos系统</el-button>
  <el-table :data="uosRules" style="width: 100%">
    <el-table-column prop="name" label="名称" width="150"></el-table-column>
    <el-table-column prop="version" label="版本号" width="160"></el-table-column>
    <el-table-column prop="sha256" label="SHA256" width="320"></el-table-column>
    <el-table-column prop="date" label="发布日期" width="160"></el-table-column>
    <el-table-column fixed="right" prop="dowload" label="下载" width="55">
      <template #default="scope">
        <el-button link type="primary" size="small" @click.prevent="uosDowload(scope.$index)">
          <i class="iconfont icon-xiazai"></i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button plain class="standard">麒麟系统</el-button>
  <el-table :data="kylinRules" style="width: 100%">
    <el-table-column prop="name" label="名称" width="150"></el-table-column>
    <el-table-column prop="version" label="版本号" width="160"></el-table-column>
    <el-table-column prop="sha256" label="SHA256" width="320"></el-table-column>
    <el-table-column prop="date" label="发布日期" width="160"></el-table-column>
    <el-table-column fixed="right" prop="dowload" label="下载" width="55">
      <template #default="scope">
        <el-button link type="primary" size="small" @click.prevent="kylinDowload(scope.$index)">
          <i class="iconfont icon-xiazai"></i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const standardRules = ref([
      {
        name: 'x86架构客户端（rpm）',
        version: '3.5.2.35.2',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'x86架构客户端（deb）',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'Aarch架构客户端',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'MIPS64架构客户端',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      }
    ]);
    const uosRules = ref([
      {
        name: 'x86架构客户端',
        version: '3.5.2.33.2.20738',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'Aarch架构客户端',
        version: '3.5.2.33.2.20738',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'MIPS64架构客户端',
        version: '3.5.2.33.2.20738',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: '龙芯64架构客户端',
        version: '3.5.2.33.2.20738',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      }
    ]);
    const kylinRules = ref([
      {
        name: 'x86架构客户端',
        version: '3.5.2.33.2.20738',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'Aarch架构客户端',
        version: '3.5.2.33.2.20738',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'MIPS64架构客户端',
        version: '3.5.2.33.2.20738',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      }
    ])
    const standardDowload = (index) => {
      if(index == 0) {
        console.log('sss1')
      } else if(index == 1) {

      } else if(index == 2) {

      } else if(index == 3) {

      }
    }
    const uosDowload = (index) => {
      if(index == 0) {
        console.log('sss2')
      } else if(index == 1) {

      } else if(index == 2) {

      } else if(index == 3) {

      }
    }
    const kylinDowload = (index) => {
      if(index == 0) {
        console.log('sss3')
      } else if(index == 1) {

      } else if(index == 2) {

      }
    }
    return {
      standardRules,
      standardDowload,
      uosRules,
      kylinRules,
      uosDowload,
      kylinDowload
    }
  }
}
</script>

<style>
  .el-table__body, .el-table__footer, .el-table__header  {
    margin: auto;
  }
  #vpn_style {
    height: 50px;
    color: white;
    font-weight: 500;
    font-size: 31px;
    /* position: relative; */
    border: none;
    width: 100%;
    cursor: revert;
    background: rgba(0,0,0,0);
  }

  button.el-button.is-plain.standard {
    display: flex;
    cursor: revert;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    margin: 12px 0;
    background: rgba(0,0,0,0);
    border: none;
    color: white;
  }

  .el-table {
    background: rgba(0,0,0,0);
    --el-table-tr-bg-color:rgba(0,0,0,0) !important
  }
  .el-table th.el-table__cell,
  .el-table__body-wrapper tr td.el-table-fixed-column--right,
  .el-table.is-scrolling-none th.el-table-fixed-column--right,
  .el-table__header-wrapper tr th.el-table-fixed-column--right,
  .el-table.is-scrolling-right th.el-table-fixed-column--right {
    background: rgba(0,0,0,0);
  }

  i.iconfont.icon-xiazai:hover {
    color: white;
  }
  
  i.iconfont.icon-xiazai {
    color: #9f9999;
  }
  .cell {
    color: white;
  }
  .el-table__body tr.hover-row>td.el-table__cell {
    background: rgba(0,0,0,0);
  }
</style>