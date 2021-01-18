import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div id='contact' className='h-auto lg:h-screen lg:grid md:grid-cols-4 lg:snap-start lg:always-stop mx-2 lg:pt-20'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 md:pt-40 pt-20'>
        <p className='section-header reflect-small'>Contact</p>
        <div className='lg:flex lg:pt-20'>
          <div className='lg:w-2/5 flex flex-col text-primary items-center mb-5'>
            <a href="https://twitter.com/johnbutlerdev" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faTwitter} className='w-16 lg:w-20 mx-auto hover:text-twitter-blue mr-3' />
              <span className='font-bold'>Twitter:</span> @JohnButlerDev
            </a>
            <a href="https://github.com/johnmichaelbutler" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faGithub} className='w-16 lg:w-20 mx-auto hover:text-github-purple mr-3' />
              <span className='font-bold'>Github:</span> johnmichaelbutler
            </a>
            <a href="https://www.linkedin.com/in/johnmichaelbutler/" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faLinkedinIn } className='w-16 lg:w-20 mx-auto hover:text-linkedin-blue mr-3' />
              <span className='font-bold'>LinkedIn:</span> johnmichaelbutler
            </a>
          </div>
          <div className='lg:w-3/5 md:mr-3 font-bold text-2xl text-primary my-auto text-center'>
            <p>Have any questions for me? Interested in working together? Let's connect!</p>
            <br />
            <a href="mailto:johnmichaelbutler@yahoo.com" className='hover:text-gray-600'>johnmichaelbutler@yahoo.com</a>
            <div className='block mx-auto '>
              <a href="/ButlerJohnResume.pdf" target="_blank" rel="noopener">
                <button type='button' className='bg-primary btn cursor-pointer transform shadow-lg hover:shadow-2xl hover:-translate-y-1 active:outline-none active:translate-y-0 active:shadow-lg focus:outline-none'>
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;