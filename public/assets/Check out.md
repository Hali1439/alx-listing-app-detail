# 🧾 Checkout Page – Airbnb Clone

## 📄 Overview

The **Checkout Page** is the final step in the booking flow. It collects guest contact information, payment details, and shows a full booking summary before completing a reservation. The layout is optimized for usability, accessibility, and responsiveness across all screen sizes.

---

![Check out](https://github.com/Hali1439/alx-listing-app/blob/bcbb1e6c4d9dd9fbe0d2f0193ee7d646ce14f7c8/public/assets/Check%20out.png)

## ✅ Key Sections

### 1. 👤 Contact Details

* Fields for:

  * First Name
  * Last Name
  * Email
  * Phone Number
* User receives confirmation and communication via provided contact information.
* Input validation ensures proper formatting (email, phone).

---

### 2. 💳 Payment Information

#### Payment Method

* Dropdown with payment method selection (default: Credit/Debit Card).

#### Credit/Debit Card Form

* Card number
* Expiration date (MM/YY)
* CVV
* Billing address:

  * Street Address
  * City
  * State
  * Zip code
  * Country

#### Security

* Fields use masked input for sensitive data.
* ARIA roles and labels can be added for accessibility compliance.

---

### 3. 🏠 Review Order Details

* Property name and image
* Star rating and number of reviews
* Stay summary:

  * Booking Fee
  * Selected Dates
  * Taxes and Fees
  * **Grand Total**
* Appears as a sticky side panel on desktop and scrolls into view on smaller screens.

---

### 4. 📜 Cancellation Policy

* Text: "Free cancellation before \[date]. Cancel before \[time] on \[date] for a partial refund."
* Helps users understand refund conditions before payment.

---

### 5. 📌 Ground Rules

Three bullet points guiding guest conduct:

* Follow the house rules
* Be respectful of neighbors
* Treat the home as your own

These increase host safety and platform trust.

---

### 6. ✅ Call to Action

* Button: **"Confirm & Pay"**
* Validates inputs and sends payment and booking details to the backend

---

## 📱 Responsiveness

| Device      | Behavior                                                     |
| ----------- | ------------------------------------------------------------ |
| **Desktop** | Two-column layout, with order summary on the right           |
| **Tablet**  | Stack layout with form above, summary below                  |
| **Mobile**  | Fully stacked single-column layout for easy thumb navigation |

---

## 🔐 Accessibility Considerations

* Labels linked to inputs via `for` and `id`
* Descriptive placeholders and ARIA attributes
* `aria-live` regions for dynamic error/success feedback
* Sufficient color contrast for buttons and text

---

## 💡 UX Enhancements (Suggestions)

* Save guest info for future bookings (with consent)
* Autofill billing address if same as contact
* Real-time card validation (e.g., Luhn check)
* "Edit booking" button to return to detail page

