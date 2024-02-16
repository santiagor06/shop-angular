import { Component, Input, SimpleChange, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;
  constructor() {
    //NO ASYNC
    //before render
    //una vez
    console.log('soy el constructor');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes: SimpleChange) {
    //before and during render
    console.log('On changesss');
    console.log(changes);

    console.log('-'.repeat(10));
  }
  ngOnInit() {
    console.log('onInit');
    console.log('mesagge--> ' + this.message);
    console.log('duration--> ' + this.duration);
    this.counterRef = window.setInterval(() => {
      console.log('conteo');

      this.counter.update((counter) => ++counter);
    }, 1000);
    console.log('-'.repeat(10));
  }
  ngAfterViewInit() {
    console.log('ngAfterView');
    console.log('-'.repeat(10));
  }
  ngOnDestroy() {
    console.log('ngDestroy');

    window.clearInterval(this.counterRef);
  }
}
