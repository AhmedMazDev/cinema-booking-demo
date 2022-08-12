import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [isDashboard, setIsDashboard] = useState<boolean>(false);
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    console.log("rows and columns : ", rows, "   ", columns);
  }, [rows, columns]);

  return (
    <Dashboard
      columns={columns}
      rows={rows}
      setColumns={setColumns}
      setRows={setRows}
    />
  );
}

export default App;
