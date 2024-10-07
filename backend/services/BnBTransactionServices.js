const axios = require("axios");

exports.fetchBnbTransactions = async () => {
  const data = JSON.stringify({
    query: `
      query {
        EVM(dataset: realtime, network: bsc) {
          Transactions(
            limit: {count: 10}
            orderBy: [{descending: Block_Number}, {descending: Transaction_Index}]
          ) {
            Block {
              Time
              Number
            }
            Transaction {
              Hash
              Cost
            }
          }
        }
      }
    `,
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://streaming.bitquery.io/graphql",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "BQYKtEhPcFTXwMFbjpEZeuxMI3ToHuWL",
      Authorization: "Bearer ory_at_l-z1GV__C9qAEW3bqbKgRyPap-U2UeckP4ifqmI_ATE.gyBXlji81uuZ1y5-7IBJnMvYp-0exSdKS_ISvdHirA8",
    },
    data: data,
  };

  return axios.request(config);
};
