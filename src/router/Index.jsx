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
      <Route
        path="/tema"
        element={
          <>
            <Glosario />
            <Gridbuttons />
            <Glosariomobil />
            <Fullnavbar />
          </>
        }
      />
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
