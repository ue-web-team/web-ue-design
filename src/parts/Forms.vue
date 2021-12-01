<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Forms & validation</h2>
    <div class="grid grid-cols-1 items-start justify-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4">
      <UCard>
        <UCardHeader>
          <UCardTitle>Form example 1</UCardTitle>  
        </UCardHeader>
        <UCardContent>
          <UForm
            class="flex flex-col flex-col gap-4"
            id="first-form"
            @submit="onSubmit"
            :initial-values="initialFormValues1"
            :validation-schema="schema1"
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

      <UCard :color="colors.blue['100']">
        <UCardHeader>
          <UCardTitle>Form example 2</UCardTitle>  
        </UCardHeader>
        <UCardContent>
          <UForm
            class="flex flex-col flex-col gap-4"
            id="third-form"
            @submit="onSubmit"
            :initial-values="initialFormValues2"
            :validation-schema="schema2"
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
            <UFormSelect label="What gender?" name="gender" :items="genders" />
          </UForm>
        </UCardContent>
        <UCardActions>
          <UButton form="third-form" class="w-full" type="submit">Change identity</UButton>
        </UCardActions>
      </UCard>
      
      <UCard :color="colors.green['100']">
        <UCardHeader>
          <UCardTitle>Form example 3</UCardTitle>  
        </UCardHeader>
        <UCardContent>
          <UForm
            class="flex flex-col flex-col gap-4"
            id="second-form"
            @submit="onSubmit"
            :initial-values="initialFormValues3"
            :validation-schema="schema3"
            @invalid-submit="onInvalidSubmit"
          >
            <UFormText
              placeholder="name placheholder"
              required
              label="Enter your name"
              name="name"
              type="text"
            />
          
          </UForm>
        </UCardContent>
        <UCardActions>
          <UButton form="second-form" class="w-full" type="submit">Change Billing</UButton>
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
  //console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  //console.log(results); // a detailed map of field names and their validation results
}

const initialFormValues1 = {
  feedback: 'initial feddback set before',
};

const initialFormValues2 = {
  name: 'Markus Marklund',
  email: 'marcus.marklund@aik.se',
  gender: 'None'
};

const initialFormValues3 = {
  name: 'Markus Marklund',
  email: 'marcus.marklund@aik.se',
  billing: 'Paper invoice'
};

const genders = ['None', 'Male', 'Female', 'Transgender', 'Non binary', 'Undetermined'];
const billingOptions = ['Paper invoice', 'E-mail', 'Kivra', 'Bank transfer']

const schema1 = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirm_password: yup.string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
  agree: yup.string().required("Du måste gå med på våra villkor"),
});

const schema2 = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string()
    .required()
    .notOneOf(["None", "Undetermined"], "En könstillhörighet är viktigt! Även om den är normbrytande"),
});

const schema3 = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string()
    .required()
    .notOneOf(["None", "Undetermined"], "En könstillhörighet är viktigt! Även om den är normbrytande"),
});

</script>