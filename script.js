function generateOutpass() {
    alert("Outpass request started!");
}

function submitOutpass() {
    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;
    let reason = document.getElementById("reason").value;
    let dateGoing = document.getElementById("dateGoing").value;
    let dateReturn = document.getElementById("dateReturn").value;

    if (name === "" || room === "" || reason === "" || dateGoing === "" || dateReturn === "") {
        alert("Please fill all fields");
    } else {
        alert(
            "Outpass Submitted!\n\n" +
            "Name: " + name + "\n" +
            "Room: " + room + "\n" +
            "Reason: " + reason + "\n" +
            "From: " + dateGoing + "\n" +
            "To: " + dateReturn
        );

        document.getElementById("outpassForm").reset();
    }
}
