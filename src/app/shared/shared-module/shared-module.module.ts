import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { HeaderComponent } from '../Components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule,  } from '@angular/common/http';
import { SpinerComponent } from '../Components/spiner/spiner.component';
import { FormsModule } from '@angular/forms';
import { FotterComponent } from '../Components/fotter/fotter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent,SpinerComponent,FotterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgForOf,
    FormsModule ,
    ReactiveFormsModule,
    MatFormFieldModule,  
    MatInputModule,     
    MatButtonModule,
    CommonModule 
  ],
  exports:[
    HeaderComponent,
    SpinerComponent,
    FormsModule ,
    RouterModule,
    ReactiveFormsModule,
    FotterComponent,
    MatFormFieldModule,  
    MatInputModule,     
    MatButtonModule,
    CommonModule
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class SharedModuleModule { }
