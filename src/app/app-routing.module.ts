import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component} from '../app/page1/page1.component';
import { NewdemoComponent} from '../app/newdemo/newdemo.component';
import { Page2Component} from '../app/page2/page2.component';
import { AproposComponent} from '../app/apropos/apropos.component';
import { HomeComponent} from '../app/home/home.component';
import { ConfortComponent} from '../app/confort/confort.component';
import { SiegeComponent} from '../app/siege/siege.component';
import { PerformanceComponent } from '../app/performance/performance.component';
import { HabileteComponent} from '../app/habilete/habilete.component';
import { SecuriteComponent} from '../app/securite/securite.component';
import { AideaustationComponent} from '../app/aideaustation/aideaustation.component';
import { AdialaconduiteComponent} from '../app/adialaconduite/adialaconduite.component';
import { DesignexterieurComponent} from '../app/designexterieur/designexterieur.component';
import { EcologieComponent} from '../app/ecologie/ecologie.component';
import { TransmissionComponent} from '../app/transmission/transmission.component';
import { EnergieComponent} from '../app/energie/energie.component';
import { Page3Component} from '../app/page3/page3.component';
import {CategorieComponent} from '../app/categorie/categorie.component';

///information routing
import { SecuriteinfoComponent } from '../app/securiteinfo/securiteinfo.component';
import { CategoriedevehiculeComponent } from '../app/categoriedevehicule/categoriedevehicule.component';
import { AsiaaustationinfoComponent } from '../app/asiaaustationinfo/asiaaustationinfo.component';
import { EnergieinfoComponent  } from '../app/energieinfo/energieinfo.component';
import { EcologieinfoComponent } from '../app/ecologieinfo/ecologieinfo.component';
const routes: Routes = [

  {path:'',component:HomeComponent},
  {path: 'Page1', component:Page1Component},
  {path: 'demo', component:NewdemoComponent},
  {path: 'Page2',component:Page2Component},
  {path: 'Page3',component:Page3Component},
  // {path: 'moncompte',component:Page2Component},
  {path: 'Apropos',component:AproposComponent},
  // {path: 'maselectionEtSerives',component:Page2Component},
  //  {path: 'home',component:HomeComponent},
  // {path: 'seconnecter1',component:Page5Component},
  // {path: 'seconnecter',component:Page6Component},
  // {path: 'mandatderecherche',component:Page7Component},
  {path: 'Securite',component:SecuriteComponent},
  {path: 'Performance',component:PerformanceComponent},
  {path: 'Confort',component:ConfortComponent},
  {path: 'Siege',component:SiegeComponent},
  {path: 'Habilete',component:HabileteComponent},
  {path: 'categoriedevehicule',component:CategoriedevehiculeComponent},
  {path: 'Energie',component:EnergieComponent},
  {path: 'Transmission',component:TransmissionComponent},
  {path: 'Aideaustation',component:AideaustationComponent},
  {path: 'Ecologie',component:EcologieComponent},
  {path: 'Designexterieur',component:DesignexterieurComponent},
  {path: 'Adialaconduite',component:AdialaconduiteComponent},
  {path: 'Categorie',component:CategorieComponent},
   {path: 'asiaaustationinfo',component:AsiaaustationinfoComponent},
   {path: 'securiteinfo',component:SecuriteinfoComponent},
  //  {path: 'performanceinfo',component:Page23Component},
  {path: 'Ecologieinfo',component:EcologieinfoComponent},
  //  {path: 'transmissioninfo',component:Page25Component},
   {path: 'Energieinfo',component:EnergieinfoComponent},
  //  {path: 'home',component:Page27Component},
  //  {path: 'validationrecherche',component:Page28Component},
  //  {path: 'categorie1',component:Page29Component},
  //  {path: 'resultatdeecherche',component:Page30Component},
  //  {path: 'detailsfiche1',component:Page31Component},
  //  {path: 'detailsfichesingle',component:Page32Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 