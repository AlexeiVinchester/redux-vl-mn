import FetchedPosts from "./components/FetchedPosts";
import HookFetchedPosts from "./components/HooksFetchedPosts";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Posts />
        </div>
      </div>
      <div className="row">
          <p>Async posts</p>
          <FetchedPosts />
      </div>
      <div className="row">
        <p>Async posts with hooks</p>
        <HookFetchedPosts />
      </div>
    </div>
  );
}

export default App;
