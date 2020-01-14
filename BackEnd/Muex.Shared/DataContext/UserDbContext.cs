using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Muex.Shared.Dto;

namespace Muex.Shared.DataContext
{
    public class UserDbContext:IdentityDbContext<IdentityUser>
    {
        public UserDbContext(DbContextOptions<UserDbContext> options):base(options)
        {

        }

        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);
        //    builder.Entity<Message>()
        //        .HasOne<AppUser>(a => a.AppUser)
        //        .WithMany(d => d.Messages)
        //        .HasForeignKey(k => k.UserId);
        //}
    }
}
