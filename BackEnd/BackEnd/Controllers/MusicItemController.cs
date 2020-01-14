using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Muex.Shared;
using Muex.Shared.DataContext;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class MusicItemController : ControllerBase
    {
        private readonly MusicItemContext context;

        public MusicItemController(MusicItemContext context)
        {
            this.context = context;
        }

        // GET api/values
        [Authorize]
        [HttpGet]
        public IEnumerable<MusicItem> Get()
        {
            var userId = HttpContext.User.Claims.First().Value;

            return context.MusicItems.Where(q => q.OwnerId == userId);
        }


        // POST api/values
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] MusicItem musicItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = HttpContext.User.Claims.First().Value;
            musicItem.OwnerId = userId;
            context.MusicItems.Add(musicItem);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new  {id=musicItem.Id }, musicItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] MusicItem musicItem)
        {
            if (!ModelState.IsValid || id != musicItem.Id)
            {
                return BadRequest();
            }

            context.Entry(musicItem).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(musicItem);
        }
    }
}