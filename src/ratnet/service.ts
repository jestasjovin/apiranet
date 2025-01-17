import {  Node } from "../types/app.types";
import { QueryResult, UserInput } from "../types/userInteractions.types";

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
    metadata: UserInput;
  }): Promise<QueryResult> {
    try {
      const { serviceId, serviceType, metadata } = input;

      // Services are stored as nodes of procedure and required data|in:out

      //get the service id

      //check input requiirements
      //if input requirements fails :::
      // grab the needed requirements
      // identify the services that offer the requiremnts
      //  and what services i have subscribed
      //should be the smallest or easiest....
      //i can map several and choose one with minimum requirements missing

      //structure the graph now  that we will traverse

      //lets start traversing
      // and getting requiremnts to feed each child
      // running the operations as we aren't sure is bad

      // get the service node{object} and its details such as api and metadata
      const d = this.getClientServices(serviceId, serviceType, metadata);

      console.log(d);

      return {
        status: true,
        data: {
          status: true,
          message: "Successfuly",
          paymentId: "c23abd-dajh12-sfdjkfhv3",
        },
      };
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
        { status: true, data: "" },
        { status: true, data: "" },
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

      return { status: true, data: "" };
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
      serviceId: "",
      name: "initial service",
      children: [
        {
          serviceId: "",
          name: "Service 1",
          children: [
            {
              serviceId: "",
              name: "Operation 1",
              children: [],
              inputsRequirements: [],
              outputRequirements: [],
              protocolType: "HTTPS",
            },
            {
              serviceId: "",
              name: "Operation 2",
              children: [],
              inputsRequirements: [],
              outputRequirements: [],
              protocolType: "HTTPS",
            },
          ],
          inputsRequirements: [],
          outputRequirements: [],
          protocolType: "HTTPS",
        },
        {
          serviceId: "",
          name: "Service 2",
          children: [
            {
              serviceId: "",
              name: "Operation 3",
              children: [],
              inputsRequirements: [],
              outputRequirements: [],
              protocolType: "HTTPS",
            },
          ],
          inputsRequirements: [],
          outputRequirements: [],
          protocolType: "HTTPS",
        },
      ],
      inputsRequirements: [],
      outputRequirements: [],
      protocolType: "HTTPS",
    };

    // Example usage: Accessing the graph
    console.log(JSON.stringify(graph, null, 2));

    console.log("Processing unit:", this.userId);
    return graph;
  }
}

export default RatNet;
