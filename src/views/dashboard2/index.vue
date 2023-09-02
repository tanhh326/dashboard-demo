<script lang="ts" setup>
import SwitchPageBtn from "@/views/dashboard1/components/btn";
</script>

<template>
  <div class="dashboard">
    <div class="header">
      <div class="left">
        <switch-page-btn active direction="left" text="页面一" />
        <switch-page-btn active direction="left" text="页面一" />
        <switch-page-btn active direction="left" text="页面一" />
        <switch-page-btn active direction="left" text="页面一" />
      </div>
      <div class="right">
        <switch-page-btn active direction="left" text="页面一" />
        <switch-page-btn active direction="left" text="页面一" />
        <switch-page-btn active direction="left" text="页面一" />
        <switch-page-btn active direction="left" text="页面一" />
      </div>
    </div>
    <div class="main">
      <div class="left">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "index";
</style>
