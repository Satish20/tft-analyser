import { mount } from '@vue/test-utils'
import App from './../src/components/App.vue'

describe('AppTest', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})

describe('Mounted AppTest', () => {
  const wrapper = mount(App);

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('button click without correct sum', () => {
    expect(wrapper.vm.message).toBe("")
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.message).toBe('TRY AGAIN')
  })
})