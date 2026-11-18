// 10. Nested Objects, Arrays & Template Literal Formatting
/*Create an object named hotelRoom representing a booking in Freetown. It must include:
Basic properties: location (e.g., "Aberdeen"), pricePerNight, guestName, and nights.
An array property named amenities containing at least 4 items (e.g., "Wi-Fi", "AC", "Ocean
View", "Breakfast").
A nested object property named bathroom containing count and hasJacuzzi.
Tasks: Log the entire amenities array and log only the hasJacuzzi property. Using template
literals, print a formatted Booking Summary Card displaying the guest's name, location, number of
nights, and total bill (pricePerNight * nights)
*/

// Answer

let hotelRoom = {
  location: "Aberdeen",
  pricePerNight: 500,
  guestName: "Franklina Nylanda",
  nights: 3,
  amenities: ["Wi-Fi", "AC", "Ocean View", "Breakfast"],
  bathroom: {
    count: 1,
    hasJacuzzi: true,
  },
};

console.log(hotelRoom.amenities); // Log entire amenities array
console.log(hotelRoom.bathroom.hasJacuzzi); // Log only hasJacuzzi

let totalBill = hotelRoom.pricePerNight * hotelRoom.nights;

// Booking Summary Card
console.log(`
*** Booking Summary Card ***
Guest Name: ${hotelRoom.guestName}
Location: ${hotelRoom.location}
Nights: ${hotelRoom.nights}
Total Bill: Le ${totalBill}

`);