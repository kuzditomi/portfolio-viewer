using System.ComponentModel.DataAnnotations;

namespace Portfolio.Web.Data
{
    public class Trade
    {
        [Key]
        public string Id { get; set; }
        public string UserId { get; set; }
        public string Raw { get; set; }
    }
}
