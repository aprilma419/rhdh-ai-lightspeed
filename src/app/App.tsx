import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import FeedbackWidget from "./components/FeedbackWidget";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      <FeedbackWidget />
    </>
  );
}