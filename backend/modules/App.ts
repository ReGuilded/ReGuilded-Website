import express from "express";

class App {
  private app = express();

  constructor(private port: number) {}

  addControllers(controllers: Array<{ path: string; router: express.Router }>) {
    this.app.use(express.json());
    controllers.forEach(({ path, router }) => {
      this.app.use(path, router);
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

export default App;
