import './App.css'

import { usePostTitlesQuery } from './app.generated'

function App() {
  const { data, loading } = usePostTitlesQuery();

  return (!loading && data?.posts) ? (
    <div className="App">
      <div>
        <h1>{data?.posts[0]?.title ?? 'test'}</h1>
      </div>
    </div>
  ) : <div>loading</div>
}

export default App
