import "./icons.css";


const Nav = ({ homeRef, achievementsRef, aboutRef }) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    
    <div className="nav">

      {/* home-icon  */}
      <svg
        onClick={() => scrollToSection(homeRef)}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="40"
        fill="black"
        className="bi bi-house"
        viewBox="0 0 16 16"
        // onClick={() => scrollToSection("homeref")}
      >
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
      </svg>

      {/* acheivements icons  */}
      <svg
        onClick={() => scrollToSection(achievementsRef)}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="40"
        fill="black"
        className="bi bi-award-fill"
        viewBox="0 0 16 16"
        // onClick={() => scrollToSection("acheivementref")}
          
        >
        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
      </svg>

      {/* porfile-icons  */}
      <svg
        onClick={() => scrollToSection(aboutRef)}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="40"
        fill="black"
        className="bi bi-person-fill"
        viewBox="0 0 16 16"
        // onClick={() => scrollToSection("aboutref")}
        
      >
        <span className="tooltip">profile</span>
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </svg>

    </div>
  );
// };
}

export default Nav;
