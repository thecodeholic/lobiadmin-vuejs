<template>
  <modal v-model="modalOpened" @hide="callback" title="Add event" ref="modal">
    <form action>
      <div class="form-group">
        <label class="control-label">Event style</label>
        <div class="btn-group btn-group-justified btn-group-event-style" data-toggle="buttons">
          <label class="btn btn-primary active">
            <input type="radio" name="style" value="bg-primary" checked> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-success text-white">
            <input type="radio" name="style" value="bg-success"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-danger text-white">
            <input type="radio" name="style" value="bg-danger"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-info text-white">
            <input type="radio" name="style" value="bg-info"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-warning text-white">
            <input type="radio" name="style" value="bg-warning"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-gray text-white">
            <input type="radio" name="style" value="bg-gray"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-cyan text-white">
            <input type="radio" name="style" value="bg-cyan"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-purple text-white">
            <input type="radio" name="style" value="bg-purple"> <i class="fa fa-check"></i>
          </label>
          <label class="btn bg-pink text-white">
            <input type="radio" name="style" value="bg-pink"> <i class="fa fa-check"></i>
          </label>
        </div>
      </div>

      <div class="form-group">
        <lobi-date-range-picker
                :value="eventDetails.start"
                @valueChanged="onValueChange"
                name="date_period"
                classes="form-control"
                :config="datePickerConfig"
        ></lobi-date-range-picker>
      </div>
      <div class="form-group">
        <label class="checkbox-inline lobicheck">
          <input type="checkbox" name="allday" v-model="allDay">
          <i></i> All day
        </label>
      </div>
      <div class="form-group">
        <label class="control-label">Event title</label>
        <input type="text" class="form-control" name="title" placeholder="Event title"/>
      </div>
      <div class="form-group">
        <label class="control-label">Event description</label>
        <textarea rows="3" class="form-control" name="desc"></textarea>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: "EventEditDialog",
  components: {
  },
  props: {
    opened: Boolean,
    eventDetails: {
      type: Object,
      required: true,
      default () {
        return {
          allDay: true,
          start: new Date(),
          end: new Date()
        }
      }
    }
  },
  data () {
    const allDay = this.eventDetails.allDay
    return {
      allDay: allDay,
      modalOpened: this.opened,
      datePickerConfig: {
        singleDatePicker: allDay
      }
    }
  },
  watch: {
    opened () {
      this.modalOpened = this.opened
    },
    allDay () {
      this.datePickerConfig.singleDatePicker = this.allDay
    }
  },
  methods: {
    callback () {
      this.$emit('modalHidden', true)
    },
    onValueChange (start, end) {
      this.eventDetails.start = start
      this.eventDetails.end = end
    }
  }
}
</script>

<style scoped>

</style>
