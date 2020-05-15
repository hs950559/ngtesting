import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Observable,
  interval,
  Subscription,
  from,
  noop,
  of,
  fromEvent,
  concat,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  mapTo,
  tap,
  scan,
  filter,
  take,
  map,
  first,
  takeUntil,
  takeWhile,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  debounceTime,
  pluck,
  switchMap,
  exhaustMap,
} from 'rxjs/operators';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    const subject = new ReplaySubject();
    const series$ = subject.asObservable();

    series$.subscribe(console.log);

    subject.next(1);
    subject.next(2);
    subject.next(3);
    series$.subscribe(console.log);
    subject.next(4);
  }

  ngOnDestroy() {}
}
