

export const useNavStore = defineStore('navStore', {
    state: () => ({
        is_opened: false,
    }),

    actions: {
        toggleNav() {
            this.is_opened = !this.is_opened;
        },
    }
})