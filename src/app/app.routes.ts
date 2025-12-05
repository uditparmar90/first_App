import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { Counter } from './counter/counter';
import { PrSignals } from './pr-signals/pr-signals';
import { ToDo } from './to-do/to-do';

export const routes: Routes = [
    {path:'',component:AboutUs},
    {path:'counter',component:Counter},
    {path:'pr-signals',component:PrSignals},
    {path:'to-do',component:ToDo}
];
