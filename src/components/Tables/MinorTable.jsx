import {
  HeaderSubheader,
  HeaderContent,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Header,
  Table,
} from "semantic-ui-react";

import Email from "@mui/icons-material/Email";

const MinorTable = ({ data }) => {
  return (
    <Table basic="very" celled collapsing size="small" selectable>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((person, i) => (
          <TableRow key={i}>
            <TableCell>
              <Header as="h4" image>
                <HeaderContent>
                  {person.advisor}
                  <HeaderSubheader>{person.title}</HeaderSubheader>
                </HeaderContent>
              </Header>
            </TableCell>
            <TableCell>
              <a href={person.email} target="_blank" className="advisor-email">
                <Email /> {person.email}
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MinorTable;
