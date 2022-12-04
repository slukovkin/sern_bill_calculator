import React from 'react'

function Report(props) {

  React.useEffect(()=> {
    document.title = props.title
  })
  return (
    <div>Report</div>
  )
}

export default Report