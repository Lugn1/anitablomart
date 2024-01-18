import {ref, computed} from 'vue'



export const collapsed = ref(true);
export const toggleSidebarOff = () => (collapsed.value = true)
export const toggleSidebarOn = () => (collapsed.value = false)

export const SIDEBAR_WIDTH = 150;
export const SIDEBAR_WIDTH_COLLAPSED = 0;
export const sidebarWidth = computed(()=>`${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`)
