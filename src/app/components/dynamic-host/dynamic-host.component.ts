import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHostDirective } from '../../directives/app-host.directive';
import {
  IComponentDynamic,
  SampleComponentComponent,
} from '../sample-component/sample-component.component';

@Component({
  selector: 'app-dynamic-host',
  standalone: true,
  imports: [CommonModule, AppHostDirective],
  template: ` <ng-template appAppHost></ng-template> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicHostComponent implements OnInit {
  @ViewChild(AppHostDirective, { static: true }) appHost!: AppHostDirective;

  ngOnInit() {
    this.loadComponent(SampleComponentComponent);
  }

  loadComponent(comp: Type<IComponentDynamic>) {
    const viewContainerRef = this.appHost.viewContainerRef;
    viewContainerRef.clear();
    const component = viewContainerRef.createComponent(comp);
    component.instance.value = 'value';
    component.instance.genericOutput?.subscribe(value => {
      console.log(value);
    });
  }
}
