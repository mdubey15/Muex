using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {

        public IActionResult Post()
        {
            //Broadcast the message to all clients
            return Ok();
        }

    }
}