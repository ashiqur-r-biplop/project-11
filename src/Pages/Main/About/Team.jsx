import img1 from '../../../assets/About/team1.png'
import { FaRegStar } from 'react-icons/fa6';

const Team = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className='text-center lg:w-1/2 p-4'>
                    <h2 className='text-xl font-bold text-neutral-400'>OUR COMPANY</h2>
                    <h1 className='text-4xl mt-2 font-bold'>Meet Our Team
                    </h1>
                    <p className='mt-4 text-xl text-neutral-500'>When it comes to choosing the right web hosting provider, we know how easy it
                        is to get overwhelmed with the number.</p>
                    <p>
                        <FaRegStar></FaRegStar>
                        <FaRegStar></FaRegStar>
                        <FaRegStar></FaRegStar>
                        <FaRegStar></FaRegStar>
                        <FaRegStar></FaRegStar>
                    </p>
                </div>
            </div>
            {/* Card Section */}
            <div className="container mx-auto px-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Arlene McCoy</h2>
                        <p>Frontend Developer</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;