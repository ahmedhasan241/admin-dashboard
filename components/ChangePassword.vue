<script setup lang="ts">
import { Field, Form, ErrorMessage, defineRule } from "vee-validate";
import * as yup from "yup";

const schema = yup.object().shape({
  password: yup.string().required(),
  newPassword: yup.string().min(5).required(),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

function onSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template lang="pug">
.change-password
  .change-contain
    p.antialiased.font-bold.text-3xl.mx-auto.my-4 Change Password
    Form(@submit="onSubmit" :validation-schema="schema" class="space-y-6")
      div
        div.flex.items-center.justify-between
          label(for="password" class="label") Password
        div.my-2
          Field(id="password" name="password" type="password" autocomplete="current-password" class="input")
        ErrorMessage(name="password")
      div
        div.flex.items-center.justify-between
          label(for="newPassword" class="label") New Password
        div.my-2
          Field(id="newPassword" name="newPassword" type="password" class="input")
        ErrorMessage(name="newPassword")
      div
        div.flex.items-center.justify-between
          label(for="passwordConfirmation" class="label") Confirm New Password
        div.my-2
          Field(id="passwordConfirmation" name="passwordConfirmation" type="password" class="input")
        ErrorMessage(name="passwordConfirmation")
      button(type="submit" class="btn") Submit

</template>
