import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
// import { HomeComponent } from '../app/global-components/home/home.component';
// import { PageNotFoundComponent } from '../app/global-components/page-not-found/page-not-found.component';
// import { CustomPreloadingService } from './global_services/custom-preloading/custom-preloading.service';
// import { RouteResolverService } from './global_services/route-resolver/route-resolver.service';
// import { CanActivateGuardService } from './global_services/can-activate-guard/can-activate-guard.service';
// import { TestComponent } from './global_components/test/test.component';
// import { CanLoadGuardService } from './global_services/can-load-guard/can-load-guard.service';
// import { TestChildComponent } from './global_components/test-child/test-child.component';
// import { CanActivateChildGuardService } from './global_services/can-activate-child-guard/can-activate-child-guard.service';
// import { CanDeactivateGuardService } from './global_services/can-deactivate-guard/can-deactivate-guard.service';
// import { ParametersComponent } from './global_components/parameters/parameters.component';
// import { HeirComponent } from './global_components/heir/heir.component';

const routes: Routes = [
  { path: '', component: SignUpComponent }, 
  // { path: 'sign-up', component: SignUpComponent }, 
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class SignUpRoutingModule { }

export const signUpRoutingComponents = [
  SignUpComponent
//   HomeComponent,
  // PageNotFoundComponent,
//   TestComponent,
//   TestChildComponent,
//   ParametersComponent,
//   HeirComponent
];

export const customRootRoutingServices = [
//   RouteResolverService,
//   CanActivateChildGuardService,
//   CanLoadGuardService,
//   CanActivateGuardService,
//   CanDeactivateGuardService
] // This does not need to be registered into the providers array of the app.module.ts as the object { providedIn: 'root' } is passed into the @Injectable decorator of each of the services.