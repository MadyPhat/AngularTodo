import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker.module';
import { asyncScheduler } from 'rxjs';
import { filter, observeOn, scan } from 'rxjs/operators';
interface ScrollPositionRestore {
  event: Event;
  positions: {[k: number]: number};
  trigger: any;
  idToRestore: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'todo';
  model: NgbDateStruct | undefined;
  @ViewChild('contentContainer')
  private contentArea!: ElementRef<HTMLElement>;

  constructor(private router: Router){
    // window.addEventListener('beforeunload', (event)=> {
    //   console.log('Before Unload', event);
    //   window.localStorage.setItem('before-unload', JSON.stringify(event));
    // });
  }

  ngOnInit(): void {
    // const beforeunload = window.localStorage.getItem('before-unload');
    // console.log('Old load data', beforeunload);
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart || event instanceof NavigationEnd,
        ),
        scan<Event, ScrollPositionRestore>((acc, event) => ({
          event,
          positions: {
            ...acc.positions,
            ...(event instanceof NavigationStart
              ? {
                  [event.id]: this.contentArea.nativeElement.scrollTop,
                }
              : {}),
          },
          trigger:
            event instanceof NavigationStart
              ? event.navigationTrigger
              : acc.trigger,
          idToRestore:
            (event instanceof NavigationStart &&
              event.restoredState &&
              event.restoredState.navigationId + 1) ||
            acc.idToRestore,
        })),
        // filter(
        //   ({ event, trigger }) => event instanceof NavigationEnd && !!trigger,
        // ),
        // observeOn(asyncScheduler),
      )
      .subscribe(({ trigger, positions, idToRestore, event }) => {
        console.log('Event', event);
        console.log('Positon', positions)
        if (trigger === 'imperative') {
          console.log('reset', positions)
          this.contentArea.nativeElement.scrollTop = 0;
        }

        if (trigger === 'popstate') {
          console.log('Position', positions[idToRestore])
          this.contentArea.nativeElement.scrollTop = positions[idToRestore];
        }
      });
  }

}
