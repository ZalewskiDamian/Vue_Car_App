<template>
    <div class="checkbox-wrapper">
        <input
            @input="(event) => $emit('update:checked', event.target.checked)"
            type="checkbox"
            :checked="checked"
            :id="fieldId"
            class="checkbox"
        />
        <label
            :for="fieldId"
            class="checkmark"
        >
            <i
            class="fa mr-2"
            :class="{
                'fa-check-square text-blue-600': checked,
                'fa-square text-gray-500': !checked,
            }"
            ></i>
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
  props: {
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.checkbox-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
}
.checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.checkmark {
    position: relative;
    padding-left: 10px;
    cursor: pointer;
    text-align: left;
}
.checkmark::before {
    content: '';
    position: absolute;
    top: 47%;
    transform: translateY(-50%);
    left: -10px;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid white;
    background-color: white;
}
.checkbox:checked + .checkmark:after {
    content: '';
    position: absolute;
    width: 8px;
    border-radius: 2px;
    height: 8px;
    left: -8px;
    top: 47%;
    transform: translateY(-50%);
    background: #000;
}
</style>