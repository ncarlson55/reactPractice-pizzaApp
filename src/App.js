import Hero from './components/Hero'
import Products from './components/Products'
import Feature from './components/Feature'
import { BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import { productData } from './components/Products/data'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData}/>
      <Feature />
    </Router>
  );
}

export default App;
