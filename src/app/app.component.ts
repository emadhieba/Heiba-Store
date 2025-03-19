import { Component,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SharedModuleModule } from './shared/shared-module/shared-module.module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'store_App';
}
