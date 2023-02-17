import * as yup from 'yup';

export const botValidation = yup.object({
  name: yup.string().required(),
});
