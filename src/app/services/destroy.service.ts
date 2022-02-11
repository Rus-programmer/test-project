import {Injectable, OnDestroy} from "@angular/core";
import {ReplaySubject} from "rxjs";

@Injectable()
export class DestroyService extends ReplaySubject<void> implements OnDestroy {
  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
