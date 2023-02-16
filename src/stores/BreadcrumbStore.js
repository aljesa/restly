import { defineStore } from "pinia";

export const useBreadcrumbStore = defineStore('breadcrumbStore',{
    state: () => ({
        crumbs: [],
    }),
    actions: {
        setCrumbs(crumbs) {
        this.crumbs = crumbs
        },
  },
});