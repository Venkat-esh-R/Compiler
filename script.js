document.getElementById("compileButton").addEventListener("click", async () => {
    const codeInput = document.getElementById("codeInput").value.trim();

    if (!codeInput) {
        alert("Please enter an arithmetic expression.");
        return;
    }

    try {
        const response = await fetch("/compile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code: codeInput }),
        });

        const result = await response.json();
        document.getElementById("output").textContent = result.output || result.error;
    } catch (err) {
        document.getElementById("output").textContent = "Error communicating with the server.";
    }
});
