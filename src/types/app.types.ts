//service input result requirements
export interface InParameter {
  type: string;
  name: string;
}

//service ouput result requirements
export interface OutParameter {
  dataType: string;
  name: string;
}

// Interface for a single Node in the Graph
export interface Node {
  name: string;
  serviceId: string;
  protocolType: string;
  inputsRequirements: InParameter[];
  outputRequirements: OutParameter[];
  children: Node[];
}
