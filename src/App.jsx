 import './components/css/card.css'
 import CardGenerator from './components/CardGenerator'
 import Footer from './components/footer'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function App() {
   

  return (
    <div>
      <ToastContainer position='top-right'/>
      <CardGenerator/>

      <Footer/>
    </div>
  )
}

export default App
