import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() state: 'default' | 'hover' | 'pressed' | 'disabled' = 'default';
  @Input() corners: 'full' | 'normal' = 'full';
  @Input() contents: 'textOnly' | 'iconLeft' | 'iconRight' | 'iconOnly' = 'textOnly';
  @Input() disabled: boolean = false;

  get buttonClasses(): string {
    const classes = [
      'btn',
      `btn-${this.type}`,
      `btn-state-${this.disabled ? 'disabled' : this.state}`,
      `btn-corners-${this.corners}`,
      `btn-contents-${this.contents}`
    ];
    return classes.join(' ');
  }
}
