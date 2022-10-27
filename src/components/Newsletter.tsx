import React from "react"

function Newsletter() {
  return (
    <div className="w-full m-auto">
      <iframe
        src="https://criticalrationalism.substack.com/embed"
        width="780"
        height="320"
        // style={{"border:1px solid #EEE; background:white;"}}
        frameBorder="0"
        style={{ margin: "auto" }}
        scrolling="no"
      ></iframe>
    </div>
  )
}

export default Newsletter
