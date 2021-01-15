import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// import { Web1Component } from './web1/web1.component';
import { NewdemoComponent } from './newdemo/newdemo.component';
import { Page1Component} from './page1/page1.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './apropos/apropos.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { SecuriteComponent } from './securite/securite.component';
import { PerformanceComponent } from './performance/performance.component';
import { ConfortComponent } from './confort/confort.component';
import { SiegeComponent } from './siege/siege.component';
import { HabileteComponent } from './habilete/habilete.component';
import { CategoriedevehiculeComponent } from './categoriedevehicule/categoriedevehicule.component';
import { EnergieComponent } from './energie/energie.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { AideaustationComponent } from './aideaustation/aideaustation.component';
import { EcologieComponent } from './ecologie/ecologie.component';
import { DesignexterieurComponent } from './designexterieur/designexterieur.component';
import { AdialaconduiteComponent } from './adialaconduite/adialaconduite.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AsiaaustationinfoComponent } from './asiaaustationinfo/asiaaustationinfo.component';
import { SecuriteinfoComponent } from './securiteinfo/securiteinfo.component';
import { Page3Component } from './page3/page3.component'



@NgModule({
  declarations: [
    AppComponent, 
    NewdemoComponent,
    Page1Component,
    FooterComponent,
    HeaderComponent,
    Page2Component,
    HomeComponent,
    AproposComponent,
    Page5Component,
    Page6Component,
    Page7Component,
    SecuriteComponent,
    PerformanceComponent,
    ConfortComponent,
    SiegeComponent,
    HabileteComponent,
    CategoriedevehiculeComponent,
    EnergieComponent,
    TransmissionComponent,
    AideaustationComponent,
    EcologieComponent,
    DesignexterieurComponent,
    AdialaconduiteComponent,
    CategorieComponent,
    AsiaaustationinfoComponent,
    SecuriteinfoComponent,
    Page3Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
   ]
})
export class AppModule { }
