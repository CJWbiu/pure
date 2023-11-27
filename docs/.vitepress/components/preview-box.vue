<template>
  <div class="preview-box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/**
 * @file 列表页
 */

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PreviewBox',
});
</script>

<style scoped>
.preview-box {
  padding: 24px;
  border: 1px solid #dcdfe6;
}
</style>
