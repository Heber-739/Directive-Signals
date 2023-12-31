import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styles: [
  ]
})
export class PropertiesComponent implements OnDestroy, OnInit {
public user = signal<User>({
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
})

public counter = signal(10);

public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }` );

public userChangedEffect = effect( () => {
  console.log(`${ this.user().first_name} - ${ this.counter() } `);
});


ngOnInit(): void {
  let interval =setInterval(() => {
    this.counter.update( current => current + 1 );
    if(this.counter()>10){
      clearInterval(interval)
    }

    // if ( this.counter() == 15 )
    //   this.userChangedEffect.destroy();
  },1000)
}

ngOnDestroy(): void {
  // this.userChangedEffect.destroy();
}

increaseBy( value: number) {
  this.counter.update( current => current + value );
}

fieldUpdated( field: keyof User, value: string ) {

  // this.user.set({
  //   ...this.user(),
  //   [field]: value,
  // });

  this.user.update( current => {
    return {
      ...current,
      [field]: value
    };
  });


  // this.user.mutate( current => {

  //   switch( field ) {
  //     case 'email':
  //       current.email = value;
  //     break;

  //     case 'first_name':
  //       current.first_name = value;
  //     break;

  //     case 'last_name':
  //       current.last_name = value;
  //     break;

  //     case 'id':
  //       current.id = Number(value);
  //     break;
  //   }


  // });

}


}
