function handleObjection() {
    const input = document.getElementById("objectionInput").value.trim().toLowerCase();
    let response = "";

    if (!input) {
        response = "Please enter an objection to get a response.";
    } else if (input.includes("already have internet")) {
        response = "That’s great — we don’t ask you to switch immediately. Let us show you how we outperform what you currently have.";
    } else if (input.includes("happy with my current service")) {
        response = "Awesome. Most of our clients were happy too — until they realized what they were missing.";
    } else if (input.includes("i don't believe you")) {
        response = "Totally fair. We prefer showing proof, not promises. Want to see how we deliver?";
    } else if (input.includes("i don’t need it")) {
        response = "I hear you — but what if this solved a problem you didn’t know existed?";
    } else if (input.includes("it's risky")) {
        response = "Understandable. That’s why we’ve made everything 100% safe, secure, and backed by our guarantee.";
    } else {
        response = "I get where you're coming from — and that's exactly why this will work for you. Let me explain how...";
    }

    document.getElementById("responseOutput").innerText = response;
}
