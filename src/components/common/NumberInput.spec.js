import { mount } from '@vue/test-utils'
import NumberInput from './NumberInput.vue'
import Validators from '../../helpers/validation.helpers';
import Format from '../../helpers/format.helpers';

describe('NumberInput', () => {
  it('sets props.value when passed', done => {
    const value = 15000;
    const wrapper = mount(NumberInput, {
      propsData: { value }
    });

    const input = wrapper.find('input').element;

    expect(wrapper.vm.model).toBe(value);
    expect(wrapper.vm.displayValue).toBe(value);

    wrapper.vm.$nextTick(() => {
      expect(input.value).toBe(value.toString());
      done();
    })
  });

  it('renders props.title when passed', () => {
    const title = "First Name";
    const wrapper = mount(NumberInput, {
      propsData: { title }
    });

    expect(wrapper.find('.form-control-title').text()).toBe(title);
  });

  it('renders props.placeholder when passed', done => {
    const placeholder = "e.g. Some Placeholder";
    const wrapper = mount(NumberInput, {
      propsData: { placeholder }
    });

    const input = wrapper.find('input').element;
    
    wrapper.vm.$nextTick(() => {
      expect(input.placeholder).toBe(placeholder);
      done();
    })
  });

  it('sets props.rules and validates with it when passed', done => {
    const message = 'Required';
    const rules = [value => Validators.required(value) || message];
    const wrapper = mount(NumberInput, {
      propsData: {
        value: '',
        rules
      }
    });

    expect(wrapper.vm.valid).toBe(true);
    expect(wrapper.vm.error).toBe(null);

    wrapper.vm.validate();

    expect(wrapper.vm.valid).toBe(false);
    expect(wrapper.vm.error).toBe(message);
    
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.form-control-error').exists()).toBeTruthy();
      expect(wrapper.find('.form-control-error').text()).toBe(message);
      done();
    });
  });

  it('sets props.format and formats with it when passed', done => {
    const value = 15000;
    const format = Format.currency
    const wrapper = mount(NumberInput, {
      propsData: {
        format,
        value
      }
    });

    const input = wrapper.find('input').element;

    expect(wrapper.vm.displayValue).toBe(format(value));

    wrapper.vm.$nextTick(() => {
      expect(input.value).toBe(format(value));
      done();
    });
  });

  it('valiates input when blured or changed after blur', () => {
    const wrapper = mount(NumberInput, {});
    const validateSpy = jest.spyOn(wrapper.vm, 'validate');
    const input = wrapper.find('input');

    input.trigger('focus');

    expect(validateSpy).toHaveBeenCalledTimes(0);

    input.setValue('hello');
    input.setValue('');

    expect(validateSpy).toHaveBeenCalledTimes(0);

    input.trigger('blur');

    expect(validateSpy).toHaveBeenCalledTimes(1);

    input.setValue('hello');
    input.setValue('');

    expect(validateSpy).toHaveBeenCalledTimes(3);
  });
});