import { Component, Input } from '@angular/core';
import { ArithmeticOperator } from '../models/arithmetic-operator.model';
import { AttributeValue } from '../models/attribute-value.model';
import { AttributeName } from '../models/attribute-name.model';
import { LogicalOperator } from '../models/logical-operator';
import MockConditionModel from '../mocks/mock';
import { Condition } from '../models/condition.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'table-row',
  templateUrl: `./table-row.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TableRowComponent {
  LogicalOperators = new FormArray([]);
  ArithmeticOperators = new FormArray([]);
  AttributeNames = new FormArray([]);
  AttributeValues = new FormArray([]);
  conditionForm = new FormGroup({
    conditions: new FormArray([
      new FormControl({
        LogicalOperators: new FormArray([]),
        ArithmeticOperators: new FormArray([]),
        AttributeNames: new FormArray([]),
        AttributeValues: new FormArray([]),
      }),
    ]),
  });

  public ngOnInit() {
    let mock = new MockConditionModel();

    mock.LogicalOperators.forEach((d) => {
      this.LogicalOperators.push(
        new FormControl({
          ID: d.ID,
          LogicalOperatorValue: d.LogicalOperatorValue,
        })
      );
    });

    mock.ArithmeticOperators.forEach((d) => {
      this.ArithmeticOperators.push(
        new FormControl({
          ID: d.ID,
          ArithmeticOperatorValue: d.ArithmeticOperatorValue,
        })
      );
    });

    mock.AttributeNames.forEach((d) => {
      this.AttributeNames.push(
        new FormControl({
          ID: d.ID,
          AttributeNameValue: d.AttributeNameValue,
        })
      );
    });

    mock.AttributeValues.forEach((d) => {
      this.AttributeValues.push(
        new FormControl({
          ID: d.ID,
          AttributeValueValue: d.AttributeValueValue,
        })
      );
    });

    this.onAddConditionClick();
  }

  onAddConditionClick() {
    let condition = this.defaultCondition();
    condition.value.ID = this.conditionForm.controls.conditions.length + 1;
    this.conditionForm.controls.conditions.push(condition);
  }

  private defaultCondition(): FormControl {
    return new FormControl({
      ID: 0,
      LogicalOperators: this.LogicalOperators,
      ArithmeticOperators: this.ArithmeticOperators,
      AttributeNames: this.AttributeValues,
      AttributeValues: this.AttributeValues,
    });
  }

  onDeleteConditionClick(index: number) {
    this.conditionForm.controls.conditions.removeAt(index);
  }

  private findConditionIndex(id: number): number {
    for (let i = 0; i < this.conditionForm.controls.conditions.length; i++) {
      if (this.conditionForm.controls.conditions[i].ID === id) {
        return i;
      }
    }
    return -1;
  }

  getConditions(): FormArray {
    return this.conditionForm.get('conditions') as FormArray;
  }
}
