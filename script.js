function generateOutpass() {
    alert("Outpass request submitted for verification!");
}
function submitOutpass() {
    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;
    let reason = document.getElementById("reason").value;
    let dateGoing = document.getElementById("dateGoing").value;
    let dateReturn = document.getElementById("dateReturn").value;

    if(name === "" || room === "" || reason === "" || dateGoing === "" || dateReturn === "") {
        alert("Please fill all the fields!");
    } else {
        alert("Outpass submitted for " + name + " from " + dateGoing + " to " + dateReturn);
        document.getElementById("outpassForm").reset(); // form reset
    }
}
