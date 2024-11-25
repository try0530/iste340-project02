# ISTE340 Project02

This website is showing the information
This project using React, MUI, and Semantic React to build

## Libraries that I use

- semantic-ui
  https://react.semantic-ui.com/
  `npm install semantic-ui-react semantic-ui-css`
  `import 'semantic-ui-css/semantic.min.css`

  1. Accordion
  2. Menu
  3. Card
  4. Tab
  5. Pagination
  6. Statistic
  7. Table

- google map api
  https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js#0
  `npm install vis.gl/react-google-maps`

  - using google map api to show the data on the google map by pins.

- react-scroll
  https://www.npmjs.com/package/react-scroll
  `npm install react-scroll`

  1. Link

  - make the menu become link so that user can click the menu to go the the section that they want to visit, also using the smooth setting to let the scrolling smooth.

- mui
  https://mui.com/material-ui/getting-started/installation/
  `npm install @mui/material @emotion/react @emotion/styled`

  1. Dialog
  2. Button
  3. Typography
  4. Icons
  5. Chip
  6. Card

- html-react-parser
  to transfer html string into html
  https://www.npmjs.com/package/html-react-parser
  `npm install html-react-parser`

## About this website and structure

There are 6 sections in this website.

- About
  The basic information about iSchool
- Degree
  The programs and certificates that iSchool provide
  - AccordionDegrees
- Minors
  The minors that iSchool provide
  - AccordionMinors
- Employment
  Information about employers, career, coop ... and more.
  - Introduction
  - DegreeStatistics
  - Employers
  - Careers
  - EmploymentTable
    - EmploymentMap
      - MapComponent
  - CoopTable
    - CoopMap
      - MapComponent
- People
  The faculties and staffs informations
  - PersonBlock
    - DialogPerson
  - PagesBotton
- Other
  Including student resources, researches area, and news.
  - Resources
    - ProfessionalTable
    - MinorTable
  - Researches
    - DialogInterestArea
    - DialogFaculty
  - News
