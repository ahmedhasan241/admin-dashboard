<template lang="pug">
.product
  .mx-auto.max-w-screen-xl
    .product-contain
      nav.product-nav(aria-label="Table navigation")
        h2.contain-title Product Management

      .product-head
        .product-btn-contain
          button(type="button", id="createProductModalButton", data-modal-target="createProductModal", data-modal-toggle="createProductModal", class="product-btn", @click="toggleModal") Add Product

      .overflow-x-auto
        ProductTable(:rows="rows", :columns="columns", @edit="openEditModal", @delete="deleteProduct")

  ProductModal(:modalActive="modalActive", @close-modal="toggleModal")
    ProductForm(@close-modal="toggleModal", v-model:productId="productId")

</template>

<script setup>
import ProductTable from "~/components/ProductTable.vue";
import ProductModal from "~/components/ProductModal.vue";
import ProductForm from "@/components/ProductForm.vue";

import { useProductStore } from "@/stores/product";

const modalActive = ref(null);
const productId = ref(null);

const taskStore = useProductStore();

const columns = computed(() => taskStore.getProductColumns);

const rows = computed(() => taskStore.getProductList);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
  if (!modalActive.value) {
    productId.value = null;
  }
};

const openEditModal = (id) => {
  productId.value = id;
  toggleModal();
};

const deleteProduct = (id) => {
  taskStore.deleteProduct(id);
};
definePageMeta({
  layout: "custom",
});
</script>

<style scoped>
/* Apply Tailwind CSS classes here */
</style>
