export default function Videos() {
  return (
    <div className="videos-page">
      <h1>Videos</h1>

      {/* Video 1 */}
      <div className="tiktok-embed-container">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@andymusicproducer/video/7590697441641368854"
          data-video-id="7590697441641368854"
          style={{ maxWidth: "605px", minWidth: "325px" }}
        >
          <section></section>
        </blockquote>
      </div>

      {/* Video 2 */}
      <div className="tiktok-embed-container">
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@andymusicproducer/video/7602190541152849174?is_from_webapp=1&sender_device=pc&web_id=7563045564041659926"
          data-video-id="7602190541152849174"
          style={{ maxWidth: "605px", minWidth: "325px" }}
        >
          <section></section>
        </blockquote>
      </div>
    </div>
  );
}
