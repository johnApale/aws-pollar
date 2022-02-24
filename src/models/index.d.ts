import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Sex {
  MALE = "Male",
  FEMALE = "Female"
}



type UserInformationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PollMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserInformation {
  readonly id: string;
  readonly username: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email: string;
  readonly bday: string;
  readonly anon: boolean;
  readonly sex?: Sex | keyof typeof Sex;
  readonly polls?: (Poll | null)[];
  readonly comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserInformation, UserInformationMetaData>);
  static copyOf(source: UserInformation, mutator: (draft: MutableModel<UserInformation, UserInformationMetaData>) => MutableModel<UserInformation, UserInformationMetaData> | void): UserInformation;
}

export declare class Poll {
  readonly id: string;
  readonly title: string;
  readonly UserInformation?: UserInformation;
  readonly publicity: boolean;
  readonly disclaimer: boolean;
  readonly description: string;
  readonly answerChoices: (string | null)[];
  readonly categories?: (string | null)[];
  readonly tags?: (string | null)[];
  readonly likes: number;
  readonly views: number;
  readonly timeStart: string;
  readonly timeEnd: string;
  readonly comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userInformationPollsId?: string;
  constructor(init: ModelInit<Poll, PollMetaData>);
  static copyOf(source: Poll, mutator: (draft: MutableModel<Poll, PollMetaData>) => MutableModel<Poll, PollMetaData> | void): Poll;
}

export declare class Comment {
  readonly id: string;
  readonly UserInformation?: UserInformation;
  readonly Poll?: Poll;
  readonly content: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userInformationCommentsId?: string;
  readonly pollCommentsId?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}