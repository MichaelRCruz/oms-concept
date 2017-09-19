<template lang="html">
  <div class="formSection">

    <h1>Customer Information</h1>
    
    <dropdown />
    <text-area />
    <checkbox />
    <input />

  </div>
</template>

<script>
import Dropdown from './fields/dropdown';
import TextArea from './fields/textarea';
import Checkbox from './fields/checkbox';
import Input from './fields/input';

export default {
  components: {
    Dropdown,
    TextArea,
    Checkbox,
    Input
  }
}
</script>

<style scoped>

</style>
