vue-pagination-component 💫
========================
A simple and customizable Vue.js pagination component.




Installation ⚙️
------------

`npm install vue-pagination-component`

Component using 🚀
-----
```html
<template>
  <div>
      <!-- Render your table here -->
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
      // Your data array goes here
      items: [],
      perPage: 3,
      currentPage: 1,
    };
  },
};
</script>
```

## License 📝
This component is licensed under the MIT License.