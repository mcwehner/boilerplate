async function sendMessage(type: string, data: any) {
    const response = await chrome.runtime.sendMessage({ type, data });

    return response;
}

window.addEventListener("load", async () => {
    const response = await sendMessage("ping", {
        time: new Date().toISOString(),
    });

    console.log(`Received pong at ${response.data.time}`);
});
