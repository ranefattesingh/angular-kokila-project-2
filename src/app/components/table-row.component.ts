import { Component, Input } from '@angular/core';
import { ArithmeticOperator } from '../models/arithmetic-operator.model';
import { AttributeValue } from '../models/attribute-value.model';
import { AttributeName } from '../models/attribute-name.model';
import { LogicalOperator } from '../models/logical-operator';
import MockConditionModel from '../mocks/mock';
import { Condition } from '../models/condition.model';

@Component({
  selector: 'table-row',
  templateUrl: `./table-row.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TableRowComponent {
  LogicalOperators: LogicalOperator[] = [];
  ArithmeticOperators: ArithmeticOperator[] = [];
  AttributeNames: AttributeName[] = [];
  AttributeValues: AttributeValue[] = [];
  Conditions: Condition[] = [];

  public ngOnInit() {
    let mock = new MockConditionModel();
    this.LogicalOperators = mock.LogicalOperators;
    this.ArithmeticOperators = mock.ArithmeticOperators;
    this.AttributeNames = mock.AttributeNames;
    this.AttributeValues = mock.AttributeValues;

    this.onAddConditionClick();
  }

  onAddConditionClick() {
    console.log('clicked');
    let condition = this.defaultCondition();
    condition.ID = this.Conditions.length + 1;
    this.Conditions.push(condition);
  }

  private defaultCondition(): Condition {
    return {
      ID: 0,
      LogicalOperators: this.LogicalOperators,
      ArithmeticOperators: this.ArithmeticOperators,
      AttributeNames: this.AttributeNames,
      AttributeValues: this.AttributeValues,
    };
  }

  onDeleteConditionClick(condition: Condition) {
    let deleteIndex = this.findConditionIndex(condition.ID);
    if (deleteIndex == -1) {
      return;
    }

    this.Conditions.splice(deleteIndex, 1);
  }

  private findConditionIndex(id: number): number {
    for (let i = 0; i < this.Conditions.length; i++) {
      if (this.Conditions[i].ID === id) {
        return i;
      }
    }
    return -1;
  }
}
