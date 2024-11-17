import "./acheive.css";



const Acheivements = () => {
  return (
    <div className="project">
      <div className="heading-tech">
        <h1>PROJECTS</h1>
      </div>
      {/* this is the 1st project  */}
      <div className="p-container">
        <div className="p-img">
          <div className="img-bttn">
          <img src="" alt="" width="100px" height="100px" />
         <button>veiw</button> </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            voluptas! Molestias vitae repellat explicabo? Eaque, dolore! Vel a
            sequi sapiente dolorem, facilis minima aspernatur beatae voluptate
            omnis. Tempora repellat, consectetur eos itaque harum minima sunt
            voluptate iste nostrum cum nulla! Nobis dolor veniam eveniet iure.

          </p>
        </div>
      </div>
      {/* this is the 2nd project  */}
      <div className="p-container">
        <div className="p-img">
          <div className="img-bttn">
          <img src="" alt="" width="100px" height="100px" />
        <button>veiw</button>  </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            voluptas! Molestias vitae repellat explicabo? Eaque, dolore! Vel a
            sequi sapiente dolorem, facilis minima aspernatur beatae voluptate
            omnis. Tempora repellat, consectetur eos itaque harum minima sunt
            voluptate iste nostrum cum nulla! Nobis dolor veniam eveniet iure.

          </p>
        </div>
      </div>
      {/* this is the 3rd project  */}
      <div className="p-container">
        <div className="p-img">
          <div className="img-bttn">
          <img src="" alt="" width="100px" height="100px" />
          <button>veiw</button>  </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            voluptas! Molestias vitae repellat explicabo? Eaque, dolore! Vel a
            sequi sapiente dolorem, facilis minima aspernatur beatae voluptate
            omnis. Tempora repellat, consectetur eos itaque harum minima sunt
            voluptate iste nostrum cum nulla! Nobis dolor veniam eveniet iure.

          </p>
        </div>
      </div>
      {/* this is my 4th project  */}
      <div className="p-container">
        <div className="p-img">
          <div className="img-bttn">
          <img src="" alt="" width="100px" height="100px" />
         <button>veiw</button>  </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            voluptas! Molestias vitae repellat explicabo? Eaque, dolore! Vel a
            sequi sapiente dolorem, facilis minima aspernatur beatae voluptate
            omnis. Tempora repellat, consectetur eos itaque harum minima sunt
            voluptate iste nostrum cum nulla! Nobis dolor veniam eveniet iure.

          </p>
        </div>
      </div>

      {/* this is the technologies i learned  */}
      <div className="heading-tech tech-head">
        <h1>
          TECHNOLOGIES <br />
        </h1>
      </div>
      {/* this is the logos of technologies  */}
      <div className="img">
        <img
          className="HTML"
          src={`${process.env.PUBLIC_URL}/html.jpg`}
          alt="HTML logo"
          width="100px"
          height="100px"
        />
        <img
          className="CSS"
          src={`${process.env.PUBLIC_URL}/css-3.jpg`}
          alt="CSS logo"
          width="100px"
          height="100px"
        />
        <img
          className="js"
          src={`${process.env.PUBLIC_URL}/js.png`}
          alt="JavaScript logo"
          width="100px"
          height="100px"
        />
        <img
          className="JAVA"
          src={`${process.env.PUBLIC_URL}/java.png`}
          alt="CSS logo"
          width="100px"
          height="100px"
        />
        <img
          className="REACT"
          src={`${process.env.PUBLIC_URL}/logo192.png`}
          alt="CSS logo"
          width="100px"
          height="100px"
        />
        <img
          className="FIGMA"
          src={`${process.env.PUBLIC_URL}/figma.png`}
          alt="CSS logo"
          width="100px"
          height="100px"
        />
        <img
          className="BOOT"
          src={`${process.env.PUBLIC_URL}/bootstrap.png`}
          alt="CSS logo"
          width="100px"
          height="100px"
        />
      </div>
    </div>
  );
};

export default Acheivements;
