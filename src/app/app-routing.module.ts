import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { PageNotFoundComponent } from '../app/global-components/page-not-found/page-not-found.component';
import { TermsPolicyComponent } from './global-components/terms-policy/terms-policy.component';
import { CanActivateGuardService } from './services/can-activate-guard/can-activate-guard.service';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { ClientGuardService } from './services/client-guard/client-guardu.service';
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
//   { path: 'home', component: HomeComponent,
//     canDeactivate: []
//   },
//   { path: 'test', 
//     component: TestComponent, 
//     canActivate: [CanActivateGuardService], 
//     canActivateChild: [CanActivateChildGuardService],
//     children: [
//       { path: 'test-child', component: TestChildComponent },
//     ]
//   },
//   { path: 'parameters/:id', component: ParametersComponent },
//   { path: 'parameters/:id/:name', component: ParametersComponent,  
//     children: [
//       { path: 'parameters2/:id/:name', component: ParametersComponent, 
//         children: [
//           { path: 'parameters3/:id/:name', component: ParametersComponent,
//             children: [
//               { path: 'heir/:id/:name', component: HeirComponent,
                
//               },
//             ] 
//           },
//         ] 
//       },
//     ] 
//   },
//   { path: 'features', 
//     loadChildren: '../app/modules/angular-features-demo/angular-features-demo.module#AngularFeaturesDemoModule', 
//     data: { customPreload : true }, // customPreload : true = Enabled Preloading strategy & customPreload : false = Disable Preloading strategy
//     resolve: { httpResponseResolver: RouteResolverService },
//     canLoad: [CanLoadGuardService]
//   }, 
  { path: 'signup', 
    loadChildren: () => import('./authentication/sign-up/sign-up.module').then(mod=>mod.SignUpModule),
    canLoad: [ClientGuardService] 
  }, 
  { path: 'signin', 
    loadChildren: () => import('./authentication/sign-in/sign-in.module').then(mod=>mod.SignInModule), 
    canLoad: [ClientGuardService] 
  }, 
  { path: 'terms-policy', component: TermsPolicyComponent },
  { path: '', 
    loadChildren: () => import('./pages/pages.module').then(mod=>mod.PagesModule),
    canLoad: [AuthGuard] 
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading} /*, { preloadingStrategy: CustomPreloadingService } */)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rootRoutingComponents = [
//   HomeComponent,
  PageNotFoundComponent,
  TermsPolicyComponent
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