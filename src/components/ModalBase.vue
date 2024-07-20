  <template>
  <div class="text-center">
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
          <slot />
        </template>
          
        <template v-slot:actions>
          <v-btn
            v-if="clearText"
            class="border border-2 px-5"
            :text="clearText"
            @click="handleCancel"
          ></v-btn>
          <v-btn
            class="mx-2 text-white bg-highlight-buttons px-5"
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

const emit = defineEmits(['submit', 'update:modelValue', 'clear'])

const showDialog: Ref<Boolean> = ref(false);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  clearText: {
    type: String,
    required: false,
  },
  submitText: {
    type: String,
    default: "ok",
    required: false,
  },
});

const handleSubmit = () => {
  emit("submit", true);

  showDialog.value = false;
};

const handleCancel = () => {
  emit("clear", true);

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