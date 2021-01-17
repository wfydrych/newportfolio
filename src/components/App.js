import './App.sass'
import { BrowserRouter } from 'react-router-dom'
import Provider from './Provider'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Provider>
          <Header></Header>
          <Main></Main>
        </Provider>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}