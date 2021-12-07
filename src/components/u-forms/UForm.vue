<template>
  <form ref="formRef" novalidate @submit="onSubmit">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { ref, toRef } from "vue";

const props = defineProps({
  validationSchema: {
    type: [Object, Array],
  },
  initialValues: {
    type: [Object, Array],
  }
});
const emit = defineEmits(['submit', 'invalid-submit', 'submitting']);

const formRef = ref();

const { resetForm, handleSubmit } = useForm({
  validationSchema: (toRef(props, 'validationSchema') as any),
  initialValues: props.initialValues
});

const focusFirstInvalid = (formRoot: HTMLBaseElement, errors: any) => {
  // all focusable controls shuld have the u-form-control class
  const nodelist = formRoot.querySelectorAll('.u-form-control');
  if (nodelist) {
    // iterate over all controls in the form and focus on the first invalid
    const controls = Array.from(nodelist) as HTMLInputElement[];
    for (const control of controls) {
      if (errors[control.name]) {
        control.focus();
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