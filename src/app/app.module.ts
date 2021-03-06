import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PartenairesAcceuilComponent } from './partenaires-acceuil/partenaires-acceuil.component';
import { ModifierPartenairesComponent } from './modifier-partenaires/modifier-partenaires.component';
import { RouterModule,Routes} from '@angular/router';
import { PartenairesSupprimerComponent } from './partenaires-supprimer/partenaires-supprimer.component';
import { HeaderComponent } from './header/header.component';
import { AjouterPartenairesComponent } from './ajouter-partenaires/ajouter-partenaires.component';

const appRoutes : Routes =[

  { path : 'modifier', component : ModifierPartenairesComponent},
  {path :"acceuil",component:PartenairesAcceuilComponent},
  {path:"supprimer",component:PartenairesSupprimerComponent},
  {path:'ajouter',component:AjouterPartenairesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PartenairesAcceuilComponent,
    ModifierPartenairesComponent,
    PartenairesSupprimerComponent,
    HeaderComponent,
    AjouterPartenairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
