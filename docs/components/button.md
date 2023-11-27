# Button

常用的操作按钮。

## 基本用法

使用 `type`、`danger`、`ghost`、`shape`来设置按钮样式。

```html
<template>
  <pu-button 
    v-for="type in typeEnums" 
    :key="type" 
    :type="type"
  > 
    {{ type }} 
  </pu-button>
</template>

<script setup>
  const typeEnums = ['default', 'primary', 'dashed', 'text', 'link'];
</script>
```

<script setup>
  const typeEnums = ['default', 'primary', 'dashed', 'text', 'link'];
</script>

<preview-box>
  <pu-button v-for="type in typeEnums" :key="type" :type="type">
    {{ type }}
  </pu-button>
</preview-box>

## 禁用状态

使用`disabled`属性来设置按钮禁用状态，设置为`true`表示禁用。

```html
<template>
  <pu-button disabled>default</pu-button>
  <pu-button disabled type="primary">primary</pu-button>
  <pu-button disabled type="dashed">dashed</pu-button>
  <pu-button disabled type="text">text</pu-button>
  <pu-button disabled type="link">link</pu-button>
</template>
```

<preview-box>
  <pu-button disabled>default</pu-button>
  <pu-button disabled type="primary">primary</pu-button>
  <pu-button disabled type="dashed">dashed</pu-button>
  <pu-button disabled type="text">text</pu-button>
  <pu-button disabled type="link">link</pu-button>
</preview-box>

## 链接按钮

使用`type="link"`将按钮设为链接按钮，如果配置了href属性，会以`<a>`标签的形式渲染。

```html
<template>
  <pu-button ghost type="link">link</pu-button>
  <pu-button disabled type="link">link</pu-button>
  <pu-button danger type="link">link</pu-button>
  <pu-button href="/button.html" type="link">link</pu-button>
  <pu-button size="xs" type="link">link</pu-button>
  <pu-button size="s" type="link">link</pu-button>
  <pu-button size="l" type="link">link</pu-button>
  <pu-button size="xl" type="link">link</pu-button>
</template>
```

<preview-box>
  <pu-button ghost type="link">link</pu-button>
  <pu-button disabled type="link">link</pu-button>
  <pu-button danger type="link">link</pu-button>
  <pu-button href="/button.html" type="link">link</pu-button>
  <pu-button size="xs" type="link">link</pu-button>
  <pu-button size="s" type="link">link</pu-button>
  <pu-button size="l" type="link">link</pu-button>
  <pu-button size="xl" type="link">link</pu-button>
</preview-box>

## 文字按钮

使用`type="text"`将按钮设为文字按钮，表现形式与普通文一样。

```html
<template>
  <pu-button ghost type="text">text</pu-button>
  <pu-button disabled type="text">text</pu-button>
  <pu-button danger type="text">text</pu-button>
  <pu-button href="/button.html" type="text">text</pu-button>
  <pu-button size="xs" type="text">text</pu-button>
  <pu-button size="s" type="text">text</pu-button>
  <pu-button size="l" type="text">text</pu-button>
  <pu-button size="xl" type="text">text</pu-button>
</template>
```

<preview-box>
  <pu-button ghost type="text">text</pu-button>
  <pu-button disabled type="text">text</pu-button>
  <pu-button danger type="text">text</pu-button>
  <pu-button href="/button.html" type="text">text</pu-button>
  <pu-button size="xs" type="text">text</pu-button>
  <pu-button size="s" type="text">text</pu-button>
  <pu-button size="l" type="text">text</pu-button>
  <pu-button size="xl" type="text">text</pu-button>
</preview-box>

## 高危按钮

使用`danger`属性将按钮设为高危状态，表示需要谨慎操作。

```html
<template>
  <pu-button danger>default</pu-button>
  <pu-button danger type="primary">primary</pu-button>
  <pu-button danger type="dashed">dashed</pu-button>
  <pu-button danger type="text">text</pu-button>
  <pu-button danger type="link">link</pu-button>
</template>
```

<preview-box>
  <pu-button danger>default</pu-button>
  <pu-button danger type="primary">primary</pu-button>
  <pu-button danger type="dashed">dashed</pu-button>
  <pu-button danger type="text">text</pu-button>
  <pu-button danger type="link">link</pu-button>
</preview-box>

## 幽灵按钮

