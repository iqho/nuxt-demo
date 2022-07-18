<template>
  <div>
    <h1>Welcome Page</h1>
    <button class="btn btn-danger" @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    <button class="btn btn-danger" @click="$store.state.counter++">{{ $store.state.counter }}</button>
    {{ $store.state.name }}
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
