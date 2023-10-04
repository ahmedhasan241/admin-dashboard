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
              class="btn-add"
            ) Edit
            button(
              @click="deleteProduct(row.id)"
              class="btn-delete"
            ) Delete
</template>
<script setup>
const emit = defineEmits(["edit", "delete"]);

const props = defineProps({
  rows: Array,
  columns: Array,
});

const editUser = (userId) => {
  emit("edit", userId);
};

const deleteUser = (userId) => {
  emit("delete", userId);
};
</script>
