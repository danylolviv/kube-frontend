import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'static-page';
  secValue = 11;
  minValue = 2;
  hourValue = 2;
  dayValue = 9;
  timeFunction: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timeFunction = setInterval(() => {
      this.secValue--;

      if (this.secValue === 0) {
        this.minValue--;
        this.secValue = 60;
      }
      if (this.minValue === 0) {
        this.hourValue--;
        this.minValue = 60;
      }
      if (this.hourValue === 0) {
        this.dayValue--;
        this.hourValue = 24;
      }

      if (this.dayValue === 0) {
        clearInterval(this.timeFunction);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timeFunction) {
      clearInterval(this.timeFunction);
    }
  }
}
