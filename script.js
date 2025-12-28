function submitOutpass() {
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const reason = document.getElementById('reason').value;
    const dateGoing = document.getElementById('dateGoing').value;
    const dateReturn = document.getElementById('dateReturn').value;

    if(!name || !room || !reason || !dateGoing || !dateReturn){
        alert("Please fill all details");
        return;
    }

    fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, room, reason, dateGoing, dateReturn })
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.log(err));
}
