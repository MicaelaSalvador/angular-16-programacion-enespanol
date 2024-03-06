import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../core/users.service';
import { Users } from '../common/interfaces/users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  public users!: Signal<Users[]>;

  public age: WritableSignal<number> = signal(0);
  public totalAge: Signal<number> = computed(() => this.age() *2)

  constructor(private userService : UsersService, private injector : Injector){
   
  }

ngOnInit(): void {

  this.users = this.userService.getUsers();
  effect(() => {
    console.log(`Age: ${this.age()}`);
    console.log(this.totalAge());
  }, {injector:this.injector})
}
public updateAge(){
  this.age.update(age => age+2);
}

}
