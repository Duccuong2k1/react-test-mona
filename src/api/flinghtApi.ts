import axiosClient from "@/lib/axios/axios-client";

const flightApi =  {
    getFlights(dataRequest:any) {
        return axiosClient.post("/graphql", {
            query: `
                query {
                   ${dataRequest}
                }
            `,
          });
      
      
      },
}

export default flightApi;