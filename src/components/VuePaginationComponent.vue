<template>
  <div>
    <div class="pagination">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        :class="{ disabled: currentPage === 1 }"
      >
        {{ prevLabel }}
      </button>
      <button
        v-for="pageNumber in pageCount"
        :key="pageNumber"
        :class="{ active: currentPage === pageNumber }"
        @click="goToPage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === pageCount"
        :class="{ disabled: currentPage === pageCount }"
      >
        {{ nextLabel }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuePaginationComponent",
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    prevLabel: {
      type: String,
      default: "Prev",
    },
    nextLabel: {
      type: String,
      default: "Next",
    },
    prevClass: {
      type: String,
      default: "",
    },
    nextClass: {
      type: String,
      default: "",
    },
    activeClass: {
      type: String,
      default: "active",
    },
  },
  computed: {
    displayedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.items.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.items.length / this.perPage);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
      this.$emit("page-changed", this.currentPage);
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
        this.$emit("page-changed", this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$emit("page-changed", this.currentPage);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #f0f0f0;
  border: none;
  color: #666;
  font-size: 16px;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
}

.pagination button.active {
  background-color: #666;
  color: #fff;
}

.pagination button.disabled {
  background-color: #ccc;
  color: #999;
}

.custom-prev {
  background-color: #333;
  color: #fff;
  border-radius: 5px;
}

.custom-next {
  background-color: #f0f0f0;
  color: #666;
  border-radius: 5px;
}

.custom-active {
  background-color: #333;
  color: #fff;
  border-radius: 5px;
}

@media only screen and (max-width: 600px) {
  .pagination button {
    font-size: 14px;
    padding: 8px 12px;
    margin: 0 3px;
  }
}
</style>
