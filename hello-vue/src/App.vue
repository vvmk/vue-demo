<template>
  <div id="app">
    <counter></counter>
    <counter></counter>
    <message>Hello, World!</message>
    <message>Hello, World!</message>
    <message>Hello, World!</message>
    <message>Hello, World!</message>
  </div>
</template>

<script>
import Message from './components/Message.vue';
import Counter from './components/Counter.vue';

export default {
  name: "app",
  components: {
    Message,
    Counter,
  },
  data() {
    return {

    }
  }
};
</script>

<style lang="scss">
</style>
