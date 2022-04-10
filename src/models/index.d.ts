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

type UserResponseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubscribedToMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikedPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserInformation {
  readonly id: string;
  readonly username: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly bday: string;
  readonly anon: boolean;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly polls?: (Poll | null)[] | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserInformation, UserInformationMetaData>);
  static copyOf(source: UserInformation, mutator: (draft: MutableModel<UserInformation, UserInformationMetaData>) => MutableModel<UserInformation, UserInformationMetaData> | void): UserInformation;
}

export declare class Poll {
  readonly id: string;
  readonly title: string;
  readonly UserInformation?: UserInformation | null;
  readonly publicity: boolean;
  readonly disclaimer: boolean;
  readonly description: string;
  readonly answerChoices: (string | null)[];
  readonly categories?: (string | null)[] | null;
  readonly tags?: (string | null)[] | null;
  readonly likes: number;
  readonly views: number;
  readonly timeStart: string;
  readonly timeEnd: string;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInformationPollsId?: string | null;
  constructor(init: ModelInit<Poll, PollMetaData>);
  static copyOf(source: Poll, mutator: (draft: MutableModel<Poll, PollMetaData>) => MutableModel<Poll, PollMetaData> | void): Poll;
}

export declare class Comment {
  readonly id: string;
  readonly userInformationID: string;
  readonly pollID: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInformationCommentsId?: string | null;
  readonly pollCommentsId?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class UserResponse {
  readonly id: string;
  readonly userInformationID: string;
  readonly pollID: string;
  readonly content: string;
<<<<<<< HEAD
  readonly createdAt?: string;
  readonly updatedAt?: string;
=======
<<<<<<< HEAD
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
=======
  readonly createdAt?: string;
  readonly updatedAt?: string;
>>>>>>> f3ef4bc1c49e459195c2bec24796757f9203ef8d
>>>>>>> 3a7f26595e397a4065a17473058d0b31a2f2898a
  constructor(init: ModelInit<UserResponse, UserResponseMetaData>);
  static copyOf(source: UserResponse, mutator: (draft: MutableModel<UserResponse, UserResponseMetaData>) => MutableModel<UserResponse, UserResponseMetaData> | void): UserResponse;
}

export declare class SubscribedTo {
  readonly id: string;
  readonly userInformationID: string;
<<<<<<< HEAD
  readonly subscribeList?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
=======
<<<<<<< HEAD
  readonly subscribeList?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
=======
  readonly subscribeList?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
>>>>>>> f3ef4bc1c49e459195c2bec24796757f9203ef8d
>>>>>>> 3a7f26595e397a4065a17473058d0b31a2f2898a
  constructor(init: ModelInit<SubscribedTo, SubscribedToMetaData>);
  static copyOf(source: SubscribedTo, mutator: (draft: MutableModel<SubscribedTo, SubscribedToMetaData>) => MutableModel<SubscribedTo, SubscribedToMetaData> | void): SubscribedTo;
}

export declare class LikedPost {
  readonly id: string;
  readonly userInformationID: string;
<<<<<<< HEAD
  readonly likedPosts?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
=======
<<<<<<< HEAD
  readonly likedPosts?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
=======
  readonly likedPosts?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
>>>>>>> f3ef4bc1c49e459195c2bec24796757f9203ef8d
>>>>>>> 3a7f26595e397a4065a17473058d0b31a2f2898a
  constructor(init: ModelInit<LikedPost, LikedPostMetaData>);
  static copyOf(source: LikedPost, mutator: (draft: MutableModel<LikedPost, LikedPostMetaData>) => MutableModel<LikedPost, LikedPostMetaData> | void): LikedPost;
}