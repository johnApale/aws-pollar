// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const { User, Poll, userReply } = initSchema(schema);

export {
  User,
  Poll,
  userReply,
  Sex
};