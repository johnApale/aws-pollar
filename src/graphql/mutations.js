/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInformation = /* GraphQL */ `
  mutation CreateUserInformation(
    $input: CreateUserInformationInput!
    $condition: ModelUserInformationConditionInput
  ) {
    createUserInformation(input: $input, condition: $condition) {
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
export const updateUserInformation = /* GraphQL */ `
  mutation UpdateUserInformation(
    $input: UpdateUserInformationInput!
    $condition: ModelUserInformationConditionInput
  ) {
    updateUserInformation(input: $input, condition: $condition) {
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
export const deleteUserInformation = /* GraphQL */ `
  mutation DeleteUserInformation(
    $input: DeleteUserInformationInput!
    $condition: ModelUserInformationConditionInput
  ) {
    deleteUserInformation(input: $input, condition: $condition) {
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
export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
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
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $input: UpdatePollInput!
    $condition: ModelPollConditionInput
  ) {
    updatePoll(input: $input, condition: $condition) {
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
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $input: DeletePollInput!
    $condition: ModelPollConditionInput
  ) {
    deletePoll(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
