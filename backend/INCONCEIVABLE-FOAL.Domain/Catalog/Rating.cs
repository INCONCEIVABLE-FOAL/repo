using System;

namespace INCONCEIVABLE.FOAL.Domain.Catalog
{
    public class Rating
    {
        public int Id { get; set; }
        public int Star { get; set; }
        public string UserName { get; set; }
        public string Review { get; set; }

        public Rating(int stars, string UserName, string Review)
        {
            if (stars < 1 || stars > 5)
            {
                throw new ArgumentException("Star rating must be an integer: 1, 2, 3, 4, or 5.");
            }

            if (string.IsNullOrEmpty(UserName))
            {
                throw new ArgumentException("UserName cannot be null.");
            }

            this.Star = stars;
            this.UserName = UserName;
            this.Review = Review;
        }
    }
}

