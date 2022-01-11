import './App.css'

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div >
        <div className={'wrap'}>
            <Users/>
            <Posts/>
            <Comments/>
        </div>

    </div>
  );
}

export default App;
