using System;
using INCONCEIVABLE.FOAL.Domain.Catalog;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace _INCONCEIVABLE_FOIL_.Domain.Tests
{
    [TestClass]
    public class RatingTests
    {
        [TestMethod]
        public void Can_Create_New_Rating()
        {
            // Arrange
            var rating = new Rating(1, "Mike", "Great fit!");

            // act - skip becaues there isn't action on constructor
            Assert.AreEqual(1, rating.Star);
            Assert.AreEqual("Mike", rating.UserName);
            Assert.AreEqual("Great fit!", rating.Review);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void Create_With_Bad_Start_Throws_Error() {
            var rating = new Rating(0, "Name", "Review");

            // act - skip becaues there isn't action on constructor
            Assert.AreEqual(0, rating.Star);
            Assert.AreEqual("Name", rating.UserName);
            Assert.AreEqual("Review", rating.Review);
        }
    }
}
