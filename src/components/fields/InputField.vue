<template lang="html">

  <div class="field is-horizontal">
    <div class="field-label is-small">
      <label class="label">
        {{ fieldName }}
      </label>
    </div>
    <div class="field-body">
      <div class="field is-fullwidth">
        <div class="control">
          <input class="input is-small"
                 type="text"
                 :placeholder="placeholder"
                 v-model="fieldValue">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['fieldName', 'fieldValue', 'placeholder']
}
</script>

<style lang="css">
</style>
