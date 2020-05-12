import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster/toaster.component';
import { LoaderComponent } from './loader/loader.component';
import { ToasterService } from 'src/services/toaster.service';
import { LoaderService } from 'src/services/loader.service';
import { ButtonControlComponent } from './button-control/button-control.component';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);



@NgModule({
  declarations: [ToasterComponent, LoaderComponent, ButtonControlComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,    
    MatNativeDateModule,
    FusionChartsModule,
    FormsModule
  ],
  exports:[ToasterComponent,LoaderComponent, ButtonControlComponent,
    FusionChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers:[ToasterService,LoaderService]
})
export class SharedControlsModule { }
