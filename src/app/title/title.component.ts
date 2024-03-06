import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule,TitleComponent,TranslateModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

}
