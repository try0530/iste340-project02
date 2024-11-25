import { useState, useEffect } from "react";
import { TabPane, Tab } from "semantic-ui-react";

import Loading from "../Loading/Loading";
import getData from "../../utils/getData";
import PersonBlock from "./PersonBlock";
import PagesBotton from "../PagesBotton/PagesBotton";

import "./people.css";
import { Link } from "react-scroll";

const People = () => {
  // store people data and load status
  const [peopleData, setPeopleData] = useState();
  const [loaded, setLoaded] = useState(false);

  // get people data
  useEffect(() => {
    getData("people/").then((json) => {
      setPeopleData(json);
      setLoaded(true);
      setTotalFacultyPages(Math.ceil(json.faculty.length / itemsPerPage));
      setTotalStaffPages(Math.ceil(json.staff.length / itemsPerPage));
      updateCurrentPageData(
        json.faculty,
        json.staff,
        currentFacultyPage,
        currentStaffPage
      );
    });
  }, []);

  // data for change page
  const [currentFacultyPage, setCurrentFacultyPage] = useState(1);
  const [currentStaffPage, setCurrentStaffPage] = useState(1);

  const [currentFaculty, setCurrentFaculty] = useState([]);
  const [currentStaff, setCurrentStaff] = useState([]);
  const [totalFacultyPages, setTotalFacultyPages] = useState(1);
  const [totalStaffPages, setTotalStaffPages] = useState(1);

  // showing how many items in a page
  const itemsPerPage = 8;

  // when pagebutton clicked, change data
  useEffect(() => {
    if (peopleData) {
      updateCurrentPageData(
        peopleData.faculty,
        peopleData.staff,
        currentFacultyPage,
        currentStaffPage
      );
    }
  }, [currentFacultyPage, currentStaffPage, peopleData]);

  // update prev data
  const updateCurrentPageData = (
    facultyData,
    staffData,
    facultyPage,
    staffPage
  ) => {
    const indexOfLastFaculty = facultyPage * itemsPerPage;
    const indexOfFirstFaculty = indexOfLastFaculty - itemsPerPage;
    const indexOfLastStaff = staffPage * itemsPerPage;
    const indexOfFirstStaff = indexOfLastStaff - itemsPerPage;

    setCurrentFaculty(
      facultyData.slice(indexOfFirstFaculty, indexOfLastFaculty)
    );
    setCurrentStaff(staffData.slice(indexOfFirstStaff, indexOfLastStaff));
  };

  // handle faculty page when user click pagesbotton
  function handleFacultyPageChange(data) {
    if (data.target.getAttribute("value")) {
      setCurrentFacultyPage(data.target.getAttribute("value"));
    } else {
      // if user click right button
      if (
        data.target.classList.contains("right") &&
        currentFacultyPage !== totalFacultyPages
      ) {
        setCurrentFacultyPage(currentFacultyPage + 1);
      }

      // if user click left button and the current page is not at 1st page
      if (data.target.classList.contains("left") && currentFacultyPage !== 1) {
        setCurrentFacultyPage(currentFacultyPage - 1);
      }

      // if user click the double right button and the current page is not at the last page
      if (
        data.target.classList.contains("double") &&
        data.target.classList.contains("right") &&
        currentFacultyPage !== totalFacultyPages
      ) {
        setCurrentFacultyPage(totalFacultyPages);
      }

      // if user click the double left page and the current page is not at the first page
      if (
        data.target.classList.contains("double") &&
        data.target.classList.contains("left") &&
        currentFacultyPage !== 1
      ) {
        setCurrentFacultyPage(1);
      }

      // close the Person block before change the page
      handlePersonClose();
    }
  }

  // handle staff page when user click pagesbotton
  function handleStaffPageChange(data) {
    if (data.target.getAttribute("value")) {
      setCurrentStaffPage(data.target.getAttribute("value"));
    } else {
      // if user click right button
      if (
        data.target.classList.contains("right") &&
        currentStaffPage !== totalStaffPages
      ) {
        setCurrentStaffPage(currentStaffPage + 1);
      }

      // if user click left button and the current page is not at 1st page
      if (data.target.classList.contains("left") && currentStaffPage !== 1) {
        setCurrentFacultyPage(currentStaffPage - 1);
      }

      // if user click the double right button and the current page is not at the last page
      if (
        data.target.classList.contains("double") &&
        data.target.classList.contains("right") &&
        currentStaffPage !== totalStaffPages
      ) {
        setCurrentStaffPage(totalStaffPages);
      }

      // if user click the double left page and the current page is not at the first page
      if (
        data.target.classList.contains("double") &&
        data.target.classList.contains("left") &&
        currentStaffPage !== 1
      ) {
        setCurrentStaffPage(1);
      }

      // close the Person block before change the page
      handlePersonClose();
    }
  }

  // for the tab setting
  const panes = [
    {
      menuItem: "Faculty",
      render: () => (
        <TabPane attached={false}>
          {
            <div className="tab-content-div">
              <div className="faculty-block">
                {currentFaculty.map((faculty) => (
                  <PersonBlock
                    person={faculty}
                    key={faculty.username}
                    personClick={personClick}
                    onPersonClick={handlePersonClick}
                    openPerson={openPerson}
                    handlePersonClose={handlePersonClose}
                  />
                ))}
              </div>
              <Link to="people-id" smooth={true} duration={500}>
                <PagesBotton
                  totalPages={totalFacultyPages}
                  handlePageChange={handleFacultyPageChange}
                />
              </Link>
            </div>
          }
        </TabPane>
      ),
    },
    {
      menuItem: "Staff",
      render: () => (
        <TabPane attached={false}>
          {
            <div className="tab-content-div">
              <div className="staff-block">
                {currentStaff.map((staff) => (
                  <PersonBlock
                    person={staff}
                    key={staff.username}
                    personClick={personClick}
                    onPersonClick={handlePersonClick}
                    openPerson={openPerson}
                    handlePersonClose={handlePersonClose}
                  />
                ))}
              </div>
              <Link to="people-id" smooth={true} duration={500}>
                <PagesBotton
                  totalPages={totalStaffPages}
                  handlePageChange={handleStaffPageChange}
                />
              </Link>
            </div>
          }
        </TabPane>
      ),
    },
  ];

  // control which person's detail to pop up
  const [personClick, setPersonClick] = useState("");
  const [openPerson, setOpenPerson] = useState(false);

  function handlePersonClick(username) {
    setPersonClick(username);
    setOpenPerson(true);
  }

  function handlePersonClose() {
    setPersonClick("");
    setOpenPerson(false);
  }

  if (!loaded) {
    return (
      <div className="people-div section-div" id="people-id">
        <Loading type="People" />
      </div>
    );
  }

  return (
    <div className="people-div section-div" id="people-id">
      <h2>{peopleData.title}</h2>
      <h3>{peopleData.subTitle}</h3>
      <div className="members">
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </div>
    </div>
  );
};

export default People;
