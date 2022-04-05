/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserInformation = /* GraphQL */ `
  query GetUserInformation($id: ID!) {
    getUserInformation(id: $id) {
      id
      username
      firstName
      lastName
      email
      bday
      anon
      sex
      polls {
        items {
          id
          title
          publicity
          disclaimer
          description
          answerChoices
          categories
          tags
          likes
          views
          timeStart
          timeEnd
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInformationPollsId
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInformationCommentsId
          pollCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserInformations = /* GraphQL */ `
  query ListUserInformations(
    $filter: ModelUserInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        firstName
        lastName
        email
        bday
        anon
        sex
        polls {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserInformations = /* GraphQL */ `
  query SyncUserInformations(
    $filter: ModelUserInformationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        firstName
        lastName
        email
        bday
        anon
        sex
        polls {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
      id
      title
      UserInformation {
        id
        username
        firstName
        lastName
        email
        bday
        anon
        sex
        polls {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      publicity
      disclaimer
      description
      answerChoices
      categories
      tags
      likes
      views
      timeStart
      timeEnd
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInformationCommentsId
          pollCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInformationPollsId
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
        title
        UserInformation {
          id
          username
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        likes
        views
        timeStart
        timeEnd
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInformationPollsId
      }
      nextToken
      startedAt
    }
  }
`;

export const getUserPolls = /* GraphQL */ `
  query getPollsByUser {
    listPolls(
      filter: {
        userInformationID: { eq: "8a088564-57e3-4e4f-a271-a876e69dac4d" }
      }
    ) {
      items {
        title
        likes
        createdAt
        views
        id
      }
    }
  }
`;

export const syncPolls = /* GraphQL */ `
  query SyncPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPolls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        UserInformation {
          id
          username
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        likes
        views
        timeStart
        timeEnd
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInformationPollsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      UserInformation {
        id
        username
        firstName
        lastName
        email
        bday
        anon
        sex
        polls {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Poll {
        id
        title
        UserInformation {
          id
          username
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        publicity
        disclaimer
        description
        answerChoices
        categories
        tags
        likes
        views
        timeStart
        timeEnd
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInformationPollsId
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInformationCommentsId
      pollCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserInformation {
          id
          username
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Poll {
          id
          title
          publicity
          disclaimer
          description
          answerChoices
          categories
          tags
          likes
          views
          timeStart
          timeEnd
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInformationPollsId
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInformationCommentsId
        pollCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        UserInformation {
          id
          username
          firstName
          lastName
          email
          bday
          anon
          sex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Poll {
          id
          title
          publicity
          disclaimer
          description
          answerChoices
          categories
          tags
          likes
          views
          timeStart
          timeEnd
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInformationPollsId
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInformationCommentsId
        pollCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
