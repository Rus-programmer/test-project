import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {takeUntil, timer} from "rxjs";
import {DestroyService} from "../../../services/destroy.service";
import {StateService} from "../../../services/state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {
  count: number = 0;
  constructor(private destroy$: DestroyService,
              private stateService: StateService,
              private cdr: ChangeDetectorRef,
              private router: Router) { }

  ngOnInit(): void {
    timer(this.count, 10000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.stateService.sendRoute(this.router.url)
      this.count++;
      this.cdr.detectChanges();
    })
  }
}
