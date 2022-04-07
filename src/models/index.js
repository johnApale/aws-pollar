// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Sex = {
  "MALE": "Male",
  "FEMALE": "Female"
};

const { UserInformation, Poll, Comment, UserResponse, SubscribedTo, LikedPost } = initSchema(schema);

export {
  UserInformation,
  Poll,
  Comment,
  UserResponse,
  SubscribedTo,
  LikedPost,
  Sex
};