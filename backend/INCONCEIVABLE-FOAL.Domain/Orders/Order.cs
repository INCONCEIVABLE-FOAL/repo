using System;
using System.Collections.Generic;
using System.Linq;

namespace INCONCEIVABLE.FOAL.Domain.Orders
{
    public class Order 
    {
        public int Id { get; set; }
        public List<OrderItem> Items { get; set; }
        public DateTime CreateDate { get; set; }
        public decimal TotalPrice => Items.Sum(i => i.Price);
    }
}