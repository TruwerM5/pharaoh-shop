
export const useImagesStore = defineStore('useImagesStore', {
    state: () => ({    
        currentIndex: 0,
        isGalleryOpened: false,
    }),
    actions: {
        setCurrentIndex(index: number) {
            this.currentIndex = index;
        },
        openGallery() {
            this.isGalleryOpened = true;
        },
        closeGallery() {
            this.isGalleryOpened = false;
        }
    }
})