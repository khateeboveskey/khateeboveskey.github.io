---
title: Getting Started with Nuxt Content
description: Learn how to use @nuxt/content module
date: 2023-12-20
---

## Introduction

This is a demo article to showcase the features of Nuxt Content module.

## Basic Markdown

You can write **bold** and *italic* text easily.

- List item 1
- List item 2
- List item 3

## Code Blocks

```js
// JavaScript example
const message = 'Hello Nuxt Content!'
console.log(message)
```



<!-- Vue component example -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Page',
      description: 'Welcome to my page'
    }
  }
}
</script>


## Front Matter Usage

You can access this page's front matter like this:

```js
const title = {{ title }}
const description = {{ description }}
const date = {{ date }}
```


## Links and Images

[Nuxt Content Documentation](https://content.nuxtjs.org)

![Nuxt Logo](https://nuxt.com/assets/design-kit/logo/icon-green.svg)
