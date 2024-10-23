import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import App from './App'
import './styles/app.scss'
import store from './store'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
          </BrowserRouter>
      </Provider>
  </StrictMode>
)
