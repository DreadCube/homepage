import React, { useCallback } from 'react'
import { Card, Button, Text } from '@arwes/core'
import { useTheme, css } from '@emotion/react'

const createPreviewUrl = projectTitle => {
  return `https://raw.githubusercontent.com/DreadCube/${projectTitle}/master/preview.png`
}

const card = css`
  width: 400px;
  height: auto;
  margin: 20px;
`

const cardOptions = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const cardTopics = theme => css`
  text-align: left;
  max-width: 60%;
  margin-bottom: 0;
  color: ${theme.palette.primary.dark2};
`

const ProjectCard = ({ title, description, topics = [], repoLink }) => {
  const theme = useTheme()

  const handleRepoClick = useCallback(() => {
    window.open(repoLink)
  }, [repoLink])

  const image = {
    src: createPreviewUrl(title),
    alt: title,
  }

  return (
    <Card
      hover
      css={card}
      title={title}
      image={image}
      options={
        <div css={cardOptions}>
          <Text theme={theme} css={cardTopics(theme)} as="p">{topics.join(', ')}</Text>
          <Button
            palette="success"
            onClick={handleRepoClick}
          >
            <Text>Go to Repo</Text>
          </Button>
        </div>
      }
    >
      <Text as="p">{description}</Text>
    </Card>
  )
}

export default ProjectCard