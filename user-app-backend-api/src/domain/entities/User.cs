using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace src.domain.entities
{
  
    public class User
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }  
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
