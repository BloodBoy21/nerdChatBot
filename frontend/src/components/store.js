import { writable } from 'svelte/store'
export let storeFE = writable({})

export const userMessage = (text) => {
  return {
    name: 'You',
    text,
    side: 'right'
  }
}
export const botMessage = (text) => {
  return {
    name: 'Bot',
    text,
    side: 'left'
  }
}
