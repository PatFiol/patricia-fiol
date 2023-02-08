<?ph

if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "contact@patriciafiol.com";
  $subject = "From website"
  $headers = "From: ".$mailFrom;
  $txt = "Through the contact-form from: .$name\n E-Mail: .$email\n Message:\n .$message";

  mail($mailTo, $subject, $txt, $headers);

  echo `<span id="success">Message sent. Thank you!</span>`

}

?>