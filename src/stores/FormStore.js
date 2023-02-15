import { defineStore } from "pinia";

export const useFormStore = defineStore('formStore',{
    state: () => ({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    errors: {
      name: null,
      email: null,
      phoneNumber: null,
      message: null,
    },
  }),
  actions: {
    updateField(field, value) {
      this[field] = value
    },
    validate() {
      if (!this.name) {
        this.errors.name = 'Name is required'
      } else {
        this.errors.name = null
      }
      
      if (!this.email) {
        this.errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.errors.email = 'Email is invalid'
      } else {
        this.errors.email = null
      }

      if (!this.phoneNumber) {
        this.errors.phoneNumber = 'Phone number is required'
      } else {
        this.errors.phoneNumber = null
      }

      if (!this.message) {
        this.errors.message = 'Phone number is required'
      } else {
        this.errors.message = null
      }

    },
    reset() {
      this.name = ''
      this.email = ''
      this.phoneNumber = '',
      this.message = '',
      this.errors.name = null
      this.errors.email = null
      this.errors.phoneNumber = null
      this.errors.message = null
    }
  },
});