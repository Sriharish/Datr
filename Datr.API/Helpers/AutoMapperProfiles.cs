using AutoMapper;
using Datr.API.DTOs;
using Datr.API.Entities;
using Datr.API.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Datr.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDTO>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(user => user.Photos.FirstOrDefault(photo => photo.IsMain).Url))
                .ForMember(dest => dest.Photos, opt => opt.MapFrom(user => user.Photos.Where(photo => photo.AppUserId == user.Id)))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(user => user.DateOfBirth.GetAge()));
            CreateMap<Photo, PhotoDTO>();
        }
    }
}
