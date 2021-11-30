<template>
  <form ref="formRef" @submit="onSubmit">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { ref } from "vue";

const props = defineProps({
  validationSchema: {
    type: [Object, Array],
    required: true,
  },
  initialValues: {
    type: [Object, Array],
    required: true,
  }
});
const emit = defineEmits(['submit', 'invalid-submit']);

const formRef = ref();

const { resetForm, handleSubmit } = useForm({
  validationSchema: props.validationSchema as any,
  initialValues: props.initialValues
});

const focusFirstInvalid = (formRoot: HTMLBaseElement, errors: any) => {
  // all focusable controls shuld have the u-form-control class
  const nodelist = formRoot.querySelectorAll('.u-form-control');
  if (nodelist) {
    // iterate over all controls in the form and focus on the first invalid
    const controls = Array.from(nodelist) as HTMLInputElement[];
    for (const node of controls) {
      if (errors[node.name]) {
        node.focus();
        break;
      }
    }
  }
};

const onSubmit = handleSubmit((values) => {
  emit('submit', values);
}, (err) => {
  focusFirstInvalid(formRef.value, err.errors);
  emit('invalid-submit', err)
});

</script>