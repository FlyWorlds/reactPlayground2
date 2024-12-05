import ReactPlayground from './ReactPlayground/index';
import { PlaygroundProvider } from './ReactPlayground/PlaygroundContext';
import './App.scss'
function App() {
  return (
    <div>
      <PlaygroundProvider>
        <ReactPlayground/>
      </PlaygroundProvider>
    </div>
  )
}

export default App

