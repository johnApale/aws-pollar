import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PollMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type userReplyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email: string;
  readonly bday: string;
  readonly anon: boolean;
  readonly accountCreated: string;
  readonly sex: Sex | keyof typeof Sex;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Poll {
  readonly id: string;
  readonly creator: string;
  readonly publicity: boolean;
  readonly disclaimer: boolean;
  readonly title: string;
  readonly description: string;
  readonly answerChoices: (string | null)[];
  readonly categories?: (string | null)[];
  readonly tags?: (string | null)[];
  readonly likes: number;
  readonly views: number;
  readonly timeStart: string;
  readonly timeEnd: string;
  readonly comments?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Poll, PollMetaData>);
  static copyOf(source: Poll, mutator: (draft: MutableModel<Poll, PollMetaData>) => MutableModel<Poll, PollMetaData> | void): Poll;
}

export declare class userReply {
  readonly id: string;
  readonly userID: string;
  readonly pollID: string;
  readonly content?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<userReply, userReplyMetaData>);
  static copyOf(source: userReply, mutator: (draft: MutableModel<userReply, userReplyMetaData>) => MutableModel<userReply, userReplyMetaData> | void): userReply;
}