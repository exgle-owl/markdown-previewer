import PropTypes from "prop-types"

const Editor = ({ onChange }) => {
  return (
    <textarea id="editor" onChange={onChange} />
  )
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Editor
