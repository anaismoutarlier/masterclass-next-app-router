export default function PostLayout({ children }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "blue",
        padding: 40,
      }}
    >
      Post Layout
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        {children}
      </div>
    </div>
  );
}
