<template lang="pug">
Transition
  div#createProductModal(
    tabindex="-1"
    aria-hidden="true"
    v-if="modalActive"
    class="modal-contain"
  )
    div.relative.p-4.w-full.max-w-2xl.max-h-full
      div.contain
        div.product-modal
          button(
            type="button"
            class="btn"
            data-modal-target="createProductModal"
            data-modal-toggle="createProductModal"
            @click="$emit('close-modal')"
          )
            svg.w-5.h-5(
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            )
              path(
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              )
            span.sr-only Close modal
        slot  
div(v-if="modalActive" modal-backdrop="" class="modal-active")

</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>
