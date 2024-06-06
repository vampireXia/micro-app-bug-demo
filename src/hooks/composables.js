import { inject } from "vue";
import { myInjectionKey } from "./test-provider";

export function useOperationActions() {
  const operationActions = inject(myInjectionKey, null);

  if (operationActions === null) {
    throw new Error(`错误！！！`);
  }
  return operationActions;
}
