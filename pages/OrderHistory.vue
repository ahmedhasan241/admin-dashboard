<template lang="pug">
.order-history
  h3.main-title Order History
  div.overflow-x-auto
    table.min-w-full
      thead
        tr
          th.px-4.py-2 Order ID
          th.px-4.py-2 Customer Name
          th.px-4.py-2 Order Date
          th.px-4.py-2 Total Amount
      tbody
        tr(v-for="(order, index) in orderHistory" :key="index")
          td.border.px-4.py-2.text-center {{ order.id }}
          td.border.px-4.py-2.text-center {{ order.customerName }}
          td.border.px-4.py-2.text-center {{ order.orderDate }}
          td.border.px-4.py-2.text-center {{ order.totalAmount }}
  div.my-20
    OrderLine
  div.my-20
    BarChart

</template>

<script>
export default {
  data() {
    return {
      orderHistory: [
        {
          id: 1,
          customerName: "John Doe",
          orderDate: "2023-01-15",
          totalAmount: "$250.00",
        },
        {
          id: 2,
          customerName: "Jane Smith",
          orderDate: "2023-02-20",
          totalAmount: "$150.00",
        },
        {
          id: 3,
          customerName: "Alice Johnson",
          orderDate: "2023-03-10",
          totalAmount: "$300.00",
        },
        {
          id: 4,
          customerName: "Bob Brown",
          orderDate: "2023-04-05",
          totalAmount: "$180.00",
        },
        {
          id: 5,
          customerName: "Eva White",
          orderDate: "2023-05-12",
          totalAmount: "$450.00",
        },
        {
          id: 6,
          customerName: "Mike Wilson",
          orderDate: "2023-06-25",
          totalAmount: "$200.00",
        },
        {
          id: 7,
          customerName: "Lucy Davis",
          orderDate: "2023-07-30",
          totalAmount: "$320.00",
        },
        {
          id: 8,
          customerName: "Sarah Taylor",
          orderDate: "2023-08-17",
          totalAmount: "$280.00",
        },
        {
          id: 9,
          customerName: "David Harris",
          orderDate: "2023-09-22",
          totalAmount: "$190.00",
        },
        {
          id: 10,
          customerName: "Olivia Robinson",
          orderDate: "2023-10-09",
          totalAmount: "$370.00",
        },
      ],
    };
  },
};
definePageMeta({
  layout: "custom",
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
