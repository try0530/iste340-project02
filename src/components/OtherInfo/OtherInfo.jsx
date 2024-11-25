import { TabPane, Tab } from "semantic-ui-react";

// subsections
import Resources from "../Resources/Resources";
import Researches from "../Researches/Researches";
import News from "../News/News";

const OtherInfo = () => {
  // tab settings
  const panes = [
    {
      menuItem: "Student Resources",
      render: () => <TabPane attached={false}>{<Resources />}</TabPane>,
    },
    {
      menuItem: "Researches",
      render: () => <TabPane attached={false}>{<Researches />}</TabPane>,
    },
    {
      menuItem: "News",
      render: () => <TabPane attached={false}>{<News />}</TabPane>,
    },
  ];
  return (
    <div className="otherinfo-div section-div" id="otherinfo-id">
      <h2>Other Informations</h2>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
};

export default OtherInfo;
