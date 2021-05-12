import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div id='contact' className='h-auto lg:h-screen lg:grid md:grid-cols-4 mx-2 lg:pt-20 pb-8'>
      <div className='lg:col-span-1' />
      <div className='lg:col-span-3 md:pt-40 pt-20'>
        <p className='section-header'>Contact</p>
        <div className='lg:flex lg:pt-20'>
          <div className='lg:w-2/5 text-lg flex flex-col text-primary items-center mb-5 space-y-2'>
            <a href="https://twitter.com/johnbutlerdev" target="_blank" rel="noopener" className="hover:text-twitter-blue">
              <FontAwesomeIcon icon={faTwitter} className='inline-flex w-7 mx-auto mr-3' />
              <span className='font-bold'>Twitter:</span> @JohnButlerDev
            </a>
            <a href="https://github.com/johnmichaelbutler" target="_blank" rel="noopener" className="hover:text-github-purple">
              <FontAwesomeIcon icon={faGithub} className='inline-flex w-7 mx-auto  mr-3' />
              <span className='font-bold'>Github:</span> johnmichaelbutler
            </a>
            <a href="https://www.linkedin.com/in/johnmichaelbutler/" target="_blank" rel="noopener" className="hover:text-linkedin-blue">
              <FontAwesomeIcon icon={faLinkedinIn } className='inline-flex w-7 mx-auto  mr-3' />
              <span className='font-bold'>LinkedIn:</span> johnmichaelbutler
            </a>
          </div>
          <div className='lg:w-3/5 md:mr-3 font-bold text-2xl text-primary my-auto text-center'>
            <p>Have any questions for me? Interested in working together? Let's connect!</p>
            <br />
            <a href="mailto:johnbutlerdev@yahoo.com" className='hover:text-gray-500'>johnbutlerdev@yahoo.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;