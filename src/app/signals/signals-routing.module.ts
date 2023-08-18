import { PropertiesComponent } from './pages/properties/properties.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',component:SignalLayoutComponent,
  children:[
    {path:'counter',component:CounterPageComponent},
    {path:'user',component:UserInfoComponent},
    {path:'properties',component:PropertiesComponent},
    {path:'**',redirectTo:'counter'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
