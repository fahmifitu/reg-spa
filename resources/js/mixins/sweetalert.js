import Swal from 'sweetalert2'

export default {
  methods: {
    successAlert({
    	title = "Success!",
    	text = "That's all done!",
    	timer = false,
    	showConfirmationButton = true,
      onClose = () => {}
    } = {}) {
    	Swal.fire({
        onclose: onClose,
        title: title,
        text: text,
        timer: timer,
        showConfirmButton: showConfirmationButton,
        type: 'success'
      })
    },
    errorAlert({
    	title = this.$t('error_alert_title'),
    	text = this.$t('error_alert_text'),
    	timer = false,
    	showConfirmationButton = true,
      onClose = () => {}
    } = {}) {
    	Swal.fire({
          type: 'error',
          title: title,
          text: text,
        timer: timer,
        onclose: onClose,
    	 showConfirmButton: showConfirmationButton,
      })
    }
  }
};
