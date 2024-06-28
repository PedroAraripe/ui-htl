  <template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="showDialog"
      width="auto"
    >
      <v-card
        max-width="400"
        min-width="300"
        title="Busque seu hotel"
      >
        <template v-slot:default>
          <slot>

          </slot>
        </template>
          
        <template v-slot:actions>
          <v-btn
            class="mx-2 text-white ms-auto bg-highlight-buttons px-5"
            :text="submitText"
            @click="handleSubmit"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { type Ref, ref, watch } from "vue";

const emit = defineEmits(['submit'])

const showDialog: Ref<Boolean> = ref(false);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  submitText: {
    type: String,
    default: "ok",
    required: false,
  }
});

const handleSubmit = () => {
  emit("submit", true);

  showDialog.value = false;
};

watch(() => props.modelValue, (newValue) => {
  if(newValue != showDialog.value) {
    showDialog.value = newValue;
  }
});

watch(showDialog, (newValue) => {
  if(newValue != props.modelValue) {
    emit("update:modelValue", newValue);
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/style/themes.scss";
</style>