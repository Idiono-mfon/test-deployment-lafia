import { Container } from 'inversify';
import { controllerModule } from '../controllers';
import { middlewareModule } from '../middlewares';
import { repositoryModule } from '../repository';
import { serviceModule } from '../services';
import { utilityModule } from '../utils';

const container = new Container();

container.load(controllerModule, serviceModule, repositoryModule, middlewareModule, utilityModule);

export default container;
