import { ArithmeticOperator } from '../models/arithmetic-operator.model';
import { AttributeValue } from '../models/attribute-value.model';
import { AttributeName } from '../models/attribute-name.model';
import { LogicalOperator } from '../models/logical-operator';

export default class MockConditionModel {
  LogicalOperators: LogicalOperator[] = [];
  ArithmeticOperators: ArithmeticOperator[] = [];
  AttributeNames: AttributeName[] = [];
  AttributeValues: AttributeValue[] = [];

  constructor() {
    // Logical operators array initialization
    this.LogicalOperators = [
      {
        ID: 1,
        LogicalOperatorValue: '-',
      },
      {
        ID: 2,
        LogicalOperatorValue: 'And',
      },
      {
        ID: 3,
        LogicalOperatorValue: 'Or',
      },
    ];

    // Data items array initialization
    this.AttributeNames = [
      {
        ID: 1,
        AttributeNameValue: 'Business ID',
      },
      {
        ID: 2,
        AttributeNameValue: 'Agent_name',
      },
      {
        ID: 3,
        AttributeNameValue: 'Entity Number',
      },
      {
        ID: 4,
        AttributeNameValue: 'Coorperation_name',
      },
    ];

    // Operator array initialization
    this.ArithmeticOperators = [
      {
        ID: 1,
        ArithmeticOperatorValue: 'is null',
      },
      {
        ID: 2,
        ArithmeticOperatorValue: '=',
      },
      {
        ID: 3,
        ArithmeticOperatorValue: '+',
      },
      {
        ID: 4,
        ArithmeticOperatorValue: '-',
      },
      {
        ID: 5,
        ArithmeticOperatorValue: '*',
      },
      {
        ID: 5,
        ArithmeticOperatorValue: '/',
      },
    ];

    // Data value array initialization
    this.AttributeValues = [
      {
        ID: 1,
        AttributeValueValue: '-',
      },
      {
        ID: 2,
        AttributeValueValue: 'Michel King',
      },
      {
        ID: 3,
        AttributeValueValue: 'LLC',
      },
    ];
  }
}
