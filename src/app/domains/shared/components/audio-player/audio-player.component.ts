import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.css',
})
export class AudioPlayerComponent {
  @Input({ required: true }) url!: string;
  @ViewChild('player') container!: ElementRef;
  private waveSurfer!: WaveSurfer;
  isPlaying = signal<boolean>(false);
  ngAfterViewInit() {
    this.waveSurfer = WaveSurfer.create({
      url: this.url,
      container: this.container.nativeElement,
    });
  }
  playPause() {
    this.waveSurfer.playPause();
    this.isPlaying.update((play) => !play);
  }
}
