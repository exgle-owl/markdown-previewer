import PropTypes from 'prop-types'
import DOMPurify from "dompurify"
import { marked } from "marked"

const Preview = ({ text }) => {
  const textToHTML = DOMPurify.sanitize(marked(text))
  return (
    <section id="preview" dangerouslySetInnerHTML={{ __html: textToHTML }}>
    </section>
  )
}

Preview.propTypes = {
  text: PropTypes.string
}

export default Preview
