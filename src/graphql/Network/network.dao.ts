import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { Network } from "../Network/network.model";

interface INetworkDao {
  getAllNetworks(filter_object: Record<string, unknown>): Promise<Network[]>;
}

export class NetworkDao implements INetworkDao {
  private pg: IDBOperations;

  constructor() {
    this.pg = new DBOperations();
  }

  getAllNetworks(filter_object: Record<string, unknown>): Promise<Network[]> {
    try {
      const { user_id }: Record<string, any> = filter_object;
      return this.pg.getNetworks(user_id);
    } catch (error) {
      console.log(error);
    }
  }
}
