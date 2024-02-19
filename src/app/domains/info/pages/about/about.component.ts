import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../../../shared/components/audio-player/audio-player.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent,
    HeaderComponent,
    AudioPlayerComponent,
    CommonModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('holaaa');
  changeDuration(event: Event) {
    let input = event.target as HTMLInputElement;
    let { valueAsNumber } = input;
    this.duration.set(valueAsNumber);
  }
  changeMessage(event: Event) {
    let input = event.target as HTMLInputElement;
    let { value } = input;
    this.message.set(value);
  }
}
