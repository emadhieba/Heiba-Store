import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { HeaderComponent } from '../Components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule,  } from '@angular/common/http';
import { SpinerComponent } from '../Components/spiner/spiner.component';
import { FormsModule } from '@angular/forms';
import { FotterComponent } from '../Components/fotter/fotter.component';



@NgModule({
  declarations: [HeaderComponent,SpinerComponent,FotterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgForOf,
    FormsModule 
  ],
  exports:[
    HeaderComponent,
    SpinerComponent,
    FormsModule ,
    RouterModule,
    FotterComponent
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModuleModule { }
