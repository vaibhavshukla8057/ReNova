import React, { useEffect, useState } from "react";
import { MyRouteResponse } from "@shared/api";

export default function MyPage() {
  const [data, setData] = useState<MyRouteResponse | null>(null);

  useEffect(() => {
    fetch("/api/my-endpoint")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}


