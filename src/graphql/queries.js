/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchUserInformations = /* GraphQL */ `
  query SearchUserInformations(
    $filter: SearchableUserInformationFilterInput
    $sort: [SearchableUserInformationSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserInformationAggregationInput]
  ) {
    searchUserInformations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
          nextToken
        }
        pollAnswers {
          nextToken
        }
        comments {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPolls = /* GraphQL */ `
  query SearchPolls(
    $filter: SearchablePollFilterInput
    $sort: [SearchablePollSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePollAggregationInput]
  ) {
    searchPolls(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getUserInformation = /* GraphQL */ `
  query GetUserInformation($usernameID: String!) {
    getUserInformation(usernameID: $usernameID) {
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
          convoLinkUserID
          convoLinkConversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          author
          content
          messageConversationID
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
export const listUserInformations = /* GraphQL */ `
  query ListUserInformations(
    $usernameID: String
    $filter: ModelUserInformationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserInformations(
      usernameID: $usernameID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
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

export const trendingPolls = /* GraphQL */ `
  query TrendingPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        id
        createdAt
        userID
        categories
        like {
          items {
            id
          }
        }
        views
        userAnswers {
          items {
            id
          }
        }
      }
      nextToken
    }
  }
`;

export const listPolls = /* GraphQL */ `
  query ListPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!, $userID: String!, $pollID: ID!) {
    getComment(id: $id, userID: $userID, pollID: $pollID) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $userIDPollID: ModelCommentPrimaryCompositeKeyConditionInput
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      userIDPollID: $userIDPollID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        content
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserAnswer = /* GraphQL */ `
  query GetUserAnswer($pollID: ID!, $userID: String!) {
    getUserAnswer(pollID: $pollID, userID: $userID) {
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
export const listUserAnswers = /* GraphQL */ `
  query ListUserAnswers(
    $pollID: ID
    $userID: ModelStringKeyConditionInput
    $filter: ModelUserAnswerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserAnswers(
      pollID: $pollID
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        pollID
        Poll {
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
        answer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($pollID: ID!, $userID: String!) {
    getLike(pollID: $pollID, userID: $userID) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $pollID: ID
    $userID: ModelStringKeyConditionInput
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLikes(
      pollID: $pollID
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($followerID: String!, $followingID: String!) {
    getFollow(followerID: $followerID, followingID: $followingID) {
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
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $followerID: String
    $followingID: ModelStringKeyConditionInput
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFollows(
      followerID: $followerID
      followingID: $followingID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!, $createdAt: String!) {
    getConversation(id: $id, createdAt: $createdAt) {
      id
      messages {
        items {
          id
          author
          content
          messageConversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      associated {
        items {
          id
          convoLinkUserID
          convoLinkConversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      members
      createdAt
      updatedAt
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConversations(
      id: $id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      author
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
      content
      messageConversationID
      Conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
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
        content
        messageConversationID
        Conversation {
          id
          name
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversationLink = /* GraphQL */ `
  query GetConversationLink($id: ID!) {
    getConversationLink(id: $id) {
      id
      convoLinkUserID
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
      convoLinkConversationID
      Conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listConversationLinks = /* GraphQL */ `
  query ListConversationLinks(
    $filter: ModelConversationLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        convoLinkUserID
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
        convoLinkConversationID
        Conversation {
          id
          name
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        toUser
        fromUser
        notificationType
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const pollByUser = /* GraphQL */ `
  query PollByUser(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pollByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const commentsByPoll = /* GraphQL */ `
  query CommentsByPoll(
    $pollID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPoll(
      pollID: $pollID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByUser = /* GraphQL */ `
  query CommentsByUser(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const answerByPoll = /* GraphQL */ `
  query AnswerByPoll(
    $pollID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    answerByPoll(
      pollID: $pollID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pollID
        Poll {
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
        answer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const answersByUser = /* GraphQL */ `
  query AnswersByUser(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    answersByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pollID
        Poll {
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
        answer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likeByPoll = /* GraphQL */ `
  query LikeByPoll(
    $pollID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeByPoll(
      pollID: $pollID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likeByUser = /* GraphQL */ `
  query LikeByUser(
    $userID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likeByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userFollowers = /* GraphQL */ `
  query UserFollowers(
    $followingID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowers(
      followingID: $followingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followersByUser = /* GraphQL */ `
  query FollowersByUser(
    $followerID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followersByUser(
      followerID: $followerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByUser = /* GraphQL */ `
  query MessagesByUser(
    $author: String!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUser(
      author: $author
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
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
        content
        messageConversationID
        Conversation {
          id
          name
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const conversationsByDate = /* GraphQL */ `
  query ConversationsByDate(
    $messageConversationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByDate(
      messageConversationID: $messageConversationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        author
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
        content
        messageConversationID
        Conversation {
          id
          name
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const conversationsByUser = /* GraphQL */ `
  query ConversationsByUser(
    $convoLinkUserID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelConversationLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    conversationsByUser(
      convoLinkUserID: $convoLinkUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        convoLinkUserID
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
        convoLinkConversationID
        Conversation {
          id
          name
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const associatedLinks = /* GraphQL */ `
  query AssociatedLinks(
    $convoLinkConversationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConversationLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    associatedLinks(
      convoLinkConversationID: $convoLinkConversationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        convoLinkUserID
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
        convoLinkConversationID
        Conversation {
          id
          name
          members
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const notificationsByUser = /* GraphQL */ `
  query NotificationsByUser(
    $toUser: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUser(
      toUser: $toUser
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        toUser
        fromUser
        notificationType
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const activityByUser = /* GraphQL */ `
  query ActivityByUser(
    $fromUser: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityByUser(
      fromUser: $fromUser
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        toUser
        fromUser
        notificationType
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const activityByPoll = /* GraphQL */ `
  query ActivityByPoll(
    $pollID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    activityByPoll(
      pollID: $pollID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        toUser
        fromUser
        notificationType
        pollID
        Poll {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