使用`ghost`属性将按钮设为幽灵按钮，没有背景色。

```html
<template>
  <pu-button ghost>default</pu-button>
  <pu-button ghost type="primary">primary</pu-button>
  <pu-button ghost type="dashed">dashed</pu-button>
  <pu-button ghost type="text">text</pu-button>
  <pu-button ghost type="link">link</pu-button>
</template>
```

<preview-box>
  <pu-button ghost>default</pu-button>
  <pu-button ghost type="primary">primary</pu-button>
  <pu-button ghost type="dashed">dashed</pu-button>
  <pu-button ghost type="text">text</pu-button>
  <pu-button ghost type="link">link</pu-button>
</preview-box>

## 按钮形状

使用`shape`属性设置按钮的展示形式，比如圆角、圆形、方形。

```html
<template>
  <pu-button ghost>default</pu-button>
  <pu-button  shape="round" type="primary">primary</pu-button>
  <pu-button shape="circle" type="dashed">circle</pu-button>
</template>
```

<preview-box>
  <pu-button danger>default</pu-button>
  <pu-button  shape="round" type="primary">primary</pu-button>
  <pu-button shape="circle" type="dashed">circle</pu-button>
</preview-box>

## 按钮尺寸

使用`size`属性调整按钮尺寸。

```html
<template>
  <pu-button size="xs">xs</pu-button>
  <pu-button size="s">s</pu-button>
  <pu-button size="m">m</pu-button>
  <pu-button size="l">l</pu-button>
  <pu-button size="xl">xl</pu-button>

  <pu-button type="text" size="xs">xs</pu-button>
  <pu-button type="text" size="s">s</pu-button>
  <pu-button type="text" size="m">m</pu-button>
  <pu-button type="text" size="l">l</pu-button>
  <pu-button type="text" size="xl">xl</pu-button>

  <pu-button type="link" size="xs">xs</pu-button>
  <pu-button type="link" size="s">s</pu-button>
  <pu-button type="link" size="m">m</pu-button>
  <pu-button type="link" size="l">l</pu-button>
  <pu-button type="link" size="xl">xl</pu-button>

  <pu-button shape="circle" size="xs">xs</pu-button>
  <pu-button shape="circle" size="s">s</pu-button>
  <pu-button shape="circle" size="m">m</pu-button>
  <pu-button shape="circle" size="l">l</pu-button>
  <pu-button shape="circle" size="xl">xl</pu-button>
</template>
```

<preview-box>
  <pu-button size="xs">xs</pu-button>
  <pu-button size="s">s</pu-button>
  <pu-button size="m">m</pu-button>
  <pu-button size="l">l</pu-button>
  <pu-button size="xl">xl</pu-button>

  <pu-button type="text" size="xs">xs</pu-button>
  <pu-button type="text" size="s">s</pu-button>
  <pu-button type="text" size="m">m</pu-button>
  <pu-button type="text" size="l">l</pu-button>
  <pu-button type="text" size="xl">xl</pu-button>

  <pu-button type="link" size="xs">xs</pu-button>
  <pu-button type="link" size="s">s</pu-button>
  <pu-button type="link" size="m">m</pu-button>
  <pu-button type="link" size="l">l</pu-button>
  <pu-button type="link" size="xl">xl</pu-button>

  <pu-button shape="circle" size="xs">xs</pu-button>
  <pu-button shape="circle" size="s">s</pu-button>
  <pu-button shape="circle" size="m">m</pu-button>
  <pu-button shape="circle" size="l">l</pu-button>
  <pu-button shape="circle" size="xl">xl</pu-button>
</preview-box>

## Button API

### Buton Attributes

| 属性名 | 说明 | 属性值 | 默认值 |
| ------ | ---- | ---- | ------ |
| type  | 按钮类型 | `default`,`primary`,`dashed`,`link`,`text` | `default` |
| size  | 尺寸 | `xs`,`s`,`m`,`l`,`xl` | `m` |
| shape  | 形状 | `circle`,`square`,`round` | `square` |
| disabled  | 禁用 | `boolean` | `false` |
| danger  | 高危状态 | `boolean` | `false` |
| ghost  | 幽灵按钮 | `boolean` | `false` |
| href  | 按钮链接，只有当type="link"时生效 | `string` | - |

### Button Slots

| 插槽名 | 说明 |
| ------ | ---- |
| default | 自定义默认内容 |