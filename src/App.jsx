import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'
import imageMain from './assets/tent.jpg'
import image1 from './assets/lamp.jpg'
import image2 from './assets/eyes.jpg'
import image3 from './assets/grill.jpg'
import image4 from './assets/backpack.jpg'

function App() {

  return (
    <section className='app'>
      <Header title="Ao ar livre e piquenique" desc1="Descubra os melhores equipamentos para piqueniques e atividades ao ar livre!" desc2="Desde mantas e cestas estilosas até acessórios práticos, temos tudo o que você precisa para aproveitar a natureza com conforto e charme."/>
      <Product
       image={imageMain} 
       title="Tienda Campaña Rebrax: Liberdade e Conforto na Natureza" 
       desc1="A Tenda de Campanha Rebrax é o companheiro perfeito para aventureiros que buscam conforto e praticidade durante as suas explorações ao ar livre. Construída em poliéster 190T RPET, um material reciclado que demonstra compromisso com a sustentabilidade, esta tenda combina resistência com consciência ambiental."
       desc2="Com dimensões generosas de 150 cm x 150 cm x 110 cm e pesando apenas 1100 gramas, oferece um espaço confortável e fácil de transportar. A sua estrutura pop-up permite uma montagem instantânea, eliminando a complexidade tradicionalmente associada à instalação de tendas."
       link="https://generalcatalogue2025.eu/deliver2yougift/#page/513"/>
      <ProductsList 
        data={[
        {id:1, text:"Lámpara Demil", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/513", image:image1},
        {id:2, text:"Prismáticos Blidar", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/518", image:image2},
        {id:3, text:"Barbacoa Hermut", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/524", image:image3},
        {id:4, text:"Silla Nevera Sagan", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/526", image:image4},
        ]}
        title="Outros produtos desta categoria"/>
      <Catalogue text="Conheça os nossos outros produtos associados à ao ar livre e piquenique" link="https://generalcatalogue2025.eu/deliver2yougift/#page/511  "/>
      <Footer/>
    </section>
  )
}

export default App