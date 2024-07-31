import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { TaskComponent } from './app/components/task/task.component';

// const bootstrap = () => bootstrapApplication(TaskComponent, config);
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
