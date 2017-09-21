<template lang="html">

  <div class="field is-horizontal">
    <div class="field-label is-small">
      <label class="label">Radio Button</label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <label class="radio">
            <input type="radio" name="member">
            <span class="buttonLabel">yes</span>
          </label>
          <label class="radio">
            <input type="radio" name="member">
            <span class="buttonLabel">no</span>
          </label>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>

.buttonLabel {
  font-size: 13px
}

</style>
