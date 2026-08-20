import { useState } from "react"

export default function TableForm() {
  const data = useState([{ id: 1, name: "Laptop", price: 70000 }, { id: 2, name: "Phone", price: 60000 }])
  return (
    <div>
      {data.map((r) => (<p key={r}>{r}</p>))}
      <h1>TableForm</h1>
      <h1>TableForm</h1>
    </div>
  )
}
