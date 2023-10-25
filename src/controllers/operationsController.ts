import { operationCall } from "../types";

interface IOperationsController {
  performOperation(operation: operationCall): any;
}

export class OperationsController implements IOperationsController {
  performOperation(operation: operationCall): any {}
}
