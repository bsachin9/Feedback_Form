import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'this item  is from context', rating: 10 },
    { id: 2, text: 'this item  is from context', rating: 5 },
    { id: 3, text: 'this item  is from context', rating: 4 },
  ])
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure buddy')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])

    // console.log(newFeedback)
  }
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback=(id, updItem)=>{
    setFeedback(
      feedback.map((item)=>(item.id === id ? {...item, ...updItem} : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
export default FeedbackContext
