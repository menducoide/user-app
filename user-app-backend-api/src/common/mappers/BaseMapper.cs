using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;

namespace src.common.mappers
{
    public class BaseMapper<dto, entity>
          where dto : class
          where entity : class
    {
        public virtual entity ToEntity(dto _in)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<dto, entity>());
            IMapper iMapper = config.CreateMapper();
            entity ouput = iMapper.Map<entity>(_in);
            return ouput;
        }
        public virtual List<entity> ToEntity(List<dto> _in)
        {
            var ouput = new List<entity>();
            _in.ForEach(i => ouput.Add(ToEntity(i)));
            return ouput;
        }
        public virtual dto ToDto(entity _in)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<entity, dto>());
            IMapper iMapper = config.CreateMapper();
            dto ouput = iMapper.Map<dto>(_in);
            return ouput;
        }
        public virtual List<dto> ToDto(List<entity> _in)
        {
            var ouput = new List<dto>();
            _in.ForEach(i => ouput.Add(ToDto(i)));
            return ouput;
        }



    }
}
