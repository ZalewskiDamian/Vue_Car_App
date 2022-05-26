<template>
    <div class="multi-checkbox-wrapper">
        <check-box
            v-for="option in options"
            :checked="value.includes(option.id)"
            @update:checked="check(option.id, $event)"
            :fieldId="option.name"
            :label="option.name"
            :key="option"
        />
    </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";

export default {
  emits: ["update:value"],
  props: {
    value: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) =>
          Object.keys(option).includes("name")
        );
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes("id")
        );
        return hasNameKey && hasIdKey;
      },
    },
  },
  setup(props, context) {
    const check = (optionId, checked) => {
      let updatedValue = [...props.value];
      if (checked) {
        updatedValue.push(optionId);
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      context.emit("update:value", updatedValue);
    };

    return {
      check,
    };
  },
  components: {
    "check-box": Checkbox,
  },
};
</script>

<style>
.multi-checkbox-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100%);
    grid-gap: 10px 0;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
}
@media (min-width: 425px) {
  .multi-checkbox-wrapper {
    grid-template-columns: repeat(auto-fill, 300px);
  }
}
@media (min-width: 1540px) {
  .multi-checkbox-wrapper {
    grid-template-columns: repeat(auto-fill, 350px);
  }
}
</style>
