# travelsi app

✈🏝 [travelsi LIVE APP](https://travelsi-demo.netlify.app/)

This project was about practising the Redux library, and being more precise `react-redux` & `@reduxjs/toolkit`. I have practiced most of the react concepts I have learned so far.

In addition, working with Firebase and the real-time data was a great experience.

## What is travelsi ?

Travelsi is an app for sharing travel experiences. In order to join the community and be able to share the posts, you need to sign up first.

## Functionalities

- Sign up/Sign in/Sign out
- Reset password
- Add new post
- Filter posts by tag & country
- Add feelings (like/dislike post)

## UI

- light, modern, responsive

<p align="center"><img src="/src/assets/img/travelsi-ui.png"></p>

## What I have achieved in this project so far 🎯

#### Connecting project to Firebase

This project required a backend so I connected it to the Firebase where I used the Realtime Database and Authentication features. Although my experience with Firebase is little so far, I think it is a powerful tool. Being only a frontend developer, with the help of documentation you can quickly create a basic backend for your application.

- I use Firebase Authentication (basic email & password) to sign up/sign in/sign out users and reset account passwords when requested.
- I use Realtime Database to store all users' posts.

* Only authenticated users can read and write data to a certain path.

#### Redux Toolkit

- Understanding how to keep app-wide state maintainable and clean using `createSlice` (slicing states which are not directly related eg. `auth-slice`, `posts-slice`, `ui-slice`).
- `configureStore` and merge all reducers as one `reducer`.
- Dispatching created actions with `useDispatch` hook.
- Accessing state values in components with `useSelector` hook.

#### Building custom hooks

I tried to make my custom hooks as generic as it's possible so I could flexibly reuse them. For example:

- `useInput` hook checks if input `isTouched`, gets the input `value` or checks if `inputIsValid` based on `validationFunction`.

#### Feedback/handling states - (input/form validity, loading, success/error for async tasks)

Handling states and returning a user proper notifications was one of the key aspects of this project.

- Complex input & form validation and returning notification if something `isNotValid` in a user-friendly way.
- Handling notification states for async `fetch` requests (loading, success, error) & rendering in UI conditionally.
