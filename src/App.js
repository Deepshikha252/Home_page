
import './App.css';
import ReactDOM from "react-dom";
// import Grid from '@mui/material/Grid';
import Header from './Components/Header';
import  BigHeading from './Components/BigHeading';
import ZoomCard from './Components/ZoomCard';
import SecondlastCard from './Components/SecondlastCard';
import LastCard from './Components/LastCard';
// import ZoomCard from './Components/ZoomCard'
// import Soafa from "./assets/Soafa.png";
import Zooms1 from './Components/Zooms1'
import ImageGallery from './Components/ImageGallery';
function App() {
  
  return (
    <div className="App">
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Header />
   <BigHeading/>
 
    {/* <Grid container spacing={3}   >
  <Grid item xs={12} sm={3}   >
          <ZoomCard
            image={Soafa}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ZoomCard
            image={Soafa}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ZoomCard
            image={Soafa}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <ZoomCard
            image={Soafa}
          />
        </Grid>
        </Grid>  */}
      <ZoomCard />
        {/* <ZoomCardContainer /> */}
        <Zooms1 />
        <ImageGallery />
   <SecondlastCard />
   <LastCard />
    </div>
  );
}

export default App;
