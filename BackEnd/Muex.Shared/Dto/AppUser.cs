using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Muex.Shared.Dto
{
    public class AppUser : IdentityUser
    {
        public AppUser()
        {
            Messages = new HashSet<Message>();
        }

        public virtual ICollection<Message> Messages { get; set; }

    }
}
