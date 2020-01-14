using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Muex.Shared.DataContext
{
    public class AuthenticationContext : DbContext
    {
        public AuthenticationContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }


    }
}
