import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import APIs from "./components/APIs";
import Docs from "./components/Docs";
import LearningPaths from "./components/LearningPaths";
import Clusters from "./components/Clusters";
import TechRadar from "./components/TechRadar";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "catalog", Component: Catalog },
      { path: "apis", Component: APIs },
      { path: "docs", Component: Docs },
      { path: "learning-paths", Component: LearningPaths },
      { path: "clusters", Component: Clusters },
      { path: "tech-radar", Component: TechRadar },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
