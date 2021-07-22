
import './style.css';
import fotoTwo from './myimages/fotoTwo.jpg'


function App() {
  return (
    <div className="div-pos">
       <div className="div-second-pos" style={{border:"solid 1px black", maxWidth:"100vw"}}>
            <h1 className="title red mt-5 ">Houssemeddine SALEM</h1>
            <br />
            <img className='mb-5 shadow-lg p-3 mb-5 bg-body rounded' src="/fotoOne.jpg" alt="" width="320"/>
            <br />
            <img className='mb-5 shadow-lg p-3 mb-5 bg-body rounded' src={fotoTwo} alt="" width="320"/> 
       </div> 
            <iframe className="video-container mt-5" width="100%" height="220" src="https://www.youtube.com/embed/3zt_AelvldM?start=4"/>        
    </div>
  );
}

export default App;
