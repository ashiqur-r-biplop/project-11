import AboutUsBanner from '../../../Component/Main/Home/Contact-Compo/AboutUsBanner'
import Locatoin from '../../../Component/Main/Home/Contact-Compo/Locatoin'
import ContactForm from '../../../Component/Main/Home/Contact-Compo/ContactForm'
import OurTeam from '../../../Component/Main/Home/Contact-Compo/OurTeam'
import Testimonial from '../../../Component/Main/Home/Contact-Compo/Testimonial'
import JobPostForm from '../../Dashboard/Company/JobPostForm/JobPostForm'

const Contact = () => {
  return (
    <>
      <AboutUsBanner />
      <Locatoin />
      <ContactForm />
      <OurTeam />
      <Testimonial />
      <JobPostForm></JobPostForm>
    </>
  )
}

export default Contact