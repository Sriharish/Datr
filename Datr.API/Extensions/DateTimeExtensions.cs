
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Datr.API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int GetAge(this DateTime dateOfBirth)
        {
            DateTime now = DateTime.Now;
            DateTime birthdayInCurrentYear = new DateTime(dateOfBirth.Year, dateOfBirth.Month, dateOfBirth.Day);
            int age = now.Year - dateOfBirth.Year;

            return now >= birthdayInCurrentYear ? age : age--;
        }
    }
}
