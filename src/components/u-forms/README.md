# Accessible forms module

- Mark required form elements both for sighted and not so sighted users.
- Validate on submitt (preffered for scrrenreader users).
- Move focus to first form control with validation error (on submitt).
- use 'aria-describedby' to link error message with affected input.
- Never disable submitt button as this will confuse screenreader users when they explore the form.

1. Alert inline, then focus that element
2. Associate error text with form input using 'aria-describedby'
3. set 'aria-invalid="true"' on affected input

<UForm>
  <UFormField label="Enter your e-mail">
    <UFormControl type="email"></UFormControl>
    <UFormHint>The one u linked</UFormHint>
    <UFormError v-if="error">Error</UFormError>
  </UFormField>
  <UFormField label="Enter your password">
    <UFormControl type="password"></UFormControl>
    <UFormHint>At least 6 charecters</UFormHint>
    <UFormError v-if="error">Error</UFormError>
  </UFormField>
  <UButton type="submitt">Submitt</Ubutton> 
</UForm>


<div>
  <label for="input-id">label</label>
  <input type="text" id="input-id" aria-describedby="input-error-id">
  <p id="input-error-id">error!</p>
</div>