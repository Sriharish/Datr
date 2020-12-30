using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Datr.API.DTOs
{
    public class MemberDTO
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl { get; set; }
        public int Age { get; set; }
        public string Handle { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public string Summary { get; set; }
        public string InterestedIn { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<PhotoDTO> Photos { get; set; }
    }
}
