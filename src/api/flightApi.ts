import axiosClient from "@/lib/axios/axios-client";

const flightApi =  {
    getFlights(queryRequest:any) {
        return axiosClient.post("/graphql", {
            query: `
                query {
                   ${queryRequest}
                }
            `,
          });
      
      
      },
}

export default flightApi;