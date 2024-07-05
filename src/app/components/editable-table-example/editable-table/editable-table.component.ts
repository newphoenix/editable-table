import { Component, input, OnChanges, OnInit, output, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorNames } from '../../../enums/validator-names';
import { ValidationMessage } from '../../../interfaces/validation-message';


@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrl: './editable-table.component.css'
})
export class EditableTableComponent implements OnChanges {

  inputData = input.required<any[]>();
  validation = input<{}>();

  validationMessages = new Map<string, Map<string, ValidationMessage>>();
  data: any[] = [];

  editedRow = output<any>();

  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {

    this.data = [];

    this.inputData().forEach(element => {
      this.data.push({
        previousData: element,
        currentData: this.getFormControls(element),
        readOnly: true
      });
    });

  }

  getFormControls(element: any): FormGroup {

    let formGroupFields = [];

    this.keys.forEach((field, index) => {

      const validators = this.addValidators(this.validation()?.[field]?.['rules'], field, this.validation()?.[field]?.['label']);
      formGroupFields[field] = [element[field], validators];
    });

    return this.formBuilder.group(formGroupFields);
  }


  private addValidators(rules: [], fieldName: string, fieldLabel: string) {

    if (!rules) { return []; }

    const validators = Object.keys(rules).map((rule) => {

      switch (rule) {
        case ValidatorNames.required: {
          this.addValidationMessage(fieldName, ValidatorNames.required, `${fieldLabel} is required`);
          return Validators.required;
        }
        case ValidatorNames.minLength: {
          this.addValidationMessage(fieldName, ValidatorNames.minLength, `${fieldLabel} min length should be ${rules[ValidatorNames.minLength]} characters`);
          return Validators.minLength(rules[ValidatorNames.minLength]);
        }
        case ValidatorNames.maxLength: {
          this.addValidationMessage(fieldName, ValidatorNames.maxLength, `${fieldLabel} max length should be ${rules[ValidatorNames.maxLength]} characters`);
          return Validators.maxLength(rules[ValidatorNames.maxLength]);
        }
        case ValidatorNames.email: {
          this.addValidationMessage(fieldName, ValidatorNames.email, `Please enter a correct email format`);
          return Validators.email;
        }
        case ValidatorNames.min: {
          this.addValidationMessage(fieldName, ValidatorNames.min, `${fieldLabel} min value should be ${rules[ValidatorNames.min]}`);
          return Validators.min(rules[ValidatorNames.min]);
        }
        case ValidatorNames.max: {
          this.addValidationMessage(fieldName, ValidatorNames.max, `${fieldLabel} max value should be ${rules[ValidatorNames.max]}`);
          return Validators.max(rules[ValidatorNames.max]);
        }
        case ValidatorNames.pattern: {
          this.addValidationMessage(fieldName, ValidatorNames.pattern, `${fieldLabel} pattern should be ${rules[ValidatorNames.pattern]}`);
          return Validators.pattern(rules[ValidatorNames.pattern]);
        }
        default: { throw new Error('NoMatchFoundError') };
      }

    });

    return validators;
  }

  addValidationMessage = (fieldName: string, type: string, message: string) => {
    let fieldMap = this.validationMessages.get(fieldName) ?? new Map<string, ValidationMessage>();
    fieldMap?.set(type, { msg: message });
    this.validationMessages.set(fieldName, fieldMap);
  }

  get keys() {
    return Object.keys(this.inputData()[0]);
  }

  toFormControl(abstractControl: AbstractControl | null): FormControl {
    return abstractControl as FormControl;
  }

  makeEditable(row: any, index: number) {
    this.renderer.selectRootElement('#a' + index + '0').focus();
    this.toggleEditSave(row);
  }

  save(row: any) {

    if (!this.isRowValid(row)) { this.makeRowFieldsTouched(row); return;}

    this.toggleEditSave(row);
    this.keys.forEach(item => {
      row.currentData[item] = row.currentData.controls[item].value;
      row.previousData[item] = row.currentData[item];
    });


    this.editedRow.emit(row.currentData.value);

  }

  cancel(row: any) {

    this.toggleEditSave(row);
    this.keys.forEach(item => {
      row.currentData.controls[item].patchValue(row.previousData[item]);
    });
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }

  private toggleEditSave(row: any) {
    row.readOnly = !row.readOnly;
  }

  private isRowValid(row : any): boolean {
    return row.currentData.valid;
  }


  private makeRowFieldsTouched(row : any){  
    Object.keys(row.currentData.controls).forEach(field => {
        row.currentData.get(field).markAsTouched({ onlySelf: true });
  });

 }

}
