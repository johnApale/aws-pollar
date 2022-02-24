/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserInformation = /* GraphQL */ `
  subscription OnCreateUserInformation {
    onCreateUserInformation {
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
export const onUpdateUserInformation = /* GraphQL */ `
  subscription OnUpdateUserInformation {
    onUpdateUserInformation {
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
export const onDeleteUserInformation = /* GraphQL */ `
  subscription OnDeleteUserInformation {
    onDeleteUserInformation {
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
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
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
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
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
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
