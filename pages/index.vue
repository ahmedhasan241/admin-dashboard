<template lang="pug">
.form
  .form-container
    p.antialiased.font-bold.text-5xl.mx-auto.my-4 Log In
    Form(@submit="onSubmit" :validation-schema="schema" class="space-y-6")
      div
        label.form-label(for="email") Email address
        div.my-2
          Field(id="email" name="email" type="email" placeholder="EXP : test@gmail.com" v-bind="emailValue" autocomplete="email" class="form-input")
        ErrorMessage(name="email" class="my-2")
      div
        div.flex.items-center.justify-between
          label.form-label(for="password") Password
        div.my-2
          Field(id="password" name="password" type="password" placeholder="EXP : 123456test" autocomplete="current-password" class="form-input")
        ErrorMessage(name="password" class="my-2")
        span.error(v-if="loginError") {{ loginError }}
      div
        button.form-btn(type="submit") Log in
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const emailValue = ref();
const password = ref();
const loginError = ref(null);

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
function onSubmit(values) {
  // Submit values to API...
  if (values.email == "test@gmail.com" && values.password == "123456test") {
    navigateTo("/dashboard");
  } else {
    // Display an error message for incorrect credentials
    loginError.value = "Invalid username or password";
  }
}
definePageMeta({
  layout: "default",
});
</script>
