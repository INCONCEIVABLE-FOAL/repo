using INCONCEIVABLE.FOAL.Domain.Catalog;
using INCONCEIVABLE.FOAL.Domain.Orders;
using Microsoft.EntityFrameworkCore;

namespace INCONCEIVABLE.FOAL.Data
{
    public class StoreContext : DbContext 
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)

        { }

        public DbSet<Item> Items {get; set; }

        public DbSet<Order> Orders { get; set; }
    }
}
