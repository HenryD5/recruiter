export const Test = () => {
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    console.log('form data',formDatab)
    
    fetch(
      "https://script.google.com/macros/s/AKfycbxxjh21MXThQiIcNTVJUXsOj2Ht7LvfL2RguASLlAssZKgQvksCD2nKYQ7630kfdzEd/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla jS
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
};
