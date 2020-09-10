import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div id='contact' className='h-screen md:grid md:grid-cols-4 snap-start always-stop'>
      <div className='md:col-span-1' />
      <div className='md:col-span-3 md:pt-40 pt-20'>
        <p className='section-header'>Contact</p>
        <div className='md:flex md:pt-20 pt-10'>
          <div className='md:w-2/5 flex flex-col text-primary items-center mb-5'>
            <a href="https://twitter.com/codesfortacos" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className='w-16 md:w-20 mx-auto hover:text-twitter-blue' />
              <span className='font-bold'>Twitter:</span> @codesForTacos
            </a>
            <a href="https://github.com/johnmichaelbutler" target="_blank">
              <FontAwesomeIcon icon={faGithub} className='w-16 md:w-20 mx-auto hover:text-github-purple' />
              <span className='font-bold'>Github:</span> johnmichaelbutler
            </a>
            <a href="https://www.linkedin.com/in/johnmichaelbutler/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn } className='w-16 md:w-20 mx-auto hover:text-linkedin-blue' />
              <span className='font-bold'>LinkedIn:</span> johnmichaelbutler
            </a>
          </div>
          <div className='md:w-3/5 md:mr-3 font-bold text-2xl text-primary my-auto text-center'>
            <p>Have any questions for me? Interested in working together? Let's connect!</p>
            <br />
            <a href="mailto:johnmichaelbutler@yahoo.com" className='hover:text-gray-600'>johnmichaelbutler@yahoo.com</a>
            <a href="/ButlerJohnResume.pdf" target="_blank">
              <button type='button' className='bg-primary btn inline-flex cursor-pointer '>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;