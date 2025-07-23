function send() {
    let name=document.getElementById("Name").value;
    let city=document.getElementById("City").value;
    let message=document.getElementById("Message").value;
    let whatsapp="https://wa.me/+919860193979?text="+encodeURIComponent("hi "+name+","+"from "+city+".\n"+message);
    window.open(whatsapp,'_blank');
}
function booking() {
    let name=document.getElementById("name").value;
    let birthdate=document.getElementById("birthdate").value;
    let mobile=document.getElementById("mobile").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let destination=document.getElementById("destination").value;
    let trip_type=document.getElementById("trip_theme").value;
    let service=document.getElementById("service").value;
    let departure_date=document.getElementById("departure_date").value;
    let return_date=document.getElementById("return_date").value;
    let departure_time=document.getElementById("departure_time").value;
    let return_time=document.getElementById("return_time").value;
    let budget=document.getElementById("budget").value;
    let whatsapp="https://wa.me/+919860193979?text="+encodeURIComponent("Name : "+name+"\n"+
                                                                        "Birthdate : "+birthdate+".\n"+
                                                                        "Mobile No. :"+mobile+"\n"+
                                                                        "Email : "+email+"\n"+
                                                                        "Address : "+address+"\n"+
                                                                        "Destination : "+destination+"\n"+
                                                                        "Trip Type : "+trip_type+"\n"+
                                                                        "Services : "+service+"\n"+
                                                                        "Departure Date : "+departure_date+"\n"+
                                                                        "Return Date : "+return_date+"\n"+
                                                                        "Departure Time : "+departure_time+"\n"+
                                                                        "Return Time : "+return_time+"\n"+
                                                                        "Trip Buget : "+budget+"\n"                                                                   
                                                                    );
    window.open(whatsapp,'_blank');
}
function message() {
    alert("You are going on booking page.");
    let booking="Booking.html";
    window.open(booking,'_blank');
}
