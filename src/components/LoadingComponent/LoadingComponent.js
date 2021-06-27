import loadingGif from "./assets/1488.gif"

export function Loading() {
    // Component that adds a loading gif, mainly to use when waiting for API Calls
    return (
        <div>
            <img height="28px" src={loadingGif} alt="loading-gif" />
        </div>
    )
}

export function isLoading(loading) {
    // Checks if an API call was made, if so then replaces the text in the button with a Loading component
    if (loading === true) { return true }
    else { return false }
}
