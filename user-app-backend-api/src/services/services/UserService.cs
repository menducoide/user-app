using System;
using System.Collections.Generic;
using System.Text;
using src.common.DTOS;
using src.common.mappers;
using src.domain.entities;
using src.repository;
using src.services.iServices;

namespace src.services.services
{
    public class UserService :  BaseMapper<UserDTO,User>,IUserService 
    {
  
        private readonly UserRepository userRepository;
        public UserService(UserRepository userRepository)
        {
            this.userRepository = userRepository;            
        }

        public UserDTO Create(UserDTO dto)
        {
            var user = userRepository.Insert(ToEntity(dto));
            dto.UserID = user.UserID;
            return dto;
        }

        public void Edit(UserDTO dto)
        {
            userRepository.Update(ToEntity(dto));
        }

        public UserDTO GetBy(object id)
        {
            return ToDto(userRepository.Find(id));
        }

        public List<UserDTO> List()
        {
            return ToDto(userRepository.FindAll());
        }

        public void Remove(UserDTO dto)
        {
            userRepository.Delete(ToEntity(dto));
        }

        public void Remove(object id)
        {
            userRepository.Delete(id);
        }
    }
}
