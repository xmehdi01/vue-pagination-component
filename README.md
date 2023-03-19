vue-pagination-component 💫
========================
A simple and customizable Vue.js pagination component.

---
 - Try: [**DEMO**](https://xmehdi01.github.io/vue-pagination-component/) 
 - Install: [**NPM**](https://www.npmjs.com/package/@xmehdi01/vue-pagination-component)
 - Source code: [**Github**](https://github.com/xmehdi01/vue-pagination-component) 

---

Installation ⚙️
------------

`npm i @xmehdi01/vue-pagination-component`

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
import PaginationComponent from "@xmehdi01/vue-pagination-component";

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