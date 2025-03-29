import axios from 'axios';
import { BASE_URL } from './../../../services/api.services';
import { FormBodyDTO } from './form.dto';

export const apiFormContact = (body: FormBodyDTO) => {
  return axios({
    url: `${BASE_URL}/form-contact`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(body),
  }).then((r) => {
    return r;
  });
};
