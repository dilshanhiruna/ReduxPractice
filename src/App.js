import { Provider } from 'react-redux'
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Post />
        <PostForm />
      </div>
    </Provider>
  );
}


export default App;
