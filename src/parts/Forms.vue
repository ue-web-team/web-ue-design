<template>
  <article>
    <h2 class="text-3xl border-b pb-4 mb-4 font-medium">Forms & validation</h2>
    <p class="mb-4">
      Form an form controls (inputs, textarea, select etc..) components with validation and built in accesability.
      Automatic handling of id:s, aria-describedby, aria-invalid and aria-required. Validates on submit and blur (if dirty).
      Focuses the first invalid form control on submit.
    </p>
    <ul class="mb-4 list-disc list-inside">
      <li>
        <a
          class="link"
          href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1"
          target="_blank"
          rel="noopener noreferrer"
        >Using the aria-describedby property to provide a descriptive label for user interface controls</a>
      </li>
      <li>
        <a
          class="link"
          href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21"
          target="_blank"
          rel="noopener noreferrer"
        >Using Aria-Invalid to Indicate An Error Field</a>
      </li>
      <li>
        <a
          class="link"
          href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2"
          target="_blank"
          rel="noopener noreferrer"
        >Identifying a required field with the aria-required property</a>
      </li>
      <li>
        <a
          class="link"
          href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19"
          target="_blank"
          rel="noopener noreferrer"
        >Using ARIA role=alert or Live Regions to Identify Errors</a>
      </li>
      <li>
        <a
          class="link"
          href="https://www.digitala11y.com/anatomy-of-accessible-forms-errors-of-the-ways/"
          target="_blank"
          rel="noopener noreferrer"
        >Anatomy of Accessible Forms: Errors of the ways</a>
      </li>
    </ul>

    <div
      class="grid grid-cols-1 items-start justify-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
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
            <UFormCheckbox label="I agree to the terms" name="agree" value="yes" />
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
            <UFormSelect label="What gender?" name="gender" :options="genders" />
            <UFormSelect label="Drinking habits?" name="habit" :options="complex" />
          </UForm>
        </UCardContent>
        <UCardActions>
          <UButton form="third-form" class="w-full" type="submit">Change identity</UButton>
        </UCardActions>
      </UCard>

      <UCard :isLoading="isLoading" :color="colors.green['100']">
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
            <UFormText required label="Your billing address" name="address" type="text" />
            <UFormText label="C/o address" name="co" type="text" :hint="'C/o means Care of'" />
            <UFormRadioGroup :options="billingOptions" legend="Billing options" name="billing" />
          </UForm>
        </UCardContent>
        <UCardActions>
          <UButton
            :loading="isLoading"
            form="second-form"
            class="w-full"
            type="submit"
          >Change Billing</UButton>
        </UCardActions>
      </UCard>
    </div>
    <h3 class="text-xl my-4">Usage</h3>
    <Prism language="html" class="codesnippet">{{ code }}</Prism>
  </article>
</template>

<script setup lang="ts">
import * as yup from 'yup';
import { colors } from '@/config/colors'
import { ref } from 'vue';
import Prism from "@/lib/code-block"

const code =
  `<UForm
  @submit="onSubmit"
  @invalid-submit="onInvalidSubmit"
  :initial-values="initialFormValues"
  :validation-schema="schema"
>
  <UFormText
    placeholder="name placheholder"
    required
    label="Enter your name"
    name="name"
    type="text"
  />
  <UFormText required label="Enter your email" name="email" type="email" />
  <UButton type="submit">Submit</UButton> 
</UForm>
`

const onSubmit = (values: any) => {
  isLoading.value = true;
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    isLoading.value = false;
  }, 1000);
}

const onInvalidSubmit = ({ errors }: { errors: any }) => {
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
  address: "Marklunds kurva 12",
  billing: 'Paper invoice',
  habit: 1
};

const isLoading = ref(false);

const genders = ['None', 'Male', 'Female', 'Transgender', 'Non binary', 'Undetermined'];
const complex = [
  {
    label: 'None at all',
    value: 0,
    disabled: false
  },
  {
    label: 'More than average',
    value: 1,
    disabled: false
  },
  {
    label: 'You dont want to know',
    value: 2,
    disabled: true
  }
]
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
  address: yup.string().required(),
  co: yup.string().max(10),
  billing: yup.string()
    .required()
    .notOneOf(["Paper invoice"], "Vi är en papperslös organisation 😘"),
});

</script>