# affordancePSIPSR

qualtrics question javascript

Qualtrics.SurveyEngine.addOnload(function() {
    console.log("Listening for messages...");

    window.addEventListener("message", function(event) {
        console.log("Received raw message:", event);

        if (event.data && event.data.comments) {
            console.log("Received message from:", event.origin);
            console.log("Message content:", event.data);

            Qualtrics.SurveyEngine.setEmbeddedData("comments", event.data.comments);
            console.log("Qualtrics Embedded Data should now be set.");
        } else {
            console.warn("Message received but does not contain 'comments':", event.data);
        }
    });

    // Force Instagram embed to send comments before advancing
    Qualtrics.SurveyEngine.addOnUnload(function() {
        console.log("Survey page is advancing, ensuring comments are sent...");
        let iframe = document.querySelector("iframe");
        if (iframe) {
            iframe.contentWindow.postMessage({ request: "sendComments" }, "https://ruochongji.github.io");
        }
    });
});





qualtrics js version 2

Qualtrics.SurveyEngine.addOnload(function() {
    console.log("👂 Listening for messages from the Instagram page...");

    window.addEventListener("message", function(event) {
        console.log("📩 Received message:", event);

        // ✅ Ensure the message contains `comments`
        if (event.data && event.data.comments) {
            console.log("🔗 Message received from:", event.origin);
            console.log("💬 Comments received:", event.data.comments);

            // ✅ Set embedded data in Qualtrics
            Qualtrics.SurveyEngine.setEmbeddedData("comments", event.data.comments);
            console.log("✅ Qualtrics Embedded Data has been set.");
        } else {
            console.warn("⚠️ Message received but no 'comments' data:", event.data);
        }
    });

    // ✅ Force comments to send before Qualtrics advances
    Qualtrics.SurveyEngine.addOnUnload(function() {
        console.log("⚠️ Page is advancing. Ensuring comments are sent...");
        
        let iframe = document.querySelector("iframe");
        if (iframe) {
            console.log("🛜 Requesting comment transfer before page change...");
            iframe.contentWindow.postMessage({ request: "sendComments" }, "*");
        }
    });
});
