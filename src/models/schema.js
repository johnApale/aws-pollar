export const schema = {
    "models": {
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "password": {
                    "name": "password",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "bday": {
                    "name": "bday",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "anon": {
                    "name": "anon",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "accountCreated": {
                    "name": "accountCreated",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": {
                        "enum": "Sex"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "Poll": {
            "name": "Poll",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "creator": {
                    "name": "creator",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "publicity": {
                    "name": "publicity",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "disclaimer": {
                    "name": "disclaimer",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "answerChoices": {
                    "name": "answerChoices",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "likes": {
                    "name": "likes",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "views": {
                    "name": "views",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "timeStart": {
                    "name": "timeStart",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "timeEnd": {
                    "name": "timeEnd",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Polls",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "userReply": {
            "name": "userReply",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "pollID": {
                    "name": "pollID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "userReplies",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "Sex": {
            "name": "Sex",
            "values": [
                "MALE",
                "FEMALE",
                "OTHER"
            ]
        }
    },
    "nonModels": {},
    "version": "62d9b45f90283d77118f3dea7dc7a003"
};