import { createRoot } from "react-dom/client";
import Game from "./Game";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<Game />);
});
