// import './App.css'
import Routes from 'Routes'

import 'App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './context/reactQuery'
import { MyContextProvider } from './context/useContext'

const App = () => {

  return (
    <MyContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </MyContextProvider>
  )
}

export default App
