<template>
  <div>
    <table class="my-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in displayedItems" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.email }}</td>
        </tr>
      </tbody>
    </table>
    <pagination-component
      :items="items"
      :per-page="perPage"
      @page-changed="currentPage = $event"
    />
  </div>
</template>

<script>
import PaginationComponent from "./components/VuePaginationComponent.vue";

export default {
  name: "App",
  components: {
    PaginationComponent,
  },
  data() {
    return {
      // Your data array
      items: [
        { id: 1, name: "John Doe", age: 25, email: "johndoe@example.com" },
        { id: 2, name: "Jane Smith", age: 32, email: "janesmith@example.com" },
        { id: 3, name: "Sarah Lee", age: 28, email: "sarahlee@example.com" },
        { id: 4, name: "David Kim", age: 36, email: "davidkim@example.com" },
        { id: 5, name: "Jane Smith", age: 32, email: "janesmith@example.com" },
      ],
      perPage: 3,
      currentPage: 1,
    };
  },
  computed: {
    displayedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    },
  },
};
</script>
<style scoped>
.my-table {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.my-table th,
.my-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #f2f2f2;
  color: #444;
}
</style>
