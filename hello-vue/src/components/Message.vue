<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: "hey there"
    };
  }
};
</script>

<style>
.box {
  background: gray;
  border: 1px solid black;
  margin-bottom: 20px;
}
</style>
