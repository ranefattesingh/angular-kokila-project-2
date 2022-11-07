import { ArithmeticOperator } from './arithmetic-operator.model';
import { AttributeValue } from './attribute-value.model';
import { AttributeName } from './attribute-name.model';
import { LogicalOperator } from './logical-operator';

export class Condition {
  ID: number;
  LogicalOperators: LogicalOperator[] = [];
  ArithmeticOperators: ArithmeticOperator[] = [];
  AttributeNames: AttributeName[] = [];
  AttributeValues: AttributeValue[] = [];
}
