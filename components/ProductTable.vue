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
            @click="editUser(row.id)"
            class="btn-edit"
          ) Edit
          button(
            @click="deleteUser(row.id)"
            class="btn-delete"
          ) Delete
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
