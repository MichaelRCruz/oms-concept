<template lang="html">

  <div class="field is-horizontal">
    <div class="field-label is-small">
      <label class="label">Dropdown</label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth is-small">
            <select>
              <option v-for="option in options">{{ option }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['options']
}
</script>

<style scoped>

</style>
