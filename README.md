## MVPS

  - upload/view photos (videos?)
  - authentication
  - user profiles
  - follow users

## Tech (MERVN)

  - MongoDB
  - Express
  - ReactVR
  - Node

## API

GET `/posts` <-- index of recent posts

POST `/posts`

DELETE `/posts/:id`

GET `/feed` <-- returns recent posts from leaders of current user

GET `/users/:id` <-- user show page with posts

POST `/user`

POST `/follows`

DELETE `/follows/:id`

## Sample state

```js
State {
  Session: { ? }
  currentUser: {
    name: "sam",
    id: 24,
    leaders: {
      {
        name: "steve",
        id: 4
      },
      {
        name: "joe",
        id: 12
      },
      {
        name: "marceline",
        id: 9
      },
    }
  },
  explorePosts: {

  },
  homePosts: {

  },
  userPosts: {

  }
}
```
