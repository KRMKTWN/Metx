document.getElementById("checkButton").addEventListener("click", async () => {
  const result = document.getElementById("result");
  const address = document.getElementById("addressInput").value.trim();

  if (!address) {
    result.textContent = "WTF! Please enter an XRPL address or NFT ID.";
    return;
  }

  result.textContent = `Checking rights for ${address}... (demo mode)`;

  try {
    // DEMO — ici on simule juste la réponse
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const outcomes = [
      "CC0 — Free commercial use allowed.",
      "PFP — Personal use only.",
      "No license — Collectible only.",
      "License unclear — check project metadata."
    ];
    const random = outcomes[Math.floor(Math.random() * outcomes.length)];

    result.textContent = random;
  } catch (error) {
    result.textContent = "❌ Error fetching NFTs. Try again later.";
  }
});
