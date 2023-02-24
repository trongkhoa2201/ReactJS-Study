import React from 'react'
import Alert from 'react-bootstrap/Alert';

const AlertComponent = () => {
  return (
    <div class="alert alert-warning" role="alert">
        <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."></Alert>
        <p>Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.</p>
    </div>
  )
}

export default AlertComponent