using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using src.domain.entities;

namespace src.domain.context
{
    public class UserAppContext : DbContext
    {

        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
              
                optionsBuilder.UseSqlServer(@"server=localhost\sqlexpress;Database=UserApp;Trusted_Connection=Yes");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
     
            modelBuilder.Entity<User>(entity =>
            {
               
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false);
                entity.Property(e => e.UserName)
                   .IsRequired()
                   .HasMaxLength(20)
                   .IsUnicode(false);
                entity.Property(e => e.Email)
                  .IsRequired()
                  .HasMaxLength(40)
                  .IsUnicode(false);
                entity.Property(e => e.Phone)           
                  .HasMaxLength(10)
                  .IsUnicode(false);
            });
        }
    }
}
