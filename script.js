
function showResponse() {
    const type = document.getElementById('responseType').value;
    const responseBox = document.getElementById('response');
    const tips = [
        "Take three deep breaths. Inhale calm, exhale tension.",
        "Step outside, even for just 2 minutes. Nature calms the mind.",
        "Put your phone down for 10 minutes. Just be.",
    ];
    const affirmations = [
        "You are enough, just as you are.",
        "It’s okay to rest. You deserve peace.",
        "You are not alone. You are deeply loved.",
    ];
    const chosen = type === "Tip" ? tips : affirmations;
    const message = chosen[Math.floor(Math.random() * chosen.length)];
    responseBox.textContent = message;
}
