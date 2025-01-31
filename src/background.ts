chrome.runtime.onMessage.addListener(
    (message: { type: string; data: any }, sender, sendResponse) => {
        if (message.type === "ping") {
            console.log(
                `Received ping from ${sender.tab?.id} at ${message.data.time}`
            );

            sendResponse({
                type: "pong",
                data: {
                    time: new Date().toISOString(),
                },
            });
        }

        return true;
    }
);
