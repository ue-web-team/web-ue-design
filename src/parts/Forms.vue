<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Forms & validation</h2>
    <div class="grid grid-cols-1 place-items-start md:grid-cols-2">
      <UCard class="max-w-sm">
        <UCardHeader>
          <UCardTitle>Form example 1</UCardTitle>  
        </UCardHeader>
        <UCardContent>
          <UForm
            class="flex flex-col flex-col gap-4"
            id="first-form"
            @submit="onSubmit"
            :initial-values="initialFormValues1"
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
            <UFormCheckbox label="I agree to the terms" name="agree" value="yes"/>
          </UForm>
        </UCardContent>
        <UCardActions>
          <UButton form="first-form" class="w-full" type="submit">Submit</UButton>
        </UCardActions>
      </UCard>

      <UCard class="max-w-sm" :color="colors.red['100']">
        <UCardHeader>
          <UCardTitle>Form example 2</UCardTitle>  
        </UCardHeader>
        <UCardContent>
          <UForm
            class="flex flex-col flex-col gap-4"
            id="second-form"
            @submit="onSubmit"
            :initial-values="initialFormValues2"
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
            <UFormCheckbox label="I agree to the terms" name="agree" value="yes"/>
          </UForm>
        </UCardContent>
        <UCardActions>
          <UButton form="second-form" class="w-full" type="submit">Submit</UButton>
        </UCardActions>
      </UCard>
    </div>
  </article>
</template>

<script setup lang="ts">
import * as yup from 'yup';
import { colors } from '@/config/colors'

const onSubmit = (values: any) => {
  alert(JSON.stringify(values, null, 2));
}

const onInvalidSubmit = ({ values, errors, results }) => {
  console.log('invalid')
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}

const initialFormValues1 = {
  feedback: 'initial feddback set before',
};

const initialFormValues2 = {
  name: 'Markus Marklund',
  email: 'marcus.marklund@aik.se'
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup.string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
  agree: yup.string().required("Du måste gå med på våra villkor")
});

</script>