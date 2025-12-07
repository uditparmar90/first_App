import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { Counter } from './counter/counter';
import { PrSignals } from './pr-signals/pr-signals';
import { ToDo } from './to-do/to-do';
import { Err404 } from './err-404/err-404';

export const routes: Routes = [
    {path:'',component:ToDo},
    {path:'counter',component:Counter},
    {path:'pr-signals',component:PrSignals},
    {path:'about-us',component:AboutUs},
    // {path:'**',redirectTo:''},
    {path:'**',component:Err404}
];