import axios from 'axios';
import { SEND_EMAIL_API } from '../../../constants/env';
import { Email } from '../../entity/Email';
import { emailImplConverter } from './converter';

const createEmailOwner = async (email: Email): Promise<void> => {
  const params = emailImplConverter.createOwnerParameter(email);
  await axios.post(SEND_EMAIL_API, params);
};

const createEmailUser = async (email: Email): Promise<void> => {
  const params = emailImplConverter.createUserParameter(email);
  await axios.post(SEND_EMAIL_API, params);
};

const createEmail = async (email: Email): Promise<void> => {
  await Promise.all([createEmailOwner(email), createEmailUser(email)]);
};

export const emailImpl = {
  createEmail,
};

export type EmailUseCase = typeof emailImpl;
