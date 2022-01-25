import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', () => {
  render(<Home user={user} />)

  const { name, likes, motto, color } = user
  const header = screen.getByAltText('header')
  const avatar = screen.getByAltText('avatar')

  const userName = screen.getByRole('heading', { name })
  const interests = screen.getByRole('heading', { name: /interests/i })
  const userLikes = screen.getByRole('list')

  const userMotto = screen.getByText(motto)
  const userColor = screen.getByText(color)

  expect(header).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(userName).toBeInTheDocument()
  expect(interests).toBeInTheDocument()
  expect(userMotto).toBeInTheDocument()
  expect(userColor).toBeInTheDocument()
  expect(userLikes.children.length).toEqual(likes.length)
})
