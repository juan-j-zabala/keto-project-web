import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Errorpage from "../pages/Errorpage";
import Glosario from "../pages/Glosario";
import Fullnavbar from "../components/Fullnavbar";
import Gridbuttons from "../pages/Gridbuttons";
import Glosariocarpet from "../components/Glosariocarpet";
import Glosariocarpetamobil from "../components/Glosariocarpetamobil";
import Choose from "../components/Choose";
import { objectdatagrids } from "../data/Datagrids";
import { objectcarpet } from "../data/Datacarpet";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainpage />} errorElement={<Errorpage />}>
      <Route
        path="/"
        element={
          <>
            <Choose />
            <Glosario />
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
                <Fullnavbar />
              </>
            }
          />
        );
      })}
      <Route path="/glosario" element={<Glosario />}>
        {objectcarpet.map((data) => {
          return (
            <Route
              key={data.id}
              path={data.data.url}
              element={<><Glosariocarpet data={data.data} /><Glosariocarpetamobil data={data.data} /></>}
            />
          );
        })}
      </Route>
    </Route>
  )
);
