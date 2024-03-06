import { TitleComponent } from './title/title.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 public currentlang!:string;

 constructor(private translate : TranslateService){
  this.currentlang = translate.currentLang || translate.getDefaultLang();
 }

 public changeLang(){
  this.currentlang ==='es'? this.translate.use('en') : this.translate.use('es')
  this.currentlang = this.translate.currentLang;
 }


}
