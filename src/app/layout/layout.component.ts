import { Component } from '@angular/core';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-layout',
  imports: [SharedModuleModule, ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
