import moment from 'moment';
import * as yup from 'yup';

export const messageValidation = yup.object({
  conversationId: yup.string().required().uuid(),
  timestamp: yup
    .date()
    .transform((value, originalValue) => {
      const formatedValue = new Date(moment(originalValue).format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
      return formatedValue ? formatedValue : null;
    })
    .required(),
  from: yup.string().required().uuid(),
  to: yup.string().required().uuid(),
  text: yup.string().required(),
});
