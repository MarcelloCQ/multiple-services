import { BASE_URL } from './../../../services/api.services';
import { FormBodyDTO } from './form.dto';

export const apiFormContact = (body: FormBodyDTO) => {
  return fetch(`${BASE_URL}/form-contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json();
  });
};
