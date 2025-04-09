import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import ProductsList from './components/ProductsList'
import Catalogue from './components/Catalogue'
import Footer from './components/Footer'
import imageMain from './assets/lamp.jpg'
import image1 from './assets/zen.jpg'
import image2 from './assets/difusor.jpg'
import image3 from './assets/photo.jpg'
import image4 from './assets/clock.jpg'

function App() {

  return (
    <section className='app'>
      <Header
       title="Decoração e Estilo" 
       desc1="Descubra a magia de criar ambientes únicos e acolhedores com a nossa coleção de produtos de decoração e estilo." 
       desc2="Desde peças sofisticadas até elementos modernos e vibrantes, oferecemos tudo o que você precisa para dar vida aos seus espaços."/>
      <Product
       image={imageMain} 
       title="Lampada Madison: Ilumine o seu espaço com estilo " 
       desc1="A Lâmpada Madison é um exemplo eloquente do design contemporâneo. Com o seu perfil elegante em preto ou branco e base sólida, representa muito mais do que uma simples fonte de iluminação - é um verdadeiro elemento de decoração que transforma ambientes."
       desc2="Compacta e versátil, com apenas 26 cm de altura, este candeeiro combina funcionalidade e estética de forma magistral. O seu design minimalista adapta-se harmoniosamente a diversos espaços, desde uma mesa de cabeceira moderna até um escritório contemporâneo ou um ambiente de estar sofisticado."
       link="https://generalcatalogue2025.eu/deliver2yougift/#page/550"/>
      <ProductsList 
        data={[
        {id:1, text:"Mini Jardim Zen Azumy", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/554", image:image1},
        {id:2, text:"Difusor Aromático Kenet", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/557", image:image2},
        {id:3, text:"Moldura Fotos Digital Picty", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/561", image:image3},
        {id:4, text:"Relogio Graox", link:"https://generalcatalogue2025.eu/deliver2yougift/#page/563", image:image4},
        ]}
        title="Outros produtos desta categoria"/>
      <Catalogue
       text="Conheça os nossos outros produtos associados os decoração e estilo" link="https://generalcatalogue2025.eu/deliver2yougift/#page/550"/>
      <Footer/>
    </section>
  )
}

export default App
