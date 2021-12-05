import express, { Application } from 'express';
import 'reflect-metadata';

export default class Merlin {
  private app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  run(): void {
    console.log(Reflect.getMetadata('path', this.app));
    this.app.listen(3000);
  }
}
