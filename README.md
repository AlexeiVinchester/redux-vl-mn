1. We want to add some features on our page

    - form for ability to add some post
    - component for rendering sync posts
    - component for rendering async posts

2. At first we add some redux features:

    - our store will consist of two fields:
        - posts: array of sync posts
        - fetchedPosts: array of async posts
        - each post will be an object with two fields: 
            - title
            - id
    - created type for action with sync posts: CREATE_POST with prefics POST/       CREATE_POST
    - generator of action for sync posts - CREATE_POST
    - we add reducer: 
        - postsReducer - will return array of posts
    - create root reducer with the help if combineReducers({}), we give him
      an object which will have ышьзду reducers as it's fields

3. Now we will add components of view:

    - We should render two arrays of posts. As we know, components of view don't have ability to work with redux store. That's why we will make them as components of view, they will get this arrays as props. Then we will wrap this component and with the help of connect() API we will give them there props.
    At first we will make it for <Posts >

4. In our <PostForm > we will use class Component

    - This component will save it's state as object {title}    
    - We will add handler method for changing of input value and will save this value to state with the help of this.setState(), where we can send func (prev) => ... , because we want to work with previous values of state.
    - Also add submit handler, where we will create new post and with the help of dispatch(createPost(newPost)) we will change our store. 
    - we can provide dispatch method to this form with the help of connect, 

5. Now we should work with async posts

    - Now we will add new types for work with async posts with prefics APP/
    - Also for this fetched posts we will create new reducer, which will return array of async fetched posts, and then with combineReducer we will add this fetchedReducer to root reducer
    - we can notice that reducer will be pure function, because it works only with it's params, works without any side effects. All effects we will code in generator of action. In this case it will return function instead of object. This function will get dispatch as it's param. Inside this returned function we can make some requests to server (placeholder in our case) and call dispatch with correct action
    - Then we can connect our component for fetched posts with our store. We should make new mapStateToProps, then call connect API with this mapStateToProps. 
    - Also we want to show async posts after clicking on the button load. That's why we should create onClickHandler and inside it we should call dispatch(), and as argument to dispatch we should give action fetchPost(). - This is how work applyMidlware and thunk in redux - we create new generator of action, which will return function instead of object, and then somewhere in our component we will call dispatch(), and as an argument we should give him this generator and call him inside of dispatch, for example dispatch(fetchPosts()). - It is a simple work with one action of loading without spinners, while data will be loading. 

6. Now we will make the same logic but with the help of hooks.

    - We create new component of view for fetched posts with hooks
    - use indide useDispatch to get dispatch method
    - use useSelector to get posts from store
    - added onClickHandler, where also call dispatch(), and as a argument we give him generator of action, which return async function, where we make all fetching of data from server

7. Now we should add loading spinner for waiting of data

    - To realise this idea we need to add new field in our store: loading. It will be an object with field loading with bool type of value
    - Thats why we create new reducer, that will return an object with correct value of loading depending on action type
    - then we should create actions for each step: for show loader and for hide loader
    - And now we should dispatch this actions inside action of tetching data
    - And now in component of fetched posts with hooks we shoul get value loadding from store and check it: if it's true, we will return spinner, if it's false, we return loaded data