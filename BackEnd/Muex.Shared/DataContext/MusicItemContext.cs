using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Muex.Shared.DataContext
{
    public class MusicItemContext : DbContext
    {
        public MusicItemContext(DbContextOptions<MusicItemContext> dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<MusicItem> MusicItems { get; set; }
    }
}
