import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Errorpage from "../pages/Errorpage";
import Glosario from "../pages/Glosario";
import Glosariomobil from "../pages/Glosariomobil";
import Fullnavbar from "../components/Fullnavbar";
import Gridbuttons from "../pages/Gridbuttons";
import Glosariocarpet from "../components/Glosariocarpet";
import Glosariocarpetamobil from "../components/Glosariocarpetamobil";
import Choose from "../components/Choose";
import {objectdatagrids} from '../data/Datagrids'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainpage />} errorElement={<Errorpage />}>
      <Route
        path="/"
        element={
          <>
            <Choose />
            <Glosario />
            <Glosariomobil />
            <Fullnavbar />
          </>
        }
      />
      {objectdatagrids.map((data) => {
        return (
          <Route
          key={data.id}
          path={data.url}
          element={
            <>
              <Glosario />
              <Gridbuttons objectcssgrid={data.objectcssgrid} />
              <Glosariomobil />
              <Fullnavbar />
            </>
          }
        />            
        )
      })}
      <Route path="/glosario" element={<Glosario />}>
        <Route path="/glosario/carpet" element={<Glosariocarpet />} />
      </Route>
      <Route path="/glosariomobil" element={<Glosariomobil />}>
        <Route
          path="/glosariomobil/carpet"
          element={<Glosariocarpetamobil />}
        />
      </Route>
    </Route>
  )
);
