import { useEffect } from 'react'

import { getEnv, getSiteConfig } from '@/lib/get-config-value'

const Utterances = ({ issueTerm }) => {
  useEffect(() => {
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    script.setAttribute('src', 'https://utteranc.es/client.js')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', String(true))
    script.setAttribute('repo', getSiteConfig('utterances'))
    script.setAttribute('issue-term', issueTerm)
    script.setAttribute('theme', 'preferred-color-scheme')
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  })
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div
      id='comments'
      style={{
        width: '100%'
      }}
    />
  )
}

export default Utterances
