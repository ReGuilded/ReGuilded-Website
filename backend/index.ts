import App from "./modules/App";
import getAllRouter from "./controllers/team/getAll";

const app = new App(3001);

app.addControllers([{ path: "/team/getAll", router: getAllRouter }]);

app.start();
