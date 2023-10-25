interface IAnalyticsController {
  getAnalyticsData(filters_object: Record<string, unknown>): any;
}

export class AnalyticsController implements IAnalyticsController {
  getAnalyticsData(filters_object: Record<string, unknown>): any {}
}


