import {
  Fragment,
  defineComponent,
  h,
  markRaw,
  provide,
  reactive,
  ref,
} from "vue";
import { createId } from "seemly";
import Test from "../components/Test";

export const myInjectionKey = Symbol();

export const TestProvider = defineComponent({
  name: "TestProvider",
  setup() {
    const operationListRef = ref([]);
    const operationInstRefs = {};
    const componentMap = {
      TestModal: markRaw(Test),
    };

    const generateOperationAction = (type) => {
      const key = createId();
      const _operationAction = reactive({
        name: componentMap[type].name,
        component: componentMap[type],
        key,
      });

      operationListRef.value.push(_operationAction);

      return (event) =>
        operationInstRefs[`operation-action-${_operationAction.key}`]?.show(
          event
        );
    };

    const apis = {
      TestModal: generateOperationAction("TestModal"),
    };
    provide(myInjectionKey, apis);

    return {
      operationList: operationListRef,
      operationInstRefs,
    };
  },
  render() {
    return h(Fragment, null, [
      this.operationList.map((operation) =>
        h(operation.component, {
          ref: (inst) => {
            if (inst === null) {
              delete this.operationInstRefs[
                `operation-action-${operation.key}`
              ];
            } else {
              this.operationInstRefs[`operation-action-${operation.key}`] =
                inst;
            }
          },
        })
      ),
      this.$slots.default?.(),
    ]);
  },
});
