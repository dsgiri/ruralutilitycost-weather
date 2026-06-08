/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Forecast } from "./pages/Forecast";
import { Spray } from "./pages/Spray";
import { Planting } from "./pages/Planting";
import { Frost } from "./pages/Frost";
import { Heat } from "./pages/Heat";
import { GDD } from "./pages/GDD";
import { Alerts } from "./pages/Alerts";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import { Legal } from "./pages/Legal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forecast" element={<Forecast />} />
          <Route path="spray" element={<Spray />} />
          <Route path="planting" element={<Planting />} />
          <Route path="frost" element={<Frost />} />
          <Route path="heat" element={<Heat />} />
          <Route path="gdd" element={<GDD />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<About />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
