import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  //private interval?: NodeJS.Timeout;
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor(){}

  ngOnInit(){
    //this.interval = setInterval(()=>{
      const interval = setInterval(()=>{
      const rnd = Math.random();

      if(rnd < 0.5){
        this.currentStatus = 'online';
      } else if(rnd < 0.9){
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit(){
    console.log('Init');
  }

  ngOnDestroy(): void {
      clearTimeout(this.interval);
  }
}
