import 'reflect-metadata';
import { Container } from 'inversify';
import { appModule } from '../app';
import { controllerModule } from '../controllers';
import { middlewareModule } from '../middlewares';
import { repositoryModule } from '../repository';
import { serviceModule } from '../services';
import { utilityModule } from '../utils';

const container = new Container();

container.load(controllerModule, serviceModule, repositoryModule, middlewareModule, utilityModule, appModule);

export default container;
