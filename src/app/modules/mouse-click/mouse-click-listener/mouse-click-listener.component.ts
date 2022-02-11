import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {fromEvent, takeUntil} from "rxjs";
import {DestroyService} from "../../../services/destroy.service";
import {StateService} from "../../../services/state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mouse-click-listener',
  templateUrl: './mouse-click-listener.component.html',
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MouseClickListenerComponent implements OnInit, OnDestroy {

  constructor (private renderer: Renderer2,
               private destroy$: DestroyService,
               private el: ElementRef,
               private stateService: StateService,
               private router: Router) {}

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'click').pipe(takeUntil(this.destroy$)).subscribe(event => {
      this.stateService.sendRoute(this.router.url)
      this.createRecaptchaContainer(event as MouseEvent);
    });
  }

  createRecaptchaContainer(e: MouseEvent) {
    if (e.clientY > 60) {
      const div = this.renderer.createElement('div');
      div.className = 'clickEffect';
      div.style.top=e.clientY+"px";
      div.style.left=e.clientX+"px";
      this.renderer.appendChild(document.body, div);
      this.removeChild(div);
    }
  }

  removeChild(div: any): void {
    fromEvent(div, 'animationend').pipe(takeUntil(this.destroy$)).subscribe(() => {
      div.parentElement.removeChild(div);
    });
  }

  ngOnDestroy() {
    this.renderer.destroy();
  }
}
