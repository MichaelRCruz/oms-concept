<template lang="html">
  <div class="formSection">

    <h1>Customer Information</h1>
    <dropdown></dropdown>

    <!-- <div class="field is-horizontal">
      <div class="field-label is-small">
        <label class="label">Account</label>
      </div>
      <div class="select is-fullwidth is-small">
        <select name="country">
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
        </select>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-small">
        <label class="label">Contact</label>
      </div>
      <div class="select is-fullwidth is-small">
        <select name="country">
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
        </select>
      </div>
    </div> -->


  </div>
</template>

<script>
import Dropdown from './fields/dropdown';

export default {
  components: {
    Dropdown
  }
}
</script>

<style scoped>

</style>
