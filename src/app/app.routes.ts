import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { Counter } from './counter/counter';
import { PrSignals } from './pr-signals/pr-signals';
import { ToDo } from './to-do/to-do';
import { Err404 } from './err-404/err-404';
import { ReactiveForm } from './reactive-form/reactive-form';

export const routes: Routes = [
    {path:'',component:ToDo},
    {path:'counter/:start',component:Counter},
    {path:'pr-signals',component:PrSignals},
    {path:'about-us',component:AboutUs},
    {path:'reactive-form',component:ReactiveForm},
    {path:'**',component:Err404}
];