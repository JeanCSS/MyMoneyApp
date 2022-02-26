import React from "react";
import ReduxToastr from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default () => {

  return(
    <ReduxToastr
      timeOut={5000}
      newestOnTop={true}
      preventDuplicates={true}
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastClick
      pauseOnHover
      draggable
      removable
      removeIcon="close"
      titleClass="toast-title"
      messageClass="toast-message"
      progressClass="toast-progress"
    />
  )

}
