import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observer, StateService} from "../../services/state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {
  state$: Observable<Observer> = this.stateService.eventTransporter$;
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
  }

}
