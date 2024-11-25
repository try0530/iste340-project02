import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";

const AccordionDegrees = ({
  inputIndex,
  title,
  description,
  concentrations,
  availableCertificates,
  activeIndex,
  handleClick,
}) => {
  return (
    <Accordion styled fluid>
      <AccordionTitle
        active={activeIndex === inputIndex}
        index={inputIndex}
        onClick={() => {
          handleClick(inputIndex);
        }}
      >
        {title}
        <Icon name="dropdown" />
      </AccordionTitle>
      <AccordionContent active={activeIndex === inputIndex}>
        {description ? <p>{description}</p> : null}
        {concentrations ? (
          <div className="concentrations">
            <h5>Concentrations</h5>
            <ul>
              {concentrations.map((concentration, index) => (
                <li
                  key={`${inputIndex}-concentration-${index}`}
                  className="concentration"
                >
                  {concentration}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {availableCertificates ? (
          <ul>
            {availableCertificates.map((certificate, item) => (
              <li key={`${inputIndex}-certificate-${item}`}>{certificate}</li>
            ))}
          </ul>
        ) : null}
      </AccordionContent>
    </Accordion>
  );
};

export default AccordionDegrees;
