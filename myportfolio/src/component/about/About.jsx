import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h1>ABOUT ME</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        explicabo eos facilis odio totam nemo at placeat animi quibusdam nisi!
        Commodi labore neque nostrum, fugiat delectus deserunt laboriosam
        deleniti voluptas quas accusantium at consectetur autem vitae voluptate
        qui earum dolorem id nihil nobis praesentium dignissimos.
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        deleniti sit modi! Dolores vero quos natus molestiae adipisci ipsam nam
        repellendus, exercitationem, fugit nemo facilis sequi magni officiis
        quis nisi. Accusamus velit accusantium impedit!
      </p>
      <form action="post">
      <h1>Lets CONNECT</h1>
        <div className="contact">
          <label htmlFor="name">
            <p>Name :</p>
            <input type="text" placeholder="your name.." />{" "}
          </label>

          <label htmlFor="email">
            <p>Email-Id :</p>
            <input type="email" placeholder="your name.." />
          </label>

          <label htmlFor="name">
            <p>Phone No :</p>
            <input type="number" placeholder="your name.." />{" "}
          </label>

          <label htmlFor="message">
            <p>Message : </p>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </label>
          <div className="button">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
