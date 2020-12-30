using AutoMapper;
using Datr.API.Data;
using Datr.API.DTOs;
using Datr.API.Entities;
using Datr.API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Datr.API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUsersRepository _usersRepository;
        private readonly IMapper _mapper;
        public UsersController(IUsersRepository usersRepository, IMapper mapper)
        {
            _usersRepository = usersRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDTO>>> GetUsers()
        {
            var users = await _usersRepository.GetMembersAsync();
            return Ok(users);
        }

        //[Authorize]
        //[HttpGet("{id}")]
        //public async Task<ActionResult<AppUser>> GetUser(long id)
        //{
        //    return await _usersRepository.GetUserByIdAsync(id);
        //}

        [Authorize]
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDTO>> GetUserByUserName(string username)
        {
            return await _usersRepository.GetMemberAsync(username);
        }
    }
}
