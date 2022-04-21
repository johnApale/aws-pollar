/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversationUserByUserID = /* GraphQL */ `
  subscription OnCreateConversationUserByUserID($userID: String!) {
    onCreateConversationUserByUserID(userID: $userID) {
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
        cnversationUsers {
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
export const onCreateMessageByConversationID = /* GraphQL */ `
  subscription OnCreateMessageByConversationID($conversationId: ID!) {
    onCreateMessageByConversationID(conversationId: $conversationId) {
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
        cnversationUsers {
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
export const onCreateNotificationByUserID = /* GraphQL */ `
  subscription OnCreateNotificationByUserID($toUser: String!) {
    onCreateNotificationByUserID(toUser: $toUser) {
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
export const onCreateUserInformation = /* GraphQL */ `
  subscription OnCreateUserInformation {
    onCreateUserInformation {
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
export const onUpdateUserInformation = /* GraphQL */ `
  subscription OnUpdateUserInformation {
    onUpdateUserInformation {
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
export const onDeleteUserInformation = /* GraphQL */ `
  subscription OnDeleteUserInformation {
    onDeleteUserInformation {
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
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
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
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
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
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUserAnswer = /* GraphQL */ `
  subscription OnCreateUserAnswer {
    onCreateUserAnswer {
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
export const onUpdateUserAnswer = /* GraphQL */ `
  subscription OnUpdateUserAnswer {
    onUpdateUserAnswer {
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
export const onDeleteUserAnswer = /* GraphQL */ `
  subscription OnDeleteUserAnswer {
    onDeleteUserAnswer {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow {
    onCreateFollow {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow {
    onUpdateFollow {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow {
    onDeleteFollow {
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
export const onCreateConversationUser = /* GraphQL */ `
  subscription OnCreateConversationUser {
    onCreateConversationUser {
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
        cnversationUsers {
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
export const onUpdateConversationUser = /* GraphQL */ `
  subscription OnUpdateConversationUser {
    onUpdateConversationUser {
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
        cnversationUsers {
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
export const onDeleteConversationUser = /* GraphQL */ `
  subscription OnDeleteConversationUser {
    onDeleteConversationUser {
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
        cnversationUsers {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
      id
      cnversationUsers {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
      id
      cnversationUsers {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
      id
      cnversationUsers {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
        cnversationUsers {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
        cnversationUsers {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
        cnversationUsers {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
