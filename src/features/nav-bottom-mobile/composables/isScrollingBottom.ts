import { onBeforeUnmount, ref } from "vue";

export const scrollHistory = ref({
  currentScroll: 0,
  oldScroll: 0,
  isScrollingBottom: true,
});

const handleScroll = (e:any) => {
  const currentScrollY: number = e.currentTarget.scrollY;
  const oldScrollY: number = scrollHistory.value.currentScroll;
  scrollHistory.value.oldScroll = oldScrollY;
  scrollHistory.value.currentScroll = currentScrollY;
  scrollHistory.value.isScrollingBottom = (currentScrollY - oldScrollY) > 0;
};

export const addEventListenerScrollBottom = () => window.addEventListener('scroll', handleScroll);
export const removeEventListenerScrollBottomUnmount = () => onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));