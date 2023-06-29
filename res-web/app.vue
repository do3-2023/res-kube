<template>
  <div>
    <p>Hello, you !</p>
    <p>Our backend tells us it is {{ data[0].now }} </p>
  </div>
</template>

<script setup>

const {data, error} = await useFetch('http://api.res-back.svc.cluster.local:8080/healtz')

</script>
