/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageByConversation = /* GraphQL */ `
  subscription OnCreateMessageByConversation($conversationID: ID!) {
    onCreateMessageByConversation(conversationID: $conversationID) {
      id
      conversationID
      Conversation {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        recentMessage {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        viewed
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
        following {
          nextToken
        }
        followers {
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
      message
      createdAt
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
      following {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          userID
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
          userInformationID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          conversationID
          userID
          message
          createdAt
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
      following {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          userID
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
          userInformationID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          conversationID
          userID
          message
          createdAt
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
      following {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          userID
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
          userInformationID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          conversationID
          userID
          message
          createdAt
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
        following {
          nextToken
        }
        followers {
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
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
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
        following {
          nextToken
        }
        followers {
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
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
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
        following {
          nextToken
        }
        followers {
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
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
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
        following {
          nextToken
        }
        followers {
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
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower {
    onCreateFollower {
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
        following {
          nextToken
        }
        followers {
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
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower {
    onUpdateFollower {
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
        following {
          nextToken
        }
        followers {
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
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower {
    onDeleteFollower {
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
        following {
          nextToken
        }
        followers {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
      id
      users {
        items {
          id
          userInformationID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        nextToken
      }
      recentMessage {
        id
        conversationID
        Conversation {
          id
          viewed
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
          createdAt
          updatedAt
        }
        message
        createdAt
        updatedAt
      }
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
      id
      users {
        items {
          id
          userInformationID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        nextToken
      }
      recentMessage {
        id
        conversationID
        Conversation {
          id
          viewed
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
          createdAt
          updatedAt
        }
        message
        createdAt
        updatedAt
      }
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
      id
      users {
        items {
          id
          userInformationID
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        nextToken
      }
      recentMessage {
        id
        conversationID
        Conversation {
          id
          viewed
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
          createdAt
          updatedAt
        }
        message
        createdAt
        updatedAt
      }
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      conversationID
      Conversation {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        recentMessage {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        viewed
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
        following {
          nextToken
        }
        followers {
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
      message
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      conversationID
      Conversation {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        recentMessage {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        viewed
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
        following {
          nextToken
        }
        followers {
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
      message
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      conversationID
      Conversation {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        recentMessage {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        viewed
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
        following {
          nextToken
        }
        followers {
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
      message
      createdAt
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
export const onCreateUserConversations = /* GraphQL */ `
  subscription OnCreateUserConversations {
    onCreateUserConversations {
      id
      userInformationID
      conversationID
      userInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        following {
          nextToken
        }
        followers {
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
      conversation {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        recentMessage {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        viewed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserConversations = /* GraphQL */ `
  subscription OnUpdateUserConversations {
    onUpdateUserConversations {
      id
      userInformationID
      conversationID
      userInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        following {
          nextToken
        }
        followers {
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
      conversation {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        recentMessage {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        viewed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserConversations = /* GraphQL */ `
  subscription OnDeleteUserConversations {
    onDeleteUserConversations {
      id
      userInformationID
      conversationID
      userInformation {
        usernameID
        firstName
        lastName
        email
        bday
        anon
        sex
        following {
          nextToken
        }
        followers {
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
      conversation {
        id
        users {
          nextToken
        }
        messages {
          nextToken
        }
        recentMessage {
          id
          conversationID
          userID
          message
          createdAt
          updatedAt
        }
        viewed
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
