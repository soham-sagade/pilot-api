import { NetworkDao } from "./network.dao";
import { Network } from "./network.model";

export const networkQueries = {
  getAllNetworks: async (parent, args, context, info) => {
    try {
      const filterData = args.filterObject;
      const dao = new NetworkDao();
      const networks: Network[] = await dao.getAllNetworks(filterData);
      return networks;
    } catch (error) {
      console.log(error);
    }
  },
};
