import {
  Table as TableComponent,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface TableProps {
  id: string;
  thead: string[];
  tData: any[];
  children?: React.ReactNode | ((row: any) => React.ReactNode) | any;
}

export const Cell = TableCell;

export function Table({ id, thead, tData, children }: TableProps) {
  return (
    <>
      <TableComponent id={id}>
        <TableHeader>
          <TableRow>
            {thead.map((head, index) => (
              <TableHead key={`th-key-${id}-${index}`}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tData.map((row, index) => (
            <TableRow key={`td-key-${id}-${index}`}>
              {children(row, index)}
            </TableRow>
          ))}
        </TableBody>
      </TableComponent>
    </>
  );
}
