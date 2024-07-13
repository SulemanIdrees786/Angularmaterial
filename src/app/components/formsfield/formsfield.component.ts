import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCommonModule, MatOption } from '@angular/material/core';
import { FloatLabelType, MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSelectionList } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-formsfield',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,MatDivider,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIcon,
    MatLabel,
    MatInput,
    MatHint,
    MatSelectionList,
    MatOption,
    MatCommonModule,
    MatSelectModule,MatRadioModule,MatCheckboxModule,MatRadioGroup,
  ],
  templateUrl: './formsfield.component.html',
  styleUrl: './formsfield.component.css',
})
export class FormsfieldComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

hideRequiredControl=new FormControl(false)

floatLabelControl =new FormControl('auto' as FloatLabelType)

options=this._formbuilder.group({hideRequired:this.hideRequiredControl,
  floatLabel:this.floatLabelControl
})


constructor(private _formbuilder: FormBuilder){}

getFloatLabelValue():FloatLabelType{return this.floatLabelControl.value || 'auto'}

hide=false
}

