using Datr.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Datr.API.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
