import { defineStore } from "pinia";

interface Product {
  id: number;
  name: string;
  count: number;
  price: number;
  createdDate: string;
  lastModifiedDate: string;
}

export const useProductStore = defineStore("product", {
  state: () => ({
    Products: [
      {
        id: 1,
        name: "Product 1",
        count: 5,
        price: 10.99,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 2,
        name: "Product 2",
        count: 10,
        price: 19.99,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 3,
        name: "Product 3",
        count: 3,
        price: 7.49,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 4,
        name: "Product 4",
        count: 8,
        price: 14.95,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 5,
        name: "Product 5",
        count: 2,
        price: 5.99,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 6,
        name: "Product 6",
        count: 15,
        price: 24.99,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 7,
        name: "Product 7",
        count: 4,
        price: 9.49,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 8,
        name: "Product 8",
        count: 6,
        price: 12.99,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 9,
        name: "Product 9",
        count: 7,
        price: 16.75,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 10,
        name: "Product 10",
        count: 1,
        price: 3.99,
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
    ] as Product[], // Annotate Users as an array of User objects
  }),
  actions: {
    createProduct(product: Omit<Product, "id">) {
      // Annotate the parameter user
      this.Products.unshift({
        id: Date.now(),
        ...product,
        createdDate: new Date().toLocaleString(),
        lastModifiedDate: new Date().toLocaleString(),
      });
    },
    updateUser(updatedProduct: Product) {
      // Annotate the parameter updatedUser
      const index = this.Products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        this.Products[index] = {
          ...updatedProduct,
          lastModifiedDate: new Date().toLocaleString(),
        };
      }
    },
    deleteProduct(productId: number) {
      // Annotate the parameter userId
      this.Products = this.Products.filter(
        (product) => product.id !== productId
      );
    },
  },
  getters: {
    getProductList: (state) => state.Products,
    getProductById: (state) => (id: number) => {
      // Annotate the parameter id
      return state.Products.find((product) => product.id === id);
    },
    getProductColumns: () => {
      return [
        {
          key: "name",
          label: "Product Name",
        },
        {
          key: "count",
          label: "count",
        },
        {
          key: "price",
          label: "Product Price",
        },
        {
          key: "createdDate",
          label: "Created Date",
        },
        {
          key: "lastModifiedDate",
          label: "Last Modified Date",
        },
      ];
    },
  },
});
