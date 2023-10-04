<template lang="pug">
form(@submit.prevent="performAction")
  div.user-form
    div.form-contain
      label(for="name" class="label") User Name
      input(type="text" v-model="user.name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="User name" required)
    div.form-contain
      label(for="company" class="label") Company Name
      input(id="company" v-model="user.company" required class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Company Name")
    div.form-contain
      label(for="role" class="label") Role
      select(v-model="user.role" required class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500")
        option(value="User") User
        option(value="Admin") Admin
        option(value="Moderator") Moderator
  button(type="submit" class="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800")
    | {{ props.userId ? "Update" : "Add" }} User

</template>

<script setup>
import { useUserStore } from "@/stores/user";
const emit = defineEmits(["close-modal"]);

const props = defineProps({
  userId: {
    type: Number,
    default: null,
  },
});
const tasksStore = useUserStore();
const user = ref({
  name: "",
  company: "",
  role: "user",
});

const performAction = () => {
  if (props.userId) {
    updateTask();
  } else {
    addTask();
  }
};

const addTask = () => {
  tasksStore.createUser({ ...user.value, id: Date.now() });
  resetUser();
  emit("close-modal");
};

const updateTask = () => {
  tasksStore.updateUser({ ...user.value });
  resetUser();
  emit("close-modal");
};

const resetUser = () => {
  user.value = {};
};

onMounted(() => {
  if (props.userId) {
    const fetchedUser = tasksStore.getUserById(props.userId);
    user.value = { ...fetchedUser };
  }
});
</script>

<style lang="scss" scoped></style>
