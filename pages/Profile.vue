<template lang="pug">
.profile
  .profile-contain
    .profile-head
      img.object-cover.mx-auto.my-5.z-10.w-40.h-40.rounded-full(
        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80",
        alt="Your avatar"
      )
      div
        h3.profile-title Admin Profile
        p.profile-description This is some information about the user.
    .profile-table
      dl.profile-table-contain
        div.profile-table-row
          dt.profile-row-title Full name
          dd.profile-row-contain Ahmed Hasan
        div.profile-table-row
          dt.profile-row-title Email address
          dd.profile-row-contain test@gmail.com
        div.profile-table-row
          dt.profile-row-title Password
          dd.profile-row-contain 123456test
        div.profile-table-row
          dt.profile-row-title Phone number
          dd.profile-row-contain +20-01016011547
        div.profile-table-row
          dt.profile-row-title Address
          dd.profile-row-contain
            | 123 Main St
            br
            | Anytown, USA 12345
  ChangePassword

</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<style lang="scss" scoped></style>
