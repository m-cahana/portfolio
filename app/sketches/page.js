export default function Sketches() {
  return (
    <iframe
      src="https://m-cahana.github.io/p5_sketches/"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      allow="fullscreen"
      allowtransparency="true"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    />
  );
}
