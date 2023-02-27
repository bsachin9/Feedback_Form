import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'


function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  // useEffect(() => {
  //   console.log('hey guys')
  // }, [])


  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    
    setText(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }
      else{
      addFeedback(newFeedback)
      }
      setText('')
    }
  }
  return (
    <Card>
      <form action='' onSubmit={handleSubmit}>
        <h2>how would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='write your review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            send
          </Button>
          {/* <button type='submit'>send</button> */}
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}


export default FeedbackForm