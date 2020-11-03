import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/assets/css/material-kit.min.css?v=2.2.0" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="assets/js/core/jquery.min.js" type="text/javascript"></script>
          <script src="assets/js/core/popper.min.js" type="text/javascript"></script>
          <script src="assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
          <script src="assets/js/plugins/moment.min.js"></script>
          <script src="assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
          <script src="assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
          <script src="assets/js/plugins/bootstrap-tagsinput.js"></script>
          <script src="assets/js/plugins/bootstrap-selectpicker.js" type="text/javascript"></script>
          <script src="assets/js/plugins/jasny-bootstrap.min.js" type="text/javascript"></script>
          <script async defer src="https://buttons.github.io/buttons.js"></script>
          <script src="assets/js/material-kit.js?v=2.2.0" type="text/javascript"></script>
        </body>
      </Html>
    )
  }
}
