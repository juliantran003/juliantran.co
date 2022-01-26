const About = () => {
  function getAge() {
    var today = new Date();
    var birthDate = new Date("October 22, 1997");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return (
    <div className="container">
      <div className="about">
        <p>
          My name is Julian Tran. I am {getAge()} years old. If you wish to know
          more about my projects or myself, simply navigate through my website.
          If some questions are still left unanswered, you're most welcome to
          contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
