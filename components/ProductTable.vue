<template lang="pug">
table.table
  thead.table-thead
    tr
      th(v-for="column in columns" :key="column.key" class="px-4 py-4") {{ column.label }}
      th(class="px-4 py-4") action
  tbody
    tr(
        v-for="row in rows"
        :key="row.id"
        class="table-tr"
      )
        td(
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-3"
          ) {{ row[column.key] }}
        td.flex.items-center.px-4.py-3
          button(
            @click="editProduct(row.id)"
            class="btn-edit"
          ) Edit
          Icon(name="material-symbols:edit-calendar" @click="editUser(row.id)" class="my-5 mr-4 text-xl  text-blue-700")
          button(
            @click="deleteProduct (row.id)"
            class="btn-delete"
          ) Delete
          Icon(name="material-symbols:delete-outline-sharp" @click="deleteUser(row.id)" class="my-5  text-xl  text-red-700")
</template>

<script setup>
const emit = defineEmits(["edit", "delete"]);

const props = defineProps({
  rows: Array,
  columns: Array,
});

const editProduct = (productId) => {
  emit("edit", productId);
};

const deleteProduct = (productId) => {
  emit("delete", productId);
};
</script>
