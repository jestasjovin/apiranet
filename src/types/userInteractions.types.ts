// output from the api endpoint : Queries
export interface QueryResult {
  status: boolean;
  data: any;  //can be any since each service has  their own
}
// output from the api endpoint : Mutation
export interface MutateResult {
  status: boolean;
  data: any;  //can be any since each service has  their own
}

// input to the api endpoint
export interface UserInput {
  userId: string;
  platformId: string;
  serviceId: string;
  data: any;
}

