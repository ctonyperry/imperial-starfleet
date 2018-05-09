
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeathSquareComponent } from './internal-defenses/death-square/death-square.component';
import { TurretComponent } from './internal-defenses/turret/turret.component';
import { LaserCannonComponent } from './internal-defenses/laser-cannon/laser-cannon.component';
import { TieFighterComponent } from './external-defenses/tie-fighter/tie-fighter.component';
import {StarDestroyerComponent} from './external-defenses/star-destroyer/star-destroyer.component'
import { ExternalDefensesModule } from './external-defenses/external-defenses.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InternalDefensesModule,
    ExternalDefensesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
