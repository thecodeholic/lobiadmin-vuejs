<template>
  <div>
    <div class="callout callout-info">
      <p>FullCalendar is a jQuery plugin that provides a full-sized, drag & drop event calendar like the one below.
        It uses AJAX to fetch events on-the-fly and is easily configured to use your own feed format.
        It is visually customizable with a rich API.
        <a href="http://fullcalendar.io/" target="_blank">Read more...</a>
      </p>
    </div>
    <div class="callout callout-info">
      <ul>
        <li>Click on the event to show edit window.</li>
        <li>Click on empty space to create new event.</li>
      </ul>
    </div>
    <div class="panel panel-light">
      <div class="panel-heading">
        <div class="panel-title">
          <h4>Events calendar</h4>
        </div>
      </div>
      <div class="panel-body">
        <full-calendar :events="events" :config="config"></full-calendar>
      </div>
    </div>
    <event-edit-dialog @modalHidden="modalHidden" :event-details="myEventDetails" :opened="showEventEditorDialog"></event-edit-dialog>
  </div>
</template>

<script>
import EventEditDialog from './components/EventEditDialog'

export default {
  name: "Calendar",
  components: {
    EventEditDialog
  },
  data () {
    return {
      showEventEditorDialog: false,
      eventDetails: {allDay: true},
      events: [
        {
          title: 'All Day Event',
          start: '2018-05-01'
        },
        {
          title: 'Long Event',
          start: '2018-05-07',
          end: '2018-05-10',
          className: 'bg-success border-transparent'

        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-05-09T16:00:00',
          description: 'Repeating event description',
          className: 'bg-danger border-transparent'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-05-16T16:00:00',
          description: 'Repeating event description',
          className: 'bg-danger border-transparent'
        },
        {
          title: 'Conference',
          start: '2018-05-11',
          end: '2018-05-13',
          description: 'Description will held in hole',
          className: 'bg-purple border-transparent'
        },
        {
          title: 'Meeting',
          start: '2018-05-12T10:30:00',
          end: '2018-05-12T12:30:00',
          className: 'bg-info border-transparent'
        },
        {
          title: 'Lunch',
          start: '2018-05-12T12:00:00',
          description: 'The lunch will be at corner cafe'
        },
        {
          title: 'Meeting',
          start: '2018-05-12T14:30:00',
          className: 'bg-purple border-transparent'
        },
        {
          title: 'Happy Hour',
          start: '2018-05-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-05-12T20:00:00',
          className: 'bg-warning border-transparent'
        },
        {
          title: 'Birthday Party',
          start: '2018-05-13T07:00:00',
          className: 'bg-warning border-transparent'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-05-28'
        }
      ],
      config: {
        dayClick: (date, jsEvent, view) => {
          this.eventDetails.start = date
          this.showEventEditorDialog = true
        },
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2018-05-16',
        editable: true,
        droppable: true,
        eventLimit: true,
        businessHours: true,
        buttons: false,
        defaultView: 'month',
        eventRender: function (event, element, view) {
          if (event.description) {
            element.append('<span class="fc-description">' + event.description + '</span>')
          }
        }
      }
    }
  },
  computed: {
    myEventDetails () {
      return Object.assign({}, this.eventDetails)
    }
  },
  methods: {
    modalHidden () {
      this.showEventEditorDialog = false
    }
  },
  mounted () {
    this.$watch('this.eventDetails', eventDetails => {
      console.log("CHAAAAAAAAAAAAAAAnge")
    }, {immediate: true})
  }
}
</script>

<style scoped lang="scss">

</style>
