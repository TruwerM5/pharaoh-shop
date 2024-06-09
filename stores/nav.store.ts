

export const useNavStore = defineStore('navStore', {
    state: () => ({
        is_opened: false,
    }),

    actions: {
        toggleNav() {
            this.is_opened = !this.is_opened;
        },
        closeNav() {
            if(process.client) {
                if(window.innerWidth < 1280) {
                    this.is_opened = false;        
                } else return;
            }
            
        },
        openNav() {
            
            this.is_opened = true;
        }
    }
})