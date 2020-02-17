using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using src.common.DTOS;
using src.services.iServices;

namespace src.controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;

        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

       
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(userService.List());
        }

  
        [HttpGet]
        [Route("{userId}")]
        public IActionResult Get(int userId)
        {
            return Ok(userService.GetBy(userId));
        }
         
        [HttpPut]
        [Route("{userId}")]
        public IActionResult Edit([FromBody] UserDTO dto)
        {
            if (ModelState.IsValid)
            {
                userService.Edit(dto);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpPost]
        public IActionResult Create([FromBody] UserDTO dto)
        {
            if (ModelState.IsValid)
            {
                userService.Create(dto);
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }

         [HttpDelete]
        [Route("{userId}")]
        public IActionResult Delete(int userId)
        {
            userService.Remove(userId);
            return Ok();
        }
    }
}
