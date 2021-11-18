import express, { Application } from 'express';

export default class Merlin {
  private app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  run() {
    this.app.listen(3000);
  }
}
