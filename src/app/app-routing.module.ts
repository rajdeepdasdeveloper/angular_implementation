import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { PageNotFoundComponent } from '../app/global-components/page-not-found/page-not-found.component';
import { TermsPolicyComponent } from './global-components/terms-policy/terms-policy.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { ClientGuardService } from './services/client-guard/client-guardu.service';

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
    loadChildren: () => import('./modules/home/home.module').then(mod=>mod.HomeModule),
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