<template>
  <!-- <el-affix position="top" :offset="60"> -->
    <el-button id="vpn_styles" plain>下一代VPN客户端</el-button>
  <!-- </el-affix> -->
  <el-divider></el-divider>
  <el-table :data="rules" style="width: 100%">
    <el-table-column prop="name" label="名称" width="150"></el-table-column>
    <el-table-column prop="version" label="版本号" width="160"></el-table-column>
    <el-table-column prop="sha256" label="SHA256" width="320"></el-table-column>
    <el-table-column prop="date" label="发布日期" width="160"></el-table-column>
    <el-table-column fixed="right" prop="dowload" label="下载" width="55">
      <template #default="scope">
        <el-button link type="primary" size="small" @click.prevent="dowloadClick(scope.$index)">
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
    const rules = ref([
      {
        name: 'ELE客户端（64位）',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'ELE客户端（32位）',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'WX客户端',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: '独立客户端',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      },
      {
        name: 'Ipsec客户端',
        version: '3.6.1.15.1',
        sha256: 'CDA5BF14CBD6AE0B589D45EB1959FD87',
        date: '2023.02.16',
      }
    ])
    const dowloadClick = (index) => {
      if(index == 0) {
        console.log('sss')
      } else if(index == 1) {

      } else if(index == 2) {
        window.open("windows/general/TopSAP.exe")
      } else if(index == 3) {
        
      } else if(index ==4) {

      }
    }
    return {
      rules,
      dowloadClick
    }
  }
}
</script>

<style>
  .el-table__body, .el-table__footer, .el-table__header  {
    margin: auto;
  }
  .el-table__header {
    height: 20px;
  }

  .el-table__body .el-table__row {
    height: 70px;
  }

  #vpn_styles {
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

  .cell {
    color: white;
  }

  i.iconfont.icon-xiazai {
    color: #9f9999;
  }

  i.iconfont.icon-xiazai:hover {
    color: white;
  }
  
  .el-table__body tr.hover-row>td.el-table__cell {
    background: rgba(0,0,0,0);
  }

</style>