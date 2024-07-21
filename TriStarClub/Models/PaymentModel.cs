using System.ComponentModel.DataAnnotations;

namespace TriStarClub.Models
{
    public class PaymentModel
    {
        [Required]
        [StringLength(16, MinimumLength = 16)]
        [Display(Name = "Card Number")]
        public string CardNumber { get; set; }

        [Required]
        [StringLength(5, MinimumLength = 5)]
        [Display(Name = "Expiry Date (MM/YY)")]
        public string ExpiryDate { get; set; }

        [Required]
        [StringLength(3, MinimumLength = 3)]
        [Display(Name = "CVV")]
        public string CVV { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Please enter a valid amount")]
        [Display(Name = "Amount")]
        public int Amount { get; set; }
    }

}
