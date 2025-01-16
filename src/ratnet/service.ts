import { QueryResult, Node } from "../types/types";

class RatNet {
  private userId: string;
  private otherData: any;
  private cachedData: any;

  constructor(userId: string, otherData: any, cachedData: any = {}) {
    this.userId = userId;
    this.otherData = otherData;
    this.cachedData = cachedData;
  }

  async operate(input: {
    serviceId: string;
    serviceType: string;
    metadata: any;
  }): Promise<QueryResult> {
    try {
      const { serviceId, serviceType, metadata } = input;

      // Services are stored as nodes of procedure and required data|in:out
      // get the service node{object} and its details such as api and metadata
      console.log(
        await this.getClientServices(serviceId, serviceType, metadata)
      );

      // check what i have: and what i'm missing from the current request

      // iterate to check for that service what am i missing ....
      //  and what services i have subscribed
      //   ::::: fetch services i can just use,
      //  even if user didn't subscribe
      // | the service is as third party provider
      //  if not can we bypass the requirements
      // return to parent call and  give the needed paremeters | requrement data

      //if everything is on there ....run the intended operation

      return { id: "", data: "" };
    } catch (error) {
      console.log(error);

      throw new Error("Error in service operation: ");
    }
  }

  async queryList(input: {
    serviceId: string;
    serviceType: string;
    metadata: any;
  }): Promise<QueryResult[]> {
    try {
      const { serviceId, serviceType, metadata } = input;

      return [
        { id: "", data: "" },
        { id: "", data: "" },
      ];
    } catch (error) {
      console.log(error);

      throw new Error("Error in service operation: ");
    }
  }

  async queryItem(input: {
    serviceId: string;
    serviceType: string;
    metadata: any;
  }): Promise<QueryResult> {
    try {
      const { serviceId, serviceType, metadata } = input;

      return { id: "", data: "" };
    } catch (error) {
      console.log(error);

      throw new Error("Error in service operation: ");
    }
  }

  // Method to get a graph of clientServices
  private async getClientServices(
    serviceId: string,
    serviceType: string,
    metadata: any
  ): Promise<Node> {
    // Hardcoded Graph as a constant
    const graph: Node = {
      id: "root",
      label: "Root Node",
      children: [
        {
          id: "service1",
          label: "Service 1",
          children: [
            {
              id: "operation1",
              label: "Operation 1",
              children: [],
            },
            {
              id: "operation2",
              label: "Operation 2",
              children: [],
            },
          ],
        },
        {
          id: "service2",
          label: "Service 2",
          children: [
            {
              id: "operation3",
              label: "Operation 3",
              children: [],
            },
          ],
        },
      ],
    };

    // Example usage: Accessing the graph
    console.log(JSON.stringify(graph, null, 2));

    console.log("Processing unit:", this.userId);
    return graph;
  }
}

export default RatNet;
