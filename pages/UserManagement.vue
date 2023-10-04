<template lang="pug">
.product
  .mx-auto.max-w-screen-xl
    .product-contain
      nav.product-nav(aria-label="Table navigation")
        h2.contain-title User Management

      .product-head
        .product-btn-contain
          button(type="button", id="createProductModalButton", data-modal-target="createProductModal", data-modal-toggle="createProductModal", class="product-btn", @click="toggleModal") Add User

      .overflow-x-auto
        UserTable(:rows="rows", :columns="columns", @edit="openEditModal", @delete="deleteUser")

  UserModel(:modalActive="modalActive", @close-modal="toggleModal")
    UserForm(@close-modal="toggleModal", v-model:userId="userId")

</template>

<script setup>
import { ref, computed } from "vue";
import UserTable from "~/components/UserTable.vue";
import UserModel from "~/components/UserModal.vue";
import UserForm from "@/components/UserForm.vue";

import { useUserStore } from "@/stores/user";

const modalActive = ref(null);
const userId = ref(null);

const tasksStore = useUserStore();

const columns = computed(() => tasksStore.getUserColumns);

const rows = computed(() => tasksStore.getUserList);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
  if (!modalActive.value) {
    userId.value = null;
  }
};

const openEditModal = (id) => {
  userId.value = id;
  toggleModal();
};

const deleteUser = (id) => {
  tasksStore.deleteUser(id);
};
definePageMeta({
  layout: "custom",
});
</script>

<style scoped>
/* Apply Tailwind CSS classes here */
</style>
