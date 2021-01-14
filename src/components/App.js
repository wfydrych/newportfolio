import './App.sass'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}