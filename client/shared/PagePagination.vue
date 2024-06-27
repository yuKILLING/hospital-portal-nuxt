<template>
  <div v-if="total">
    <Pagination
      v-slot="{ page }"
      :total="total"
      :sibling-count="1"
      show-edges
      :default-page="1"
      class="my-4"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst @click="$emit('pageChange', 1)"/>
        <!-- <PaginationPrev /> -->

        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0"
              :variant="item.value === page ? 'default' : 'outline'"
              @click="$emit('pageChange', item.value)"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <!-- <PaginationNext /> -->
        <PaginationLast @click="$emit('pageChange', Math.ceil(total / 10))"/>
      </PaginationList>
    </Pagination>
  </div>
</template>

<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});
</script>

<style scoped></style>
