import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>sample-component works! {{ value }}</p>
    <button (click)="genericOutput.emit('value')">Click me</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleComponentComponent implements IComponentDynamic {
  @Input() value?: string;
  @Output() genericOutput = new EventEmitter<string>();
}

export interface IComponentDynamic {
  value?: string;
  genericOutput: EventEmitter<string>;
}
