<template>
  <div class="set" @mouseenter="closeShow = true" @mouseleave="closeShow = false" @click.stop>
    <transition name="el-fade-in-linear">
      <close-one class="close" theme="filled" size="28" fill="#ffffff60" v-show="closeShow" @click="store.setOpenState = false" />
    </transition>
    <el-row :gutter="40">
      <el-col :span="12" class="left">
        <div class="logo text-hidden">
          <span class="bg">{{ siteUrl[0] }}</span>
          <span class="sm">.{{ siteUrl[1] }}</span>
        </div>
        <p class="intro">把这里逐步改成属于你的个人主页。</p>
      </el-col>
      <el-col :span="12" class="right">
        <div class="title">
          <setting-two theme="filled" size="28" fill="#ffffff60" />
          <span class="name">全局设置</span>
        </div>
        <Set />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { CloseOne, SettingTwo } from "@icon-park/vue-next";
import { mainStore } from "@/store";
import Set from "@/components/Set.vue";

const store = mainStore();
const closeShow = ref(false);
const siteUrl = computed(() => {
  const url = import.meta.env.VITE_SITE_URL;
  if (!url) return "leehelonx.github.io".split(".");
  return url.replace(/^https?:\/\//, "").split(".");
});
</script>

<style lang="scss" scoped>
.set { position: absolute; top: 50%; left: 50%; width: 80%; height: 80%; padding: 40px; background: rgb(255 255 255 / 40%); border-radius: 6px; transform: translate(-50%, -50%); }
.close { position: absolute; top: 14px; right: 14px; width: 28px; height: 28px; }
.close:hover { transform: scale(1.2); }
.el-row { height: 100%; flex-wrap: nowrap; }
.left, .right { height: 100%; display: flex; flex-direction: column; justify-content: center; }
.left { padding-left: 40px !important; }
.right { padding-right: 40px !important; }
.logo { font-family: "Pacifico-Regular"; }
.bg { font-size: 5rem; }
.sm { margin-left: 6px; font-size: 2rem; }
.intro { color: #ffffffb0; font-size: 1rem; }
.title { display: flex; align-items: center; gap: 6px; margin-bottom: 16px; font-size: 18px; }
@media (max-width: 720px) { .set { width: 92%; height: auto; min-height: 70%; padding: 28px 14px; } .el-row { flex-wrap: wrap; } .left, .right { width: 100%; height: auto; padding: 12px !important; } .bg { font-size: 3.5rem; } }
</style>
