import { NModal, NSpin } from "naive-ui";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "Test",
  setup() {
    const modalProps = reactive({
      title: "任务详情",
      preset: "card",
      bordered: false,
      maskClosable: false,
      headerStyle: {
        backgroundColor: "var(--info-color)",
        padding: "14px 20px",
        fontWeight: "700",
      },
    });

    const visible = ref(false);
    const loading = ref(true);

    const show = async ({ beforeshow }) => {
      loading.value = true;
      Object.assign(modalProps, {
        style: {
          width: "600px",
        },
      });
      if (beforeshow) {
        visible.value = true;
        const data = await beforeshow();
        console.log("🚀 ~ show ~ data:", data);
        loading.value = false;
        return;
      }
      Object.assign(modalProps, {
        style: {
          width: "600px",
        },
      });
      visible.value = true;
      loading.value = false;
    };

    const renderContainer = () => (
      <>
        <NModal v-model:show={visible.value} {...modalProps}>
          {{
            default: () => (
              <NSpin show={loading.value}>
                <div class="relative">
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                  弹窗123
                  <br />
                </div>
              </NSpin>
            ),
          }}
        </NModal>
      </>
    );
    return {
      show,
      renderContainer,
    };
  },
  expose: ["show"],
  render() {
    return this.renderContainer();
  },
});
