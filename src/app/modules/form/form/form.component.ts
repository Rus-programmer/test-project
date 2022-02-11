import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StateService} from "../../../services/state.service";
import {Router} from "@angular/router";
import {DestroyService} from "../../../services/destroy.service";
import {takeUntil} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
              private stateService: StateService,
              private destroy$: DestroyService,
              private router: Router) {}

  ngOnInit(): void {
    this.initFormControls();
    this.initValueObserver();
  }

  initFormControls(): void {
    const dataJson = localStorage.getItem('data');
    let data: Data | null = null;
    try {
      data = JSON.parse(dataJson ?? '');
    } catch (e) {}
    this.form.addControl('user', this.fb.control(data?.user));
    this.form.addControl('password', this.fb.control(data?.password));
  }

  initValueObserver(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.stateService.sendRoute(this.router.url)
    })
  }

  submit(): void {
    localStorage.setItem('data', JSON.stringify(this.form.value));
  }

  ngOnDestroy(): void {}
}

interface Data {
  user: string;
  password: string;
}
