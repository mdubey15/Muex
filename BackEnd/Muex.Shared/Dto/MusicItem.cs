using System;
using System.ComponentModel.DataAnnotations;

namespace Muex.Shared
{
    public class MusicItem
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }

        public string Band { get; set; }

        public string Medium { get; set; }

        public string  Owner { get; set; }

        public string Genre { get; set; }

        public string OwnerId { get; set; }

    }
}
