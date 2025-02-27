import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import ProfilePic from '../../assets/images/picture.jpeg'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'e', 'n', 'j', 'a', 'm', 'i', 'n', ',']
    const jobArray = ['s', 't', 'u', 'd', 'e', 'n', 't', ' ', ' ', 'a', 't', ' ', ' ', 'U', 'N', 'C', '.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 5000);
      
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
      

    return (
        <><div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m&nbsp; </span>

                    <img src='benlogo.png' alt='designed B' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17}></AnimatedLetters>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25}></AnimatedLetters>
                </h1>
                <h2>Aspiring Project Manager / Technical Sales Engineer</h2>
                <Link to='/contact' className='contact-me-button'>CONTACT ME</Link>

            </div>
        </div>
        <div className='picture-container'>
            <img className='picture' src={ProfilePic} alt='Picture of me' /></div>
            <Loader type='pacman' />
            </>
    )
    }

export default Home