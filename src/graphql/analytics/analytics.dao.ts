interface IAnalyticsDao {
  getAnalytics(filter_object: Record<string, unknown>);
}

class AnalyticsDao implements IAnalyticsDao {
  getAnalytics(filter_object: Record<string, unknown>) {}
}
