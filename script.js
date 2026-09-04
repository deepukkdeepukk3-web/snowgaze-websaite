const bookingForm = document.getElementById("bookingForm");
const receipt = document.getElementById("receipt");

bookingForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const amount = Number(document.getElementById("amount").value);
  const method = document.getElementById("paymentMethod").value;

  if (!name || !phone || !service || !amount || !method) return;

  // Demo booking flow. Real Razorpay payments require a backend-generated
  // order_id and server-side signature verification.
  const bookingId = "SNW-" + Date.now().toString().slice(-8);
  const methodName = method === "razorpay" ? "Razorpay / UPI / Cards" :
                     method === "upi" ? "UPI / Google Pay / PhonePe" : "Cash on Service";

  receipt.classList.remove("hidden");
  receipt.innerHTML = `
    <h3>Booking Created</h3>
    <p><strong>Booking ID:</strong> ${bookingId}</p>
    <p><strong>Customer:</strong> ${name}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Advance:</strong> ₹${amount.toLocaleString("en-IN")}</p>
    <p><strong>Payment Method:</strong> ${methodName}</p>
    <p><strong>Status:</strong> ${method === "cash" ? "Booking received — pay on service." : "Demo payment screen only."}</p>
    <button class="btn" onclick="window.print()">Print Receipt</button>
  `;
  receipt.scrollIntoView({behavior:"smooth", block:"center"});
});

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your enquiry has been received.");
  this.reset();
});
