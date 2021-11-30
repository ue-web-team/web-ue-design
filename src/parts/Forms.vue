<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Forms & validation</h2>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <UCard class="max-w-xs">
        <UCardHeader>
          <UCardTitle>Form example</UCardTitle>  
        </UCardHeader>
        <UCardContent>
          <UForm
            class="flex flex-col flex-colgap-4"
            id="first-form"
            @submit="onSubmit"
            :initial-values="initialFormValues"
            :validation-schema="schema"
            @invalid-submit="onInvalidSubmit"
          >
            <UFormText
              placeholder="name placheholder"
              required
              label="Enter your name"
              name="name"
              type="text"
            />
            <UFormText required label="Enter your email" name="email" type="email" />
            <UFormText required label="Enter your password" name="password" type="password" />
            <UFormText
              required
              label="Confirm your password"
              name="confirm_password"
              type="password"
            />
            <UFormText textarea label="Feedback" name="feedback" />
          </UForm>
        </UCardContent>
        <UCardActions>
          <UButton form="first-form" class="w-full" type="submit">Submit</UButton>
        </UCardActions>
      </UCard>
    </div>
  </article>
</template>

<script setup lang="ts">
import * as yup from 'yup';

const onSubmit = (values: any) => {
  alert(JSON.stringify(values, null, 2));
}

const onInvalidSubmit = ({ values, errors, results }) => {
  console.log('invalid')
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}

const initialFormValues = {
  feedback: 'initial feddback set before',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup.string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

</script>