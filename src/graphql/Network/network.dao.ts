import { Network } from "../Network/network.model";

interface INetworkDao {
  getNetworkData(filter_object: Record<string, unknown>): Network;
}

export class NetworkDao implements INetworkDao {
  getNetworkData(filter_object: Record<string, unknown>): any {}
}
