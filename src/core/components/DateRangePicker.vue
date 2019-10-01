<template>
  <input :name="name" :class="classes" :value="value">
</template>

<script>
import {convertToUserDate} from '../services/date.service'

export default {
  name: "DateRangePicker",
  props: {
    name: String,
    classes: [String, Array],
    value: [String, Number, Date, Object],
    config: {
      type: Object,
      required: true
    }
  },
  watch: {
    config: {
      handler () {
        this.initDatepicker()
      },
      deep: true
    }
  },
  methods: {
    initDatepicker () {
      if (!this.config.singleDatePicker) {
        this.config.timePicker = true
        this.config.timePickerIncrement = 10
        this.config.locale = {
          format: 'LLL'
        }
      } else {
        this.config.timePicker = false
        this.config.locale = {
          format: 'LLL'
        }
      }
      $(this.$el).daterangepicker(this.config)
    },
    convertToUserDate (value) {
      return convertToUserDate(value)
    }
  },
  mounted () {
    const me = this
    this.initDatepicker()
    $(this.$el).on('apply.daterangepicker', function (ev, picker) {
      me.$emit('valueChanged', picker.startDate, picker.endDate)
    })
    // input.on('apply.daterangepicker', function(ev, picker) {
    //   self.$emit('daterangechanged',picker);
    // });
  },
  beforeDestroy () {
    $(this.$el).daterangepicker(this.config).remove()
  },
  updated () {
    this.initDatepicker()
  }
}
</script>

<style scoped>

</style>
