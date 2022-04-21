/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInformation = /* GraphQL */ `
  mutation CreateUserInformation(
    $input: CreateUserInformationInput!
    $condition: ModelUserInformationConditionInput
  ) {
    createUserInformation(input: $input, condition: $condition) {
      usernameID
      firstName
      lastName
      email
      bday
      anon
      sex
      follow {
        items {
          id
          followingID
          followerID
          createdAt
          updatedAt
        }
        nextToken
      }
      polls {
        items {
          id
          userID
          title
          publicity
          disclaimer
          description
          answerChoices
          categories
          tags
          views
          timeStart
          timeEnd
          createdAt
          updatedAt
        }
        nextToken
      }
      pollAnswers {
        items {
          id
          pollID
          userID
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likedPolls {
        items {
          id
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      notifications {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      activity {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserInformation = /* GraphQL */ `
  mutation UpdateUserInformation(
    $input: UpdateUserInformationInput!
    $condition: ModelUserInformationConditionInput
  ) {
    updateUserInformation(input: $input, condition: $condition) {
      usernameID
      firstName
      lastName
      email
      bday
      anon
      sex
      follow {
        items {
          id
          followingID
          followerID
          createdAt
          updatedAt
        }
        nextToken
      }
      polls {
        items {
          id
          userID
          title
          publicity
          disclaimer
          description
          answerChoices
          categories
          tags
          views
          timeStart
          timeEnd
          createdAt
          updatedAt
        }
        nextToken
      }
      pollAnswers {
        items {
          id
          pollID
          userID
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likedPolls {
        items {
          id
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      notifications {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      activity {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserInformation = /* GraphQL */ `
  mutation DeleteUserInformation(
    $input: DeleteUserInformationInput!
    $condition: ModelUserInformationConditionInput
  ) {
    deleteUserInformation(input: $input, condition: $condition) {
      usernameID
      firstName
      lastName
      email
      bday
      anon
      sex
      follow {
        items {
          id
          followingID
          followerID
          createdAt
          updatedAt
        }
        nextToken
      }
      polls {
        items {
          id
          userID
          title
          publicity
          disclaimer
          description
          answerChoices
          categories
          tags
          views
          timeStart
          timeEnd
          createdAt
          updatedAt
        }
        nextToken
      }
      pollAnswers {
        items {
          id
          pollID
          userID
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      likedPolls {
        items {
          id
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      conversations {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      notifications {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      activity {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
      id
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      publicity
      disclaimer
      description
      answerChoices
      categories
      tags
      like {
        items {
          id
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      views
      timeStart
      timeEnd
      comments {
        items {
          id
          content
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userAnswers {
        items {
          id
          pollID
          userID
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      activity {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $input: UpdatePollInput!
    $condition: ModelPollConditionInput
  ) {
    updatePoll(input: $input, condition: $condition) {
      id
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      publicity
      disclaimer
      description
      answerChoices
      categories
      tags
      like {
        items {
          id
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      views
      timeStart
      timeEnd
      comments {
        items {
          id
          content
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userAnswers {
        items {
          id
          pollID
          userID
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      activity {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $input: DeletePollInput!
    $condition: ModelPollConditionInput
  ) {
    deletePoll(input: $input, condition: $condition) {
      id
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      publicity
      disclaimer
      description
      answerChoices
      categories
      tags
      like {
        items {
          id
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      views
      timeStart
      timeEnd
      comments {
        items {
          id
          content
          pollID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      userAnswers {
        items {
          id
          pollID
          userID
          answer
          createdAt
          updatedAt
        }
        nextToken
      }
      activity {
        items {
          id
          toUser
          fromUser
          notificationType
          pollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserAnswer = /* GraphQL */ `
  mutation CreateUserAnswer(
    $input: CreateUserAnswerInput!
    $condition: ModelUserAnswerConditionInput
  ) {
    createUserAnswer(input: $input, condition: $condition) {
      id
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      answer
      createdAt
      updatedAt
    }
  }
`;
export const updateUserAnswer = /* GraphQL */ `
  mutation UpdateUserAnswer(
    $input: UpdateUserAnswerInput!
    $condition: ModelUserAnswerConditionInput
  ) {
    updateUserAnswer(input: $input, condition: $condition) {
      id
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      answer
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserAnswer = /* GraphQL */ `
  mutation DeleteUserAnswer(
    $input: DeleteUserAnswerInput!
    $condition: ModelUserAnswerConditionInput
  ) {
    deleteUserAnswer(input: $input, condition: $condition) {
      id
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      answer
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFollow = /* GraphQL */ `
  mutation CreateFollow(
    $input: CreateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    createFollow(input: $input, condition: $condition) {
      id
      followingID
      followerID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollow = /* GraphQL */ `
  mutation UpdateFollow(
    $input: UpdateFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    updateFollow(input: $input, condition: $condition) {
      id
      followingID
      followerID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollow = /* GraphQL */ `
  mutation DeleteFollow(
    $input: DeleteFollowInput!
    $condition: ModelFollowConditionInput
  ) {
    deleteFollow(input: $input, condition: $condition) {
      id
      followingID
      followerID
      UserInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createConversationUser = /* GraphQL */ `
  mutation CreateConversationUser(
    $input: CreateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    createConversationUser(input: $input, condition: $condition) {
      id
      userID
      conversationID
      user {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      Conversation {
        id
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateConversationUser = /* GraphQL */ `
  mutation UpdateConversationUser(
    $input: UpdateConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    updateConversationUser(input: $input, condition: $condition) {
      id
      userID
      conversationID
      user {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      Conversation {
        id
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteConversationUser = /* GraphQL */ `
  mutation DeleteConversationUser(
    $input: DeleteConversationUserInput!
    $condition: ModelConversationUserConditionInput
  ) {
    deleteConversationUser(input: $input, condition: $condition) {
      id
      userID
      conversationID
      user {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      Conversation {
        id
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      conversationUsers {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      conversationUsers {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      conversationUsers {
        items {
          id
          userID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          conversationID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      conversationID
      user {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      Conversation {
        id
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      conversationID
      user {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      Conversation {
        id
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      createdAt
      content
      userID
      conversationID
      user {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        follow {
          nextToken
        }
        polls {
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
          nextToken
        }
        likedPolls {
          nextToken
        }
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        notifications {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      Conversation {
        id
        conversationUsers {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      toUser
      fromUser
      notificationType
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      toUser
      fromUser
      notificationType
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      toUser
      fromUser
      notificationType
      pollID
      Poll {
        id
        userID
        UserInformation {
          usernameID
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
        }
        title
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        like {
          nextToken
        }
        views
        timeStart
        timeEnd
        comments {
          nextToken
        }
        userAnswers {
          nextToken
        }
        activity {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
