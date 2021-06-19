import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownModel } from '../../../../../core/models/dropdown.model';

@Component({
  selector: 'app-thumb-dropdown',
  templateUrl: './thumb-dropdown.component.html',
  styleUrls: ['./thumb-dropdown.component.scss']
})
export class ThumbDropdownComponent {

  @Input() options: DropdownModel[];
  @Input() control?: FormControl;
  @Output() focusEvent: EventEmitter<void> = new EventEmitter<void>();

  onInputFocus(): void {
    this.focusEvent.emit();
  }

}
