import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterationComponent } from './modules/registeration/registeration.component';
import { OrderComponent } from './modules/order/order.component';

const routes: Routes = [
    {
        path: '',
        component: OrderComponent
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'registeration',
        loadChildren: () => import('./modules/registeration/registeration.module').then(m => m.RegisterationModule)
    }
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'registeration',
    //     component: RegisterationComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
