import { Component, OnInit } from '@angular/core';

import * as cloneDeep from 'lodash/cloneDeep';

import { DropdownModel } from '../../../../core/models/dropdown.model';
import { dropdownOptions } from '../../../../utils/constants/dropdown-options.constant';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thumb-rule-parent',
  templateUrl: './thumb-rule-parent.component.html',
  styleUrls: ['./thumb-rule-parent.component.scss']
})
export class ThumbRuleParentComponent implements OnInit {

  dropdownOptions: DropdownModel[];
  viewOption: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.dropdownOptions = cloneDeep(dropdownOptions);
    this.viewOption = this.formBuilder.group({
      viewOrder: [0]
    });
  }

}
