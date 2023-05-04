import { useState } from "react"
import JsonInput from "./screens/JsonInput"
import RenderedForm from "./screens/RenderedForm"
import JSONPretty from 'react-json-pretty';

function App() {
  const [data, setData] = useState()
  const [submittedData, setSubmittedData] = useState()
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-900">
        <JsonInput setData={setData} />
        <RenderedForm data={data} setSubmittedData={setSubmittedData} />
      </div>
      {submittedData && <div className="bg-white flex flex-col mb-2 items-center">
        <p className="font-bold text-xl m-8" >Submitted Data : </p>
        <JSONPretty id="json-pretty" data={submittedData}></JSONPretty>
      </div>}
    </>
  )
}

export default App
