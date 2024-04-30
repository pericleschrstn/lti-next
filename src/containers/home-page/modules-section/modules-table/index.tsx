import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { modules } from "../constants";

export default function ModulesTable() {
  return (
    <div className="shadow-xl rounded border z-10 relative bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Módulo</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        {modules.map((m, i) => (
          <TableBody key={i}>
            <TableRow>
              <TableCell className="font-medium">{m.category}</TableCell>
              <TableCell>{m.title}</TableCell>
              <TableCell className="text-right">Concluído</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </div>
  );
}
