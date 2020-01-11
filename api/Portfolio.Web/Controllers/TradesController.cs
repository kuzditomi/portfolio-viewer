using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Web.Data;
using Portfolio.Web.ViewModels;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Web.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]

    public class TradesController : BaseController
    {
        private readonly ApplicationDbContext _dbContext;

        public TradesController(ApplicationDbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> AddTrades(AddTradeViewModel tradeToAdd)
        {
            if (tradeToAdd.SkipDuplicate)
            {
                var existingTrade = await _dbContext.Trades.SingleOrDefaultAsync(trade => trade.Raw == tradeToAdd.Raw);
                if (existingTrade != null)
                {
                    return Ok();
                }
            }

            var trade = new Trade
            {
                Id = Guid.NewGuid().ToString(),
                Raw = tradeToAdd.Raw,
                UserId = GetUserId()
            };

            this._dbContext.Trades.Add(trade);
            await this._dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAllTrades()
        {
            var userId = this.GetUserId();
            var trades = await _dbContext.Trades
                .Where(r => r.UserId == userId)
                .ToListAsync();

            var vm = trades.Select(t => TradeViewModel.FromDataModel(t)).ToList();

            return Ok(vm);
        }

        [HttpDelete]
        [Route("")]
        public async Task<IActionResult> DeleteTrade([FromQuery]string[] ids)
        {
            var userId = this.GetUserId();
            var trades = await _dbContext.Trades
                .Where(trade => ids.Contains(trade.Id))
                .ToListAsync();

            if (trades.Count != ids.Length)
            {
                return NotFound();
            }

            if (trades.Any(trade => trade.UserId != userId))
            {
                return Forbid();
            }

            _dbContext.Trades.RemoveRange(trades);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

    }
}
