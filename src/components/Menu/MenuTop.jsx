import { useState, useEffect } from "react";
import { MenuItem, Menu } from "semantic-ui-react";
import { Link } from "react-scroll";

const MenuTop = () => {
  const [activeItem, setActiveItem] = useState("about");
  // to know whether the menuItem is click or by scrolling
  const [isClicking, setIsClicking] = useState(false);

  function handleItemClick(type) {
    setActiveItem(type);
    setIsClicking(true);
  }

  // to listen the scrolling so that it can change the manu automatically
  useEffect(() => {
    // if the menuitem is click, then don't run the scrolling listening
    if (isClicking) {
      // Use a timeout to delay reset of isClicking
      const timeoutId = setTimeout(() => setIsClicking(false), 500);
      return () => clearTimeout(timeoutId);
    }

    const handleScroll = () => {
      // data of every section of menu
      const sections = [
        { name: "about", element: document.getElementById("about-id") },
        { name: "degrees", element: document.getElementById("degrees-id") },
        { name: "minors", element: document.getElementById("minors-id") },
        {
          name: "employment",
          element: document.getElementById("employment-id"),
        },
        { name: "people", element: document.getElementById("people-id") },
        { name: "other", element: document.getElementById("otherinfo-id") },
      ];

      // const scrollPosition = window.scrollY + window.innerHeight / 3;
      const scrollPosition = window.scrollY + window.innerHeight / 5;

      // to know which section the user is now
      for (let section of sections) {
        // when the user scroll to the section, set the activeItem
        if (
          section.element &&
          section.element.offsetTop <= scrollPosition &&
          section.element.offsetTop + section.element.offsetHeight >
            scrollPosition
        ) {
          setActiveItem(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClicking]);

  return (
    <Menu widths={6}>
      <MenuItem
        as={Link}
        to="about-id"
        smooth={true}
        duration={500}
        name="about"
        active={activeItem === "about"}
        onClick={() => {
          handleItemClick("about");
        }}
        style={{ color: activeItem === "about" ? "#F76902" : "" }}
      />

      <MenuItem
        as={Link}
        to="degrees-id"
        smooth={true}
        duration={500}
        name="degrees"
        active={activeItem === "degrees"}
        onClick={() => {
          handleItemClick("degrees");
        }}
        style={{ color: activeItem === "degrees" ? "#F76902" : "" }}
      />

      <MenuItem
        as={Link}
        to="minors-id"
        smooth={true}
        duration={500}
        name="minors"
        active={activeItem === "minors"}
        onClick={() => {
          handleItemClick("minors");
        }}
        style={{ color: activeItem === "minors" ? "#F76902" : "" }}
      />

      <MenuItem
        as={Link}
        to="employment-id"
        smooth={true}
        duration={500}
        name="employment"
        active={activeItem === "employment"}
        onClick={() => {
          handleItemClick("employment");
        }}
        style={{ color: activeItem === "employment" ? "#F76902" : "" }}
      />

      <MenuItem
        as={Link}
        to="people-id"
        smooth={true}
        duration={500}
        name="people"
        active={activeItem === "people"}
        onClick={() => {
          handleItemClick("people");
        }}
        style={{ color: activeItem === "people" ? "#F76902" : "" }}
      />

      <MenuItem
        as={Link}
        to="otherinfo-id"
        smooth={true}
        duration={500}
        name="other"
        active={activeItem === "other"}
        onClick={() => {
          handleItemClick("other");
        }}
        style={{ color: activeItem === "other" ? "#F76902" : "" }}
      />
    </Menu>
  );
};

export default MenuTop;
