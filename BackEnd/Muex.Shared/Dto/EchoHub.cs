
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Muex.Shared.Dto
{
    public class EchoHub : Hub
    {
        public async Task Send(string user,string message)
        {
            await Clients.All.SendAsync("sendMessage",user,message);
            //await Clients.User(user).SendCoreAsync("sendMessage", new object[] { user,message });
        }
    }
}
