

export const useNavStore = defineStore('navStore', {
    state: () => ({
        is_opened: false,
    }),

    actions: {
        toggleNav() {
            this.is_opened = !this.is_opened;
        },
        closeNav() {
            this.is_opened = false;
        },
        openNav() {
            this.is_opened = true;
        }
    }
})