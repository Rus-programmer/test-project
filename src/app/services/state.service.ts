import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private count: number = 1;
  private eventTransporter: Subject<Observer> = new Subject<Observer>();
  eventTransporter$ = this.eventTransporter.asObservable();

  sendRoute(route: string): void {
    this.eventTransporter.next({route, count: this.count++})
  }
}

export interface Observer {
  route: string;
  count: number;
}
