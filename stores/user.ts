import { defineStore } from "pinia";

interface User {
  id: number;
  name: string;
  role: string;
  company: string;
  createdDate: string;
  lastModifiedDate: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    Users: [
      {
        id: 1,
        name: "John Doe",
        role: "Admin",
        company: "ABC Inc.",
        createdDate: "2023-09-28",
        lastModifiedDate: "2023-09-28",
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "User",
        company: "XYZ Corp.",
        createdDate: "2023-09-27",
        lastModifiedDate: "2023-09-27",
      },
      {
        id: 3,
        name: "Alice Johnson",
        role: "User",
        company: "123 Ltd.",
        createdDate: "2023-09-26",
        lastModifiedDate: "2023-09-26",
      },
      {
        id: 4,
        name: "Bob Brown",
        role: "User",
        company: "Tech Co.",
        createdDate: "2023-09-25",
        lastModifiedDate: "2023-09-25",
      },
      {
        id: 5,
        name: "Eva Wilson",
        role: "Admin",
        company: "Software Solutions",
        createdDate: "2023-09-24",
        lastModifiedDate: "2023-09-24",
      },
      {
        id: 6,
        name: "David Lee",
        role: "User",
        company: "Tech World",
        createdDate: "2023-09-23",
        lastModifiedDate: "2023-09-23",
      },
      {
        id: 7,
        name: "Grace Turner",
        role: "User",
        company: "Data Systems",
        createdDate: "2023-09-22",
        lastModifiedDate: "2023-09-22",
      },
      {
        id: 8,
        name: "Michael Clark",
        role: "Admin",
        company: "Web Services",
        createdDate: "2023-09-21",
        lastModifiedDate: "2023-09-21",
      },
      {
        id: 9,
        name: "Linda Martinez",
        role: "User",
        company: "Cloud Tech",
        createdDate: "2023-09-20",
        lastModifiedDate: "2023-09-20",
      },
      {
        id: 10,
        name: "Richard Davis",
        role: "User",
        company: "Innovate Inc.",
        createdDate: "2023-09-19",
        lastModifiedDate: "2023-09-19",
      },
    ] as User[], // Annotate Users as an array of User objects
  }),
  actions: {
    createUser(user: Omit<User, "id">) {
      // Annotate the parameter user
      this.Users.unshift({
        id: Date.now(),
        ...user,
        createdDate: new Date().toLocaleString(),
        lastModifiedDate: new Date().toLocaleString(),
      });
    },
    updateUser(updatedUser: User) {
      // Annotate the parameter updatedUser
      const index = this.Users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        this.Users[index] = {
          ...updatedUser,
          lastModifiedDate: new Date().toLocaleString(),
        };
      }
    },
    deleteUser(userId: number) {
      // Annotate the parameter userId
      this.Users = this.Users.filter((user) => user.id !== userId);
    },
  },
  getters: {
    getUserList: (state) => state.Users,
    getUserById: (state) => (id: number) => {
      // Annotate the parameter id
      return state.Users.find((user) => user.id === id);
    },
    getUserColumns: () => {
      return [
        {
          key: "name",
          label: "User Name",
        },
        {
          key: "company",
          label: "Company",
        },
        {
          key: "role",
          label: "Role",
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
