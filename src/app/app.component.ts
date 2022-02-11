import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet
} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'test-project';
  loading: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    (this.router.events as Observable<RouterEvent>).subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof (NavigationEnd || NavigationCancel || NavigationError)) {
      setTimeout(() => {
        this.loading = false
        this.cdr.detectChanges();
      }, 500);
    }
  }
}
