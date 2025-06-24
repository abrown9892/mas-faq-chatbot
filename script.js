const faq = {
    "what is the mas list": "The MAS List is a curated list of marketing-approved products used by Creative and Studio teams to plan and execute upcoming campaigns.",
    "tabs in the mas list": "- Category Allotment Tab – Where campaign and quantity criteria are added\n- Entry Tabs – Where new SKU numbers are added\n- Details Tabs – Where campaign-specific SKU information is displayed",
    "refresh the mas list": "Notify Antonio B or the Inventory Ops Team when the list is ready. They will refresh the query to update columns A–T in the Details tab.",
    "how long does the query refresh take": "It takes about 9–12 seconds to populate the auto-generated fields in the Details tab (columns A–T).",
    "latest mas update": "- SKUs stay in the same order as the Entry tab\n- Query refreshes preserve formatting\n- Manual data in columns V–Z remains aligned\n- New SKUs no longer disrupt workbook structure",
    "add new skus": "Yes. Add them to the Entry tab and notify Inventory Ops to refresh the query. This updates the Details tab (columns V–Z).",
    "sku isn’t showing": "1. Confirm the SKU is in the Entry tab\n2. Make sure it’s formatted correctly\n3. Request a query refresh from Inventory Ops\n4. Still stuck? Contact Antonio B",
    "missing sku data": "Check that manual entries in the Details Tab columns V–Z align with the refreshed order in columns A–T. Contact Inventory Ops if needed.",
    "who should i notify": "- Notify Antonio B/Inventory Ops when adding new SKUs\n- Notify the Category Manager for updates in the Details Tab",
    "roles of antonio b": "MAS List Management and Query Management",
    "roles of marketing managers": "They provide category allotment of products based on campaign needs",
    "roles of category managers": "They dictate SKUs for Entry Tabs and input SKU data in Details Tabs columns V–Z",
    "use of the mas list": "Studio Creative uses the products listed there to plan and develop campaigns",
    "locate mas list files": "MAS List Files - https://chewycomllc.sharepoint.com/sites/ChewyStudios/InventoryOps/_layouts/15/guestaccess.aspx?share=EkXSU3mp4y5GlHQrF9hbcLsBEtptM2xjA9kDs748T_sj0w&e=ykFwln"
};

document.getElementById("sendBtn").onclick = function() {
    const userText = document.getElementById("userInput").value.trim();
    if (!userText) return;
    addMessage(userText, "user");
    const response = getResponse(userText.toLowerCase());
    setTimeout(() => addMessage(response, "bot"), 500);
    document.getElementById("userInput").value = "";
};

function getResponse(input) {
    for (let key in faq) {
        if (input.includes(key)) return faq[key];
    }
    return "Sorry, I couldn't find an answer. Try asking about the MAS List, SKUs, updates, or file location.";
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = "message " + sender;
    msg.textContent = text;
    document.getElementById("messages").appendChild(msg);
    msg.scrollIntoView();
}
