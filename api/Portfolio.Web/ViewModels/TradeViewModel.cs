using Portfolio.Web.Data;

namespace Portfolio.Web.ViewModels
{
    public class TradeViewModel
    {
        private TradeViewModel(string id, string raw)
        {
            this.Id = id;
            this.Raw = raw;
        }

        public string Id { get; }
        public string Raw { get; }

        public static TradeViewModel FromDataModel(Trade tradeDataModel)
        {
            return new TradeViewModel(tradeDataModel.Id, tradeDataModel.Raw);
        }
    }
}
