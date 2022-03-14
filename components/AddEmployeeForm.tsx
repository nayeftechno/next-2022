import { useEffect, useState, useRef, FormEvent } from "react";
import { useSWRConfig } from "swr";

export default function AddEmployeeForm(): JSX.Element {
  const { mutate } = useSWRConfig();
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  useEffect(() => {
    if (!inputRef.current) return;
    //@ts-ignore
    inputRef.current.focus();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("http://localhost:4000/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.id) {
          setName("");
          //@ts-ignore
          inputRef.current.focus();
          mutate("/api/employees");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form-group">
        <input
          ref={inputRef}
          type={"text"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-control"
          placeholder="type name...."
        />
      </div>
      <div className="form-group" style={{ padding: 10, textAlign: "center" }}>
        <input type={"submit"} value="Save" className="btn btn-success" />
      </div>
    </form>
  );
}
