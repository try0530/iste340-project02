import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import getData from "../../utils/getData";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ProfessionalTable from "../Tables/ProfessionalTable";
import MinorTable from "../Tables/MinorTable";

import "./resources.css";

import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";

const Resources = () => {
  const [loaded, setLoaded] = useState(false);
  const [resourcesData, setResourcesData] = useState();

  const [clickAccordion, setClickAccordion] = useState("");
  const [enrollmentInfo, setEnrollmentInfo] = useState("");
  const [advising, setAdvising] = useState("");
  const [ambassadors, setAmbassadors] = useState("");

  // get the resources data
  useEffect(() => {
    getData("resources/").then((json) => {
      setLoaded(true);
      setResourcesData(json);
    });
  }, []);

  // handle when accordion clicked
  function handleAccordionClick(name) {
    if (clickAccordion === name) {
      setClickAccordion("");
    } else {
      setClickAccordion(name);
    }
  }

  // handle when enrollment info clicked
  function handleEnrollmentInfoClick(name) {
    if (enrollmentInfo === name) {
      setEnrollmentInfo("");
    } else {
      setEnrollmentInfo(name);
    }
  }

  // handle when advising subtitle clicked
  function handleAdvisingClick(name) {
    if (advising === name) {
      setAdvising("");
    } else {
      setAdvising(name);
    }
  }

  // handle when ambassador clicked
  function handleAmbassadorClick(title) {
    if (ambassadors === title) {
      setAmbassadors("");
    } else {
      setAmbassadors(title);
    }
  }

  if (!loaded) {
    return (
      <div className="resources-div section-dvi">
        <Loading type="Student Resources" />
      </div>
    );
  }
  return (
    <div className="resources-div section-div" id="resources-id">
      <h2>{resourcesData.title}</h2>
      <h3>{resourcesData.subTitle}</h3>
      <div className="resources-categories">
        {/* study abroad */}
        <Accordion fluid styled>
          <AccordionTitle
            active={clickAccordion === "studyabroad"}
            onClick={() => handleAccordionClick("studyabroad")}
          >
            {resourcesData.studyAbroad.title}
            <Icon name="dropdown" />
          </AccordionTitle>
          <AccordionContent active={clickAccordion === "studyabroad"}>
            <div className="studyabroad-div">
              <p>{resourcesData.studyAbroad.description}</p>
              <h5>Places</h5>
              <div className="places-div">
                {resourcesData.studyAbroad.places.map((place, i) => (
                  <Card sx={{ minWidth: 260 }} key={i} className="place-card">
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {place.nameOfPlace}
                      </Typography>
                      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                        {place.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AccordionContent>
        </Accordion>

        {/* student services */}
        <Accordion fluid styled>
          <AccordionTitle
            active={clickAccordion === "studentservices"}
            onClick={() => handleAccordionClick("studentservices")}
          >
            {resourcesData.studentServices.title}
            <Icon name="dropdown" />
          </AccordionTitle>

          <AccordionContent active={clickAccordion === "studentservices"}>
            <div className="studentservices-div">
              {/* academic advisors */}

              <Accordion fluid styled>
                {/* Academic Advisors */}
                <AccordionTitle
                  active={advising === "acdamic"}
                  onClick={() => handleAdvisingClick("acdamic")}
                >
                  {resourcesData.studentServices.academicAdvisors.title}
                  <Icon name="dropdown" />
                </AccordionTitle>
                <AccordionContent
                  active={advising === "acdamic"}
                  onClick={() => handleAdvisingClick("acdamic")}
                >
                  <p>
                    {resourcesData.studentServices.academicAdvisors.description}
                  </p>
                  <a
                    href={
                      resourcesData.studentServices.academicAdvisors.faq
                        .contentHref
                    }
                    target="_blank"
                  >
                    {resourcesData.studentServices.academicAdvisors.faq.title}
                  </a>
                </AccordionContent>

                {/* Professional Advisors */}
                <AccordionTitle
                  active={advising === "professional"}
                  onClick={() => handleAdvisingClick("professional")}
                >
                  {resourcesData.studentServices.professonalAdvisors.title}
                  <Icon name="dropdown" />
                </AccordionTitle>
                <AccordionContent
                  active={advising === "professional"}
                  onClick={() => handleAdvisingClick("professional")}
                >
                  <ProfessionalTable
                    className="advisors-info"
                    data={
                      resourcesData.studentServices.professonalAdvisors
                        .advisorInformation
                    }
                  />
                </AccordionContent>

                {/* Faculty Advisors */}
                <AccordionTitle
                  active={advising === "faculty"}
                  onClick={() => handleAdvisingClick("faculty")}
                >
                  {resourcesData.studentServices.facultyAdvisors.title}
                  <Icon name="dropdown" />
                </AccordionTitle>
                <AccordionContent
                  active={advising === "faculty"}
                  onClick={() => handleAdvisingClick("faculty")}
                >
                  <p>
                    {resourcesData.studentServices.facultyAdvisors.description}
                  </p>
                </AccordionContent>

                {/* minor advising */}
                <AccordionTitle
                  active={advising === "minor"}
                  onClick={() => handleAdvisingClick("minor")}
                >
                  {resourcesData.studentServices.istMinorAdvising.title}
                  <Icon name="dropdown" />
                </AccordionTitle>
                <AccordionContent
                  active={advising === "minor"}
                  onClick={() => handleAdvisingClick("minor")}
                >
                  <MinorTable
                    data={
                      resourcesData.studentServices.istMinorAdvising
                        .minorAdvisorInformation
                    }
                  />
                </AccordionContent>
              </Accordion>
            </div>
          </AccordionContent>
        </Accordion>

        {/* tutors and lab information */}
        <Accordion fluid styled>
          <AccordionTitle
            active={clickAccordion === "tutorslab"}
            onClick={() => handleAccordionClick("tutorslab")}
          >
            {resourcesData.tutorsAndLabInformation.title}
            <Icon name="dropdown" />
          </AccordionTitle>

          <AccordionContent active={clickAccordion === "tutorslab"}>
            <div className="tutorslab-div">
              <p>{resourcesData.tutorsAndLabInformation.description}</p>
              <a
                href={
                  resourcesData.tutorsAndLabInformation.tutoringLabHoursLink
                }
              >
                {resourcesData.tutorsAndLabInformation.tutoringLabHoursLink}
              </a>
            </div>
          </AccordionContent>
        </Accordion>

        {/* student ambassadors */}
        <Accordion fluid styled>
          <AccordionTitle
            active={clickAccordion === "studentambassadors"}
            onClick={() => handleAccordionClick("studentambassadors")}
          >
            {resourcesData.studentAmbassadors.title}
            <Icon name="dropdown" />
          </AccordionTitle>
          <AccordionContent active={clickAccordion === "studentambassadors"}>
            <div className="student-ambassadors-div">
              <img
                src={resourcesData.studentAmbassadors.ambassadorsImageSource}
                alt="ambassadors image"
              />
              <Accordion fluid styled>
                {resourcesData.studentAmbassadors.subSectionContent.map(
                  (subsection) => (
                    <>
                      <AccordionTitle
                        active={ambassadors === subsection.title}
                        onClick={() => handleAmbassadorClick(subsection.title)}
                      >
                        {subsection.title}
                        <Icon name="dropdown" />
                      </AccordionTitle>
                      <AccordionContent
                        active={ambassadors === subsection.title}
                        onClick={() => handleAmbassadorClick(subsection.title)}
                      >
                        <p>{subsection.description}</p>
                        <a
                          href={
                            resourcesData.studentAmbassadors.applicationFormLink
                          }
                          target="_blank"
                        >
                          Application Link
                        </a>
                      </AccordionContent>
                    </>
                  )
                )}
              </Accordion>

              <p className="ambassadors-note">
                {resourcesData.studentAmbassadors.note}
              </p>
            </div>
          </AccordionContent>
        </Accordion>

        {/* forms */}
        <Accordion fluid styled>
          <AccordionTitle
            active={clickAccordion === "forms"}
            onClick={() => handleAccordionClick("forms")}
          >
            {Object.keys(resourcesData)[6]}
            <Icon name="dropdown" />
          </AccordionTitle>
          <AccordionContent active={clickAccordion === "forms"}>
            <div className="forms-div">
              <ul>
                {Object.entries(resourcesData.forms).map(([key, value], i) => (
                  <li key={i} className="forms-list">
                    <h5>{key}</h5>
                    <div className="category-forms-div">
                      {value.map((form, i) => (
                        <a key={i} href={form.href} target="_blank">
                          {form.formName}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </Accordion>

        {/* coop enrollment */}
        <Accordion fluid styled>
          <AccordionTitle
            active={clickAccordion === "coopenrollment"}
            onClick={() => handleAccordionClick("coopenrollment")}
          >
            {resourcesData.coopEnrollment.title}
            <Icon name="dropdown" />
          </AccordionTitle>
          <AccordionContent active={clickAccordion === "coopenrollment"}>
            <div className="coop-enrollment-div">
              <div className="enrollment-info-div">
                <h5>Enrollment Information</h5>
                <Accordion fluid styled>
                  {resourcesData.coopEnrollment.enrollmentInformationContent.map(
                    (info) => (
                      <>
                        <AccordionTitle
                          active={enrollmentInfo === info.title}
                          onClick={() => handleEnrollmentInfoClick(info.title)}
                        >
                          {info.title}
                          <Icon name="dropdown" />
                        </AccordionTitle>
                        <AccordionContent
                          active={enrollmentInfo === info.title}
                          onClick={() => handleEnrollmentInfoClick(info.title)}
                        >
                          {info.description}
                        </AccordionContent>
                      </>
                    )
                  )}
                </Accordion>
              </div>
              <a
                href={resourcesData.coopEnrollment.RITJobZoneGuidelink}
                target="_blank"
              >
                RIT Job Zone Guide
              </a>
            </div>
          </AccordionContent>
        </Accordion>
      </div>
    </div>
  );
};

export default Resources;
