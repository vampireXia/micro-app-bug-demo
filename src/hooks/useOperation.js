import { computed } from "vue";
import { useOperationActions } from "./composables";

export const useOperations = () => {
  const operationActions = useOperationActions();

  const handleTestModal = ({ setLoading }) => {
    setLoading?.(true);
    operationActions.TestModal?.({
      beforeshow: async () => {
        const data = await new Promise((reslove) => {
          setTimeout(() => {
            reslove({ a: 123 });
          }, 1000);
        }).finally(() => {
          setLoading?.(false);
        });
        return data;
      },
    });
  };

  return {
    handleTestModal,
  };
};
