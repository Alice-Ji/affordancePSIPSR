# affordancePSIPSR

## send comments javascript

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





## send comment and count likes

Qualtrics.SurveyEngine.addOnload(function() {
    console.log("Listening for messages...");

    window.addEventListener("message", function(event) {
        console.log("Received raw message:", event);

        if (event.data) {
            console.log("Received message from:", event.origin);
            console.log("Message content:", event.data);

            // Capture comments if available
            if (event.data.comments) {
                Qualtrics.SurveyEngine.setEmbeddedData("comments", event.data.comments);
                console.log("Qualtrics Embedded Data (comments) set.");
            }

            // Capture like count if available
            if (event.data.likes !== undefined) {
                Qualtrics.SurveyEngine.setEmbeddedData("likes", event.data.likes);
                console.log("Qualtrics Embedded Data (likes) set.");
            }
        } else {
            console.warn("Message received but does not contain expected data:", event.data);
        }
    });

    // Ensure Instagram embed sends data before advancing
    Qualtrics.SurveyEngine.addOnUnload(function() {
        console.log("Survey page is advancing, ensuring comments & likes are sent...");
        let iframe = document.querySelector("iframe");
        if (iframe) {
            iframe.contentWindow.postMessage({ request: "sendComments" }, "https://ruochongji.github.io");
        }
    });
});
