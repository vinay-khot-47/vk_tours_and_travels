function send() {
    let name=document.getElementById("Name").value;
    let city=document.getElementById("City").value;
    let message=document.getElementById("Message").value;
    let whatsapp="https://wa.me/+919860193979?text="+encodeURIComponent("hi i'm "+name+","+"from "+city+".\n"+message);
    window.open(whatsapp,'_blank');
}
function booking(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let destination = document.getElementById("destination").value;
    let trip_type = document.getElementById("trip_theme").value;
    let departure_date = document.getElementById("departure_date").value;
    let return_date = document.getElementById("return_date").value;
    let departure_time = document.getElementById("departure_time").value;
    let return_time = document.getElementById("return_time").value;
    let budget = document.getElementById("budget").value;

    let serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked');
    let services = Array.from(serviceCheckboxes).map(cb => cb.value).join(", ");

    let message =   `Name: ${name}
                    Birthdate: ${birthdate}
                    Mobile No.: ${mobile}
                    Email: ${email}
                    Address: ${address}
                    Destination: ${destination}
                    Trip Type: ${trip_type}
                    Services: ${services}
                    Departure Date: ${departure_date}
                    Return Date: ${return_date}
                    Departure Time: ${departure_time}
                    Return Time: ${return_time}
                    Trip Budget: ${budget}`;

    let whatsapp = "https://wa.me/919860193979?text=" + encodeURIComponent(message);
    window.open(whatsapp, '_blank');
}
function message() {
    alert("You are going on booking page.");
    window.open("Booking.html",'_blank');
}
