// Interface for a single Node in the Graph
export interface QueryResult {
  id: string;
  data: string;
}

// Interface for a single Node in the Graph
export interface Node {
  id: string;
  label: string;
  children: Node[];
}
