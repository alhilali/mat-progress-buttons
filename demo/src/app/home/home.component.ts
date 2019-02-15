import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  strokedCode = `  import { Component } from '@angular/core';
  import { MatProgressButtonOptions } from 'mat-progress-buttons';

  @Component({
    selector: 'app-home',
    template: '<mat-spinner-button (click)="btnClick()" [options]="btnOpts"></mat-spinner-button>'
  })
  export class SomeComponent {

    // Button Options
    btnOpts: MatProgressButtonOptions = {
      active: false,
      text: 'Stroked Button',
      spinnerSize: 19,
      raised: false,
      stroked: true,
      buttonColor: 'accent',
      spinnerColor: 'accent',
      fullWidth: false,
      disabled: false,
      mode: 'indeterminate',
    };

    // Click handler
    btnClick(): void {
      this.btnOpts.active = true;
      setTimeout(() => {
        this.btnOpts.active = false;
      }, 3350);
    }
  }`;

  strokedOpts = `    active: boolean,
    text: string,
    spinnerSize: number,
    raised: boolean,
    stroked: boolean,
    buttonColor: string,
    spinnerColor: string,
    fullWidth: boolean,
    disabled: boolean,
    mode: string`;

  raisedCode = `  import { Component } from '@angular/core';
  import { MatProgressButtonOptions } from 'mat-progress-buttons';

  @Component({
    selector: 'app-home',
    template: '<mat-bar-button (click)="btnClick()" [options]="btnOpts"></mat-bar-button>'
  })
  export class SomeComponent {

    // Button Options
    btnOpts: MatProgressButtonOptions = {
      active: false,
      text: 'Stroked Button',
      buttonColor: 'accent',
      barColor: 'accent',
      raised: false,
      stroked: true,
      mode: 'indeterminate',
      value: 0,
      disabled: false
    };

    // Click handler
    btnClick(): void {
      this.btnOpts.active = true;
      setTimeout(() => {
        this.btnOpts.active = false;
      }, 3350);
    }
  }`;

  raisedOpts = `    active: boolean,
    text: string,
    raised: boolean,
    stroked: boolean,
    buttonColor: string,
    barColor: string,
    fullWidth: boolean,
    disabled: boolean,
    mode: string`;

  spinnerButtonOptions = {
    active: false,
    text: 'Stroked Button',
    spinnerSize: 19,
    raised: false,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
    flat: true
  };

  spinnerButtonOptions1 = {
    active: false,
    text: 'Raised Button',
    spinnerSize: 19,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate'
  };

  spinnerButtonOptions2 = {
    active: false,
    text: 'Default Button',
    spinnerSize: 19,
    raised: false,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'primary',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate'
  };

  barButtonOptions = {
    active: false,
    text: 'Stroked Button',
    buttonColor: 'accent',
    barColor: 'accent',
    raised: false,
    stroked: true,
    mode: 'indeterminate',
    value: 0,
    disabled: false,
    flat: true,
    iconName: 'mic'
  };

  barButtonOptions1 = {
    active: false,
    text: 'Raised Button',
    buttonColor: 'primary',
    barColor: 'primary',
    raised: true,
    stroked: false,
    mode: 'indeterminate',
    value: 0,
    disabled: false
  };

  barButtonOptions2 = {
    active: false,
    text: 'Default Button',
    buttonColor: 'primary',
    barColor: 'primary',
    raised: false,
    stroked: false,
    mode: 'indeterminate',
    value: 0,
    disabled: false
  };

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Home | mat-progress-buttons');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('michaeldoye/mat-progress-buttons/tree/master/demo');
  }

  someFunc(): void {
    this.spinnerButtonOptions.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions.active = false;
    }, 3350);
  }

  someFunc1(): void {
    this.spinnerButtonOptions1.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions1.active = false;
    }, 3350);
  }

  someFunc2(): void {
    this.spinnerButtonOptions2.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions2.active = false;
    }, 3350);
  }

  someFunc3(): void {
    this.barButtonOptions.active = true;
    setTimeout(() => {
      this.barButtonOptions.active = false;
    }, 3350);
  }

  someFunc4(): void {
    this.barButtonOptions1.active = true;
    setTimeout(() => {
      this.barButtonOptions1.active = false;
    }, 3350);
  }

  someFunc5(): void {
    this.barButtonOptions2.active = true;
    setTimeout(() => {
      this.barButtonOptions2.active = false;
    }, 3350);
  }
}
