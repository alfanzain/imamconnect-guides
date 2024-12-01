import moment from "moment";

interface PostCardProps {
  id: number;
  date: string;
  dateGmt: string;
  type: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  status: string;
  slug: string;
}

export default function PostCard({
  id,
  date,
  title,
  excerpt,
}: PostCardProps) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "10px",
        height: "300px",
        border: "1px solid #ebebeb",
        display: "block",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#6200EA",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
          padding: "5px 10px",
          borderRadius: "20px",
          zIndex: 1,
        }}
      >
        News
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://old.imamconnect.com/wp-content/uploads/2020/10/criminal-background-check-application-form-45697538-2-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "150px",
        }}
      ></div>

      <div style={{ flex: "1", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontSize: "12px", color: "#555" }}>
            {moment(date).format("D MMM, YYYY")}
          </p>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title.rendered}
          </h2>
          <p
            style={{
              fontSize: "12px",
              color: "#666",
              overflow: "hidden",
              height: "40px",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
            dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
          ></p>
        </div>

        <button
          style={{
            backgroundColor: "#00bac1",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            fontWeight: "bold",
            width: "100%",
            border: "none",
          }}
        >
          Read
        </button>
      </div>
    </div>
  );
}
