# travelsi (react-redux exercise)

✈🏝 [travelsi LIVE](travelsi-demo.netlify.app)

I wanted to practice and cover quickly the basics of the Redux Toolkit with React. Therefore designing a new app and developing it (basically just the demo concept of the web app) within just a few hours was my other challenge.

There's nothing complex in this little tiny application - actually no features. At least for now. I may come back to this project later, as soon as find some time off.

The goals of this little project:

- understanding how the Redux works in general;
- understanding how to keep app-wide state maintainable and clean using `createSlice` (slicing states which are not directly related);
- `configureStore` and merge all possible reducers as one `reducer`;
- dispatching created actions with `useDispatch` hook;
- accessing state values in components with `useSelector` hook;

What I managed to accomplish, is:

- very simple state `true` or `false` for checking if a user `isAuthenticated`;
- If `isAuthenticated`, a user can access `Account` component and its children. For now, `isAuthenticated` means to submit any random values when Sign In.

## UI

<p align="center"><img src="/src/assets/img/travelsi-ui.png"></p>
