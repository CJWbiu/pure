# Space

用于控制元素间隔。

## 基本用法

```html
<template>
  <pu-space>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
</template>
```

<preview-box>
  <pu-space>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
</preview-box>

## 竖向展示

```html
<template>
  <pu-space vertical>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
</template>
```

<preview-box>
  <pu-space vertical>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
</preview-box>

## 间距设置

```html
<template>
  <pu-space gap="16">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space gap="24">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
</template>
```
<script setup>
  import { ref } from 'vue';
  const gap = ref(8);
  const addGap = () => {
    gap.value++;
  }
</script>

<preview-box>
  <pu-space vertical>
    <pu-button size="xs" @click="addGap">增加间距：{{gap}}px</pu-button>
    <pu-space :gap="gap">
      <pu-button>button</pu-button>
      <pu-button>button</pu-button>
      <pu-button>button</pu-button>
    </pu-space>
  </pu-space>
</preview-box>

## 对齐方式

使用方式与`flex`的`align-items`、`justify-content`一致。

```html
<template>
  <pu-space justify="center">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space justify="center">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space vertical align="flex-start">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space vertical align="flex-end">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
</template>
```

<preview-box>
  <pu-space justify="flex-start">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
  <pu-space justify="flex-end">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space vertical align="flex-start">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space vertical align="flex-end">
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>
</preview-box>

## 内联块

```html
<template>
  <pu-space inline>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space inline>
    <pu-button type="primary">button</pu-button>
    <pu-button type="primary">button</pu-button>
  </pu-space>
</template>
```

<preview-box>
  <pu-space inline>
    <pu-button>button</pu-button>
    <pu-button>button</pu-button>
  </pu-space>

  <pu-space inline>
    <pu-button type="primary">button</pu-button>
    <pu-button type="primary">button</pu-button>
  </pu-space>
</preview-box>