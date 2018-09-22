<template>
  <div>
    <h1>Count is: {{ count }}</h1>
    <button @click='incrementCount'>Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      increment: 1,
      count: 0,
    }
  },
  methods: {
    incrementCount() {
      this.count += this.increment;
    },
  },
}
</script>

