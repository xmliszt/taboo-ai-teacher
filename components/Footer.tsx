export default function Footer() {
  return (
    <>
      <span>
        Powered By{' '}
        <a
          href='https://openai.com/blog/chatgpt'
          target='_blank'
          className='underline'
        >
          ChatGPT
        </a>{' '}
        &{' '}
        <a
          href='https://firebase.google.com'
          target='_blank'
          className='underline'
        >
          Firebase
        </a>
      </span>
      <span>
        Created By{' '}
        <a
          href='https://xmliszt.github.io'
          target='_blank'
          className='underline'
        >
          Li Yuxuan
        </a>
      </span>
    </>
  );
}
