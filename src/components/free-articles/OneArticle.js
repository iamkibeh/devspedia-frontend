import React, { useEffect, useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { useNavigate } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const OneArticle = ({ article, action = '' }) => {
  const [open, setOpen] = React.useState(false)
  const [dev, setDev] = useState({})
  const navigate = useNavigate()
  const {
    created_at,
    featured_image,
    id,
    likes,
    minutes_to_read,
    title,
    content,
  } = article

  useEffect(() => {
    fetch(`https://devspedia-api-production.up.railway.app/devs/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('dev-token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setDev(data)
      })
  }, [id])
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // console.log('devs side render', action)

  const handleDeleteRequest = () => {
    fetch(`https://devspedia-api-production.up.railway.app/myarticles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('dev-token')}`,
      },
    })
    navigate('/dev/dashboard/articles')
    window.location.reload()
  }
  return (
    <div>
      <div className='article-card' onClick={handleClickOpen}>
        <div className='article-image'>
          <div className='article-image-myimage'>
            <img src={featured_image} alt='profile pic' />
          </div>
          <p>
            {dev.fname} {dev.lname}
          </p>
        </div>

        <div className='article-content'>
          <div className='article-title'>
            <h4>{title}</h4>
          </div>
          <div className='article-description'>
            {
              `${content.substring(0, 30)}...` /* <p>
							{readMore
								? `${article.content}`
								: `${article.content.substring(0, 30)}...`}
						</p>

						<button onClick={() => setReadMore(!readMore)}>
							{readMore ? "show less" : "  read more"}
						</button> */
            }
          </div>
          <div className='article-footer'>
            <p>{created_at.slice(0, 10)}</p>
            <p>
              {likes} <BsHeart />
            </p>
            <p>Minutes to read {minutes_to_read}</p>
          </div>
        </div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: 'relative' }}
          styles={{ backgroundColor: '#586b88' }}
        >
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              {title}
            </Typography>
            <Typography sx={{ ml: 50, flex: 1 }} variant='h6' component='div'>
              {action && (
                <button className='delete-btn' onClick={handleDeleteRequest}>
                  delete
                </button>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='article-image'>
          <div className='article-image-myimage'>
            <img src={featured_image} alt='profile pic' />
          </div>
          <p>
            {dev.fname} {dev.lname}
          </p>
        </div>
        <div className='article-description'>
          <p>{article.content}</p>
        </div>
        <div className='article-footer'>
          <p>{created_at.slice(0, 10)}</p>
          <p>
            {likes} <BsHeart />
          </p>
          <p>Minutes to read {minutes_to_read}</p>
        </div>
      </Dialog>
    </div>
  )
}

export default OneArticle
