<template lang="pug">
form(@submit.prevent="performAction")
  div.product-form
    div.form-contain
      label(for="name" class="label") Product Name
      input(type="text" v-model="product.name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Product name" required)
    div.form-contain
      label(for="count" class="label") Product Count
      input(id="count" v-model="product.count" required class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Count Of The Product")
    div.form-contain
      label(for="price" class="label") Product Price
      input(id="price" v-model="product.price" placeholder="Enter The Price" required class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500")
  button(type="submit" class="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800")
    | {{ props.productId ? "Update" : "Add" }} Product
</template>

<script setup>
import { useProductStore } from "@/stores/product";
const emit = defineEmits(["close-modal"]);

const props = defineProps({
  productId: {
    type: Number,
    default: null,
  },
});
const tasksStore = useProductStore();
const product = ref({
  name: "",
  count: "",
  price: "",
});

const performAction = () => {
  if (props.productId) {
    updateTask();
  } else {
    addTask();
  }
};

const addTask = () => {
  tasksStore.createProduct({ ...product.value, id: Date.now() });
  resetProduct();
  emit("close-modal");
};

const updateTask = () => {
  tasksStore.updateProduct({ ...product.value });
  resetProduct();
  emit("close-modal");
};

const resetProduct = () => {
  product.value = {};
};

onMounted(() => {
  if (props.productId) {
    const fetchedProduct = tasksStore.getProductById(props.productId);
    product.value = { ...fetchedProduct };
  }
});
</script>

<style lang="scss" scoped></style>
